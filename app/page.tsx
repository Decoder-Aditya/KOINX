import { Breadcrumb, SideCard } from "./components";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#EDF0F3] min-w-[320px]">
        <Breadcrumb
          items={[
            { label: "Cryptocurrencies", href: "/" },
            { label: "Bitcoin", href: "/" },
          ]}
        />
        <div className="flex gap-4 flex-wrap">
          <div className="mx-4 sm:ml-[24px] sm:mr-0 md:ml-[56px] md:mr-0 bg-white rounded-md order-1">
            Cripto
          </div>
          <div className="order-3 sm:order-2 mx-4 sm:mr-[24px] sm:ml-0 md:mr-[56px] md:ml-0 rounded-md w-full sm:w-auto">
            <SideCard />
          </div>
          <div className="sm:p-2 sm:px-[24px] md:px-[56px] mx-4 sm:mx-0 bg-white rounded-md sm:rounded-[0] order-2 sm:order-3 w-full">
            Cards
          </div>
        </div>
      </main>
    </>
  );
}
