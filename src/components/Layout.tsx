import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coins, Home, PlusCircle, Settings } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const location = useLocation();
  const { connected, connect, disconnect } = useWallet();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Coins className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-900">stable.fun</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {connected ? (
                <button
                  onClick={disconnect}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Disconnect Wallet
                </button>
              ) : (
                <button
                  onClick={connect}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-screen pt-16">
        <aside className="w-64 fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200">
          <nav className="p-4 space-y-2">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/create"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/create'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <PlusCircle className="h-5 w-5" />
              <span>Create Coin</span>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}