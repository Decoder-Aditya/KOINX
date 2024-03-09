import React from "react";

const CardView = () => {
  return (
    <div className="w-full bg-white rounded-md p-4 sm:px-0 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl font-medium md:font-medium">
          You May Also Like
        </h2>
        <div>Cards</div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl font-medium md:font-medium">
          Trending Coins
        </h2>
        <div>Cards</div>
      </div>
    </div>
  );
};

export default CardView;
