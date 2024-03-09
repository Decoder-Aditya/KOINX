import { Breadcrumb, SideCard, Team } from "./components";
import AboutCrypto from "./components/AboutCrypto";
import CardView from "./components/CardView";
import Navbar from "./components/Navbar";
import Sentiment from "./components/Sentiment";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#EDF0F3] min-w-[425px]">
        <Breadcrumb
          items={[
            { label: "Cryptocurrencies", href: "/" },
            { label: "Bitcoin", href: "/" },
          ]}
        />
        <div className="flex gap-4 flex-wrap">
          <div className="order-1 mx-4 sm:ml-[24px] sm:mr-0 md:ml-[56px] md:mr-0 rounded-md min-w-[320px] md:max-w-[60%] flex flex-col gap-4">
            <Sentiment />
            <AboutCrypto />
            <Tokenomics />
            <Team />
          </div>
          <div className="order-3 sm:order-2 mx-4 sm:mr-[24px] sm:ml-0 md:mr-[56px] md:ml-0 rounded-md w-full sm:w-auto">
            <SideCard />
          </div>
          <div className="order-2 sm:order-3 sm:p-2 sm:px-[24px] md:py-[24px] md:px-[56px] mx-4 sm:mx-0 bg-white rounded-md sm:rounded-[0] w-full">
            <CardView />
          </div>
        </div>
      </main>
    </>
  );
}
