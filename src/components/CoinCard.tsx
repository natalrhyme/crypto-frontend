import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CoinData } from '@/types';

interface CoinCardProps {
  coin: CoinData;
}

export const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const isPositiveChange = coin.market_data.price_change_percentage_24h > 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-primary-100 hover:border-primary-200 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src={coin.image.small}
            alt={coin.name}
            className="w-8 h-8"
          />
          <h2 className="text-2xl font-bold text-gray-800">{coin.name}</h2>
          <span className="text-primary-600">{coin.symbol.toUpperCase()}</span>
        </div>
        <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
          Rank #{coin.market_cap_rank}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">
            ${coin.market_data.current_price.usd.toLocaleString()}
          </span>
          <div
            className={`flex items-center gap-1 ${
              isPositiveChange ? 'text-emerald-500' : 'text-rose-500'
            }`}
          >
            {isPositiveChange ? (
              <TrendingUp size={20} />
            ) : (
              <TrendingDown size={20} />
            )}
            <span className="font-medium">
              {Math.abs(coin.market_data.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        </div>
        <span className="text-primary-600 font-medium">
          ₹ {coin.market_data.current_price.inr.toLocaleString()}
        </span>
      </div>
    </div>
  );
};