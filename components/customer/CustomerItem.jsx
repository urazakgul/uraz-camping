import Image from "next/image";
import React from "react";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
          We had a fantastic time at your camping site. The location was
          beautiful, with plenty of outdoor activities to enjoy. The facilities
          were clean and well-equipped, and the staff was friendly and
          knowledgeable. We had a memorable camping experience and will
          definitely be back!
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-weight">Our Customer</span>
          <span className="text-sm">Istanbul, Turkey</span>
        </div>
      </div>
      <div
        className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0
      flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5"
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          style={{ objectFit: "contain" }}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;