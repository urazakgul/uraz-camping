import Image from "next/image";

const PricingItem = () => {
  return (
    <div className="bg-secondary grid place-items-center rounded-3xl">
      <div className="w-full bg-white grid place-content-center">
        <div className="relative w-40 h-40 hover:scale-105 transition-all">
          <Image src="/images/tent.png" alt="" fill />
        </div>
      </div>
      <div className="text-white p-[25px]">
        <h4 className="text-2xl font-bold text-center">TENT</h4>
        <p className="text-center">
          PER NIGHT <br />
          FOR 2 PERSONS <br />
          +90 TL PER ADDITIONAL PERSON <br />
        </p>
        <div className="text-center mt-10">
          <span className="text-3xl">200 TL</span>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;