import Image from "next/image";
import Chip from "./Chip";
import React from "react";

interface CryptoProps {
  name: string;
  symbol: string;
  text: number;
  logo: string;
}

const TrendingCoins: React.FC<CryptoProps> = ({ name, symbol, text, logo }) => {
  return (
    <div className="flex justify-between items-center py-2 my-1">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Crypto Logo"
          width={26}
          height={26}
          className="rounded-full"
        />
        <p className="text-base md:text-md font-medium">
          {name}({symbol})
        </p>
      </div>
      <Chip text={text} arrow />
    </div>
  );
};

export default TrendingCoins;
