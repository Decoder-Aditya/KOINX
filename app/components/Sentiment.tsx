import SentimentInfoIcon from "./SentimentInfoIcon";

const Sentiment = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">
        Sentiment
      </h2>
      <div>
        <div className="flex items-center">
          <h3 className="font-semibold pb-2 text-[#44475B]">Key Events</h3>
          <SentimentInfoIcon />
        </div>
        <div>CARDS</div>
      </div>
      <div>
        <div className="flex items-center">
          <h3 className="font-semibold pb-2 text-[#44475B]">
            Analyst Estimates
          </h3>
          <SentimentInfoIcon />
        </div>
        <div>CARDS</div>
      </div>
    </div>
  );
};

export default Sentiment;
