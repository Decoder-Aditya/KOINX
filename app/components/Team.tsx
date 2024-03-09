import React from "react";
import TeamPlayerCard from "./TeamPlayerCard";

const Team = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">Team</h2>
      <p className="text-base w-auto">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-4">
        <TeamPlayerCard />
        <TeamPlayerCard />
        <TeamPlayerCard />
      </div>
    </div>
  );
};

export default Team;
