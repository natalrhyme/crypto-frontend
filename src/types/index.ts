export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      usd: number;
      inr: number;
    };
    price_change_percentage_24h: number;
  };
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_cap_rank: number;
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    thumb: string;
    small: string;
    large: string;
    price_btc: number;
    score: number;
    sparkline: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}