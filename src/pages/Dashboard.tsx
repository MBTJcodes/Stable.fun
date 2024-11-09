import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowUpRight, Coins } from 'lucide-react';
import { useWallet } from '../context/WalletContext';
import StableCoinCard from '../components/StableCoinCard';
import StatsGrid from '../components/StatsGrid';

export default function Dashboard() {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState<'created' | 'holdings'>('created');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Link
          to="/create"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Stablecoin
        </Link>
      </div>

      <StatsGrid />

      {!connected ? (
        <div className="text-center py-12">
          <Coins className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Connect Your Wallet</h3>
          <p className="mt-2 text-gray-600">
            Connect your wallet to view your stablecoins and holdings
          </p>
        </div>
      ) : (
        <>
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('created')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'created'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Created Stablecoins
              </button>
              <button
                onClick={() => setActiveTab('holdings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'holdings'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Holdings
              </button>
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example stablecoins - replace with real data */}
            <StableCoinCard
              coin={{
                id: '1',
                name: 'USD Yield',
                symbol: 'USDY',
                icon: '',
                targetCurrency: 'USD',
                totalSupply: 1000000,
                creator: 'your-address',
                apy: 4.5,
                createdAt: new Date(),
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}