'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TrendingCoin } from '@/types';
import 'swiper/css';

interface CoinCarouselProps {
  title: string;
  coins: TrendingCoin[];
}

export const CoinCarousel: React.FC<CoinCarouselProps> = ({ title, coins }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
      >
        {coins.map((coin) => {
          const change = coin.item.data.price_change_percentage_24h.usd;
          const isPositive = change > 0;

          return (
            <SwiperSlide key={coin.item.id}>
              <div className="bg-white rounded-lg p-4 shadow-md border border-primary-100 hover:border-primary-200 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    className="w-6 h-6"
                  />
                  <span className="font-medium text-gray-800">
                    {coin.item.symbol.toUpperCase()}
                  </span>
                  <div
                    className={`ml-auto ${
                      isPositive ? 'text-emerald-500' : 'text-rose-500'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {isPositive ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      <span>{Math.abs(change).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
                <img
                  src={coin.item.sparkline}
                  alt={`${coin.item.name} price graph`}
                  className="w-full h-16 object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};