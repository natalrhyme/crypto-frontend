import axios from 'axios';
import { CoinData, TrendingCoin } from '@/types';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const getCoinData = async (id: string): Promise<CoinData> => {
  const response = await axios.get(
    `${COINGECKO_API}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  return response.data;
};

export const getTrendingCoins = async (): Promise<TrendingCoin[]> => {
  const response = await axios.get(`${COINGECKO_API}/search/trending`);
  return response.data.coins;
};