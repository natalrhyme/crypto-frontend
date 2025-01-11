import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface BitcoinCardProps {
  usdPrice: number;
  inrPrice: number;
  change24h: number;
}

export const BitcoinCard: React.FC<BitcoinCardProps> = ({
  usdPrice,
  inrPrice,
  change24h,
}) => {
  const isPositiveChange = change24h > 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
            alt="Bitcoin"
            className="w-8 h-8"
          />
          <h2 className="text-2xl font-bold">Bitcoin</h2>
          <span className="text-gray-500">BTC</span>
        </div>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          Rank #1
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold">${usdPrice.toLocaleString()}</span>
          <div
            className={`flex items-center gap-1 ${
              isPositiveChange ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {isPositiveChange ? (
              <TrendingUp size={20} />
            ) : (
              <TrendingDown size={20} />
            )}
            <span className="font-medium">
              {Math.abs(change24h).toFixed(2)}%
            </span>
          </div>
        </div>
        <span className="text-gray-600">
          ₹ {inrPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
};