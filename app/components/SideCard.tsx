"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetStartedCard, TrendingCoins } from "@/app/components";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price_btc: number;
  small: string;
}

const SideCard = () => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coins = response.data.coins.map(
          (coin: { item: Coin }) => coin.item
        );
        setTrendingCoins(coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center">
      <GetStartedCard />
      <div className="flex flex-col gap-2 w-full md:max-w-[426px] bg-white rounded-md p-3 md:p-6">
        <h2 className="text-[24px] font-medium leading-10">
          Trending Coins (24h)
        </h2>
        <div>
          {trendingCoins.map((coin: Coin, index: number) => (
            <TrendingCoins
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              text={8.43} // You might want to fetch this value from the API
              logo={coin.small}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCard;
