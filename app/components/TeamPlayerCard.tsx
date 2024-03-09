import Image from "next/image";
import React from "react";

const TeamPlayerCard = () => {
  return (
    <div className="bg-[#E8F4FD] rounded-lg p-3 flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
      <div className="text-center text-nowrap">
        <Image
          className="mb-2 rounded-md"
          src={"/teamPlayer.png"}
          alt="player"
          width={100}
          height={100}
        />
        <div>
          <h3>John Smith</h3>
          <p className="text-[#788F9B] text-[12px]">Designation here</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};

export default TeamPlayerCard;
