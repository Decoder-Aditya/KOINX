import React from "react";
import Image from "next/image";
import Chip from "./Chip";

interface CryptoCardProps {
  logo: string;
  name: string;
  text: number;
  value: string;
  graph: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  logo,
  name,
  text,
  value,
  graph,
}) => {
  return (
    <div className="inline-flex flex-col p-4 border border-gray-300 bg-white rounded-lg my-1">
      {/* Logo and Name */}
      <div className="flex items-center mb-2 gap-2">
        <Image
          src={logo}
          alt="Crypto Logo"
          className="w-6 h-6 md:w-4 md:h-4 rounded-full"
          width={100}
          height={100}
        />
        <p className="capitalize text-base md:text-xs font-medium">{name}</p>
        <Chip text={text} />
      </div>
      {/* Current Value */}
      <p className="text-lg md:text-sm font-semibold">{value}</p>
      {/* Graph */}
      <div className="w-[auto]">
        <Image
          src={graph}
          alt="Crypto Graph"
          className="w-full mt-2"
          width={200}
          height={80}
        />
      </div>
    </div>
  );
};

export default CryptoCard;
