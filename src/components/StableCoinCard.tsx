import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import type { StableCoin } from '../types';

interface Props {
  coin: StableCoin;
}

export default function StableCoinCard({ coin }: Props) {
  return (
    <Link
      to={`/coin/${coin.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          {coin.icon ? (
            <img src={coin.icon} alt={coin.name} className="w-10 h-10 rounded-full" />
          ) : (
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-semibold">{coin.symbol[0]}</span>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-gray-900">{coin.name}</h3>
            <p className="text-sm text-gray-500">{coin.symbol}</p>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-gray-400" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Total Supply</p>
          <p className="font-semibold text-gray-900">
            {coin.totalSupply.toLocaleString()} {coin.symbol}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Current APY</p>
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <p className="font-semibold text-gray-900">{coin.apy}%</p>
          </div>
        </div>
      </div>
    </Link>
  );
}