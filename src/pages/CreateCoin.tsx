import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import { useWallet } from '../context/WalletContext';
import type { CreateStableCoinForm } from '../types';

const SUPPORTED_CURRENCIES = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
];

export default function CreateCoin() {
  const navigate = useNavigate();
  const { connected } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateStableCoinForm>({
    name: '',
    symbol: '',
    icon: '',
    targetCurrency: 'USD',
    initialSupply: 1000000,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!connected) return;

    setIsLoading(true);
    try {
      // TODO: Implement stablecoin creation logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
      navigate('/');
    } catch (error) {
      console.error('Failed to create stablecoin:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Stablecoin</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stablecoin Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., USD Yield"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Symbol
            </label>
            <input
              type="text"
              value={formData.symbol}
              onChange={e => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., USDY"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Currency
            </label>
            <select
              value={formData.targetCurrency}
              onChange={e => setFormData({ ...formData, targetCurrency: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              {SUPPORTED_CURRENCIES.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Initial Supply
            </label>
            <input
              type="number"
              value={formData.initialSupply}
              onChange={e => setFormData({ ...formData, initialSupply: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Icon (Optional)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-gray-500 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-indigo-500">
                <Upload className="h-8 w-8 mb-2" />
                <span className="text-sm">Upload a PNG or SVG file</span>
                <input type="file" className="hidden" accept=".png,.svg" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!connected || isLoading}
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating...' : 'Create Stablecoin'}
          </button>
        </form>
      </div>
    </div>
  );
}