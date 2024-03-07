import React from "react";

interface DetailCardProps {
  title: string;
  children: React.ReactNode;
}
const DetailCard: React.FC<DetailCardProps> = ({ title, children }) => {
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h2 className="text-[20px] md:text-[24px] font-medium text-black">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default DetailCard;
