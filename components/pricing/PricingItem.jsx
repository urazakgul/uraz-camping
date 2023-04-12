import Image from "next/image";
import { MdShoppingBasket } from "react-icons/md";

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
        <div className="flex flex-wrap justify-between items-center mt-10">
          <span className="flex-shrink-0 text-2xl">200 TL</span>
          <button className="btn-primary w-10 h-7 rounded-full text-2xl grid place-content-center">
            <MdShoppingBasket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;