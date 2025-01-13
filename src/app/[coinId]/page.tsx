import { getCoinData, getTrendingCoins } from '@/lib/api';
import { CoinCard } from '@/components/CoinCard';
import { TradingViewChart } from '@/components/TradingViewChart';
import { TrendingCoins } from '@/components/TrendingCoins';
import { CoinCarousel } from '@/components/CoinCarousel';

interface PageProps {
  params: {
    coinId: string;
  };
}

export default async function CoinPage({ params }: PageProps) {
  const [coinData, trendingCoins] = await Promise.all([
    getCoinData(params.coinId),
    getTrendingCoins(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CoinCard coin={coinData} />
            <TradingViewChart symbol={coinData.symbol} />
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
