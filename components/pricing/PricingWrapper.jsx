import Title from "../ui/Title";
import PricingItem from "./PricingItem";

const PricingWrapper = () => {
  return (
    <div className="container mx-auto mb-24">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-7xl">Pricing</Title>
        <div className="mt-10 flex flex-col sm:flex-row sm:gap-4">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl">May & October</button>
          <button className="px-6 py-2 rounded-3xl">June & September</button>
          <button className="px-6 py-2 rounded-3xl">July & August</button>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <PricingItem />
        <PricingItem />
        <PricingItem />
        <PricingItem />
      </div>
    </div>
  );
};

export default PricingWrapper;