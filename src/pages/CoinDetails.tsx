import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Wallet, ArrowDownUp } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

export default function CoinDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState<'overview' | 'holders' | 'transactions'>('overview');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Example data - replace with real data from your Solana program
  const coinData = {
    name: 'USD Yield',
    symbol: 'USDY',
    totalSupply: 1000000,
    apy: 4.5,
    price: 1.00,
    holders: 156,
    volume24h: 25000,
  };

  const handleMint = async () => {
    if (!connected || !amount) return;
    setIsLoading(true);
    try {
      // TODO: Implement minting logic using Solana program
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Failed to mint:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBurn = async () => {
    if (!connected || !amount) return;
    setIsLoading(true);
    try {
      // TODO: Implement burning logic using Solana program
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Failed to burn:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-indigo-600">
                {coinData.symbol[0]}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{coinData.name}</h1>
              <p className="text-gray-500">{coinData.symbol}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span className="font-semibold text-green-500">{coinData.apy}% APY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Total Supply</p>
            <p className="text-xl font-semibold text-gray-900">
              {coinData.totalSupply.toLocaleString()} {coinData.symbol}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Holders</p>
            <p className="text-xl font-semibold text-gray-900">
              {coinData.holders.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">24h Volume</p>
            <p className="text-xl font-semibold text-gray-900">
              ${coinData.volume24h.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('holders')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'holders'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Holders
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'transactions'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Transactions
            </button>
          </nav>
        </div>

        {!connected ? (
          <div className="text-center py-12">
            <Wallet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Connect Your Wallet</h3>
            <p className="mt-2 text-gray-600">
              Connect your wallet to mint or burn tokens
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Mint Tokens</h3>
              <div className="flex space-x-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  min="0"
                />
                <button
                  onClick={handleMint}
                  disabled={!amount || isLoading}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Minting...' : 'Mint'}
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Burn Tokens</h3>
              <div className="flex space-x-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  min="0"
                />
                <button
                  onClick={handleBurn}
                  disabled={!amount || isLoading}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Burning...' : 'Burn'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}