import React from "react";
import Image from "next/image";
import Button from "./Button";

const GetStartedCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[#0052FE] rounded-xl p-8 max-w-[426px]">
      <div className="flex flex-col-reverse md:flex-col md:justify-between">
        <div className="m-2">
          <h2 className="text-white my-4 text-2xl leading-10 font-semibold text-center md:text-3xl">
            Get Started with KoinX for FREE
          </h2>
          <p className="text-white text-sm my-4 text-center md:text-base">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <div className="w-full h-auto p-2 flex justify-center md:mt-0 md:ml-4">
          <Image
            src={"/CardDesign.svg"}
            alt="SVG Image"
            width={100}
            height={150}
          />
        </div>
      </div>
      <div>
        <Button text={"Get started for FREE"} arrow />
      </div>
    </div>
  );
};

export default GetStartedCard;
