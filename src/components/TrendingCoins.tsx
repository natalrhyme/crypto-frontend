import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TrendingCoin } from '@/types';

interface TrendingCoinsProps {
  coins: TrendingCoin[];
}

export const TrendingCoins: React.FC<TrendingCoinsProps> = ({ coins }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-secondary-100 hover:border-secondary-200 transition-colors">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.slice(0, 3).map((coin) => {
          const change = coin.item.data.price_change_percentage_24h.usd;
          const isPositive = change > 0;

          return (
            <div
              key={coin.item.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-6 h-6"
                />
                <span className="font-medium text-gray-800">
                  {coin.item.symbol.toUpperCase()}
                </span>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  isPositive ? 'text-emerald-500' : 'text-rose-500'
                }`}
              >
                {isPositive ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span>{Math.abs(change).toFixed(2)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};