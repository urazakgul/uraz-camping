import Image from "next/image";
import React, { useState } from "react";
import { GiCampingTent } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaCampground } from "react-icons/fa";
import { MdOutlineCategory, MdEditLocation } from "react-icons/md";
import History from "@/components/admin/History";
import Reservation from "@/components/admin/Reservation";
import Accommodation from "@/components/admin/Accommodation";
import Footer from "@/components/admin/Footer";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-3 lg:flex-row flex-col">
      <div className="border border-gray-300 lg:w-80 w-100 lg:mt-2 mt-0 lg:mb-32 mb-0 flex-shrink-0">
        <div className="relative flex flex-col items-center py-5">
          <Image
            src="/images/admin.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-xl mt-1">Uraz Akgül</b>
        </div>
        <ul className="font-semibold">
          <li
            className={`border border-opacity-30 border-gray-300 w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all flex justify-center ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <button className="p-2 flex items-center gap-x-1">
              {" "}
              <FaCampground /> Reservation
            </button>
          </li>
          <li
            className={`border border-opacity-30 border-gray-300 w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all flex justify-center ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <button className="p-2 flex items-center gap-x-1">
              {" "}
              <GiCampingTent /> History
            </button>
          </li>
          <li
            className={`border border-opacity-30 border-gray-300 w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all flex justify-center ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <button className="p-2 flex items-center gap-x-1">
              {" "}
              <MdOutlineCategory /> Accommodation
            </button>
          </li>
          <li
            className={`border border-opacity-30 border-gray-300 w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all flex justify-center ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <button className="p-2 flex items-center gap-x-1">
              {" "}
              <MdEditLocation /> Footer
            </button>
          </li>
          <li
            className={`border border-opacity-30 border-gray-300 w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all flex justify-center ${
              tabs === 4 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(4)}
          >
            <button className="p-2 flex items-center gap-x-1">
              {" "}
              <BiLogOut /> Logout
            </button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (
        <Reservation />
      )}
      {tabs === 1 && (
        <History />
      )}
      {tabs === 2 && (
        <Accommodation />
      )}
      {tabs === 3 && (
        <Footer />
      )}
    </div>
  );
};

export default Profile;