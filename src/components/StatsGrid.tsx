import React from 'react';
import { Coins, TrendingUp, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    name: 'Total Value Locked',
    value: '$1.2M',
    change: '+12.3%',
    icon: DollarSign,
  },
  {
    name: 'Active Stablecoins',
    value: '24',
    change: '+3',
    icon: Coins,
  },
  {
    name: 'Average APY',
    value: '4.8%',
    change: '+0.5%',
    icon: TrendingUp,
  },
  {
    name: 'Total Users',
    value: '1.2k',
    change: '+123',
    icon: Users,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.name}</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}