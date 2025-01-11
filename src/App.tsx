import React, { useEffect, useState } from 'react';
import { BitcoinCard } from './components/BitcoinCard';
import { TradingViewChart } from './components/TradingViewChart';
import { TrendingCoins } from './components/TrendingCoins';
import { CoinCarousel } from './components/CoinCarousel';
import { getBitcoinPrice, getTrendingCoins } from './api';
import { BitcoinPrice, TrendingCoin } from './types';

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState<BitcoinPrice | null>(null);
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceData, trendingData] = await Promise.all([
          getBitcoinPrice(),
          getTrendingCoins(),
        ]);
        setBitcoinPrice(priceData);
        setTrendingCoins(trendingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (!bitcoinPrice) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BitcoinCard
              usdPrice={bitcoinPrice.bitcoin.usd}
              inrPrice={bitcoinPrice.bitcoin.inr}
              change24h={bitcoinPrice.bitcoin.usd_24h_change}
            />
            <TradingViewChart />
          </div>
          <div className="space-y-6">
            <TrendingCoins coins={trendingCoins} />
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <CoinCarousel title="You May Also Like" coins={trendingCoins} />
          <CoinCarousel title="Trending Coins" coins={trendingCoins} />
        </div>
      </div>
    </div>
  );
}

export default App;