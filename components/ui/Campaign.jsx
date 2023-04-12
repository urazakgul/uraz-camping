import Image from "next/image";
import Title from "./Title";

const CampaignItem = () => {
  return (
    <div className="bg-primary flex-1 py-5 px-[15px] flex items-center gap-x-10 rounded-[30px]">
      <div>
        <Image src="/images/tent.png" alt="" width={200} height={200} className="hover:scale-105 transition-all" />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Early Booking Special</Title>
        <div className="font-dancing my-3">
          <span className="text-4xl">10%</span>
          <span className="inline-block ml-[10px] text-2xl">OFF</span>
        </div>
        <div className="flex items-center">
          <button className="btn-secondary flex items-center gap-x-2">
            <span className="flex-shrink-0 whitespace-nowrap">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Campaign = () => {
  return (
    <div className="flex justify-between container mx-auto py-28 gap-5 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaign;