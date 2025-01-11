import axios from 'axios';
import { BitcoinPrice, TrendingCoin } from '../types';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const getBitcoinPrice = async (): Promise<BitcoinPrice> => {
  const response = await axios.get(
    `${COINGECKO_API}/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true`
  );
  return response.data;
};

export const getTrendingCoins = async (): Promise<TrendingCoin[]> => {
  const response = await axios.get(`${COINGECKO_API}/search/trending`);
  return response.data.coins;
};