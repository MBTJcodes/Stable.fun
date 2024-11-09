import React from 'react';
import { Shield, Wallet, BarChart3, Coins } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Stable',
    description: 'Backed by real government bonds through Etherfuse stablebonds, ensuring stability and security.'
  },
  {
    icon: Wallet,
    title: 'Earn Yield',
    description: 'Generate passive income from your stablecoin through underlying bond yields.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track your stablecoin performance, supply, and yield in real-time.'
  },
  {
    icon: Coins,
    title: 'Multiple Currencies',
    description: 'Create stablecoins pegged to various fiat currencies backed by their respective bonds.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose stable.fun?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Create and manage your own yield-bearing stablecoins with confidence
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}