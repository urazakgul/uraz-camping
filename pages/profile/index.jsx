import Image from "next/image";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillKeyFill } from "react-icons/bs";
import { GiCampingTent } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import History from "@/components/profile/History";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-3 lg:flex-row flex-col">
      <div className="border border-gray-300 lg:w-80 w-100 lg:mt-2 mt-0 lg:mb-32 mb-0 flex-shrink-0">
        <div className="relative flex flex-col items-center py-5">
          <Image
            src="/images/fake_photo_3.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-xl mt-1">Rachel W. Fauntleroy</b>
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
              <AiFillHome /> Account
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
              <BsFillKeyFill /> Password
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
              <GiCampingTent /> History
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
              <BiLogOut /> Logout
            </button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (
        <Account />
      )}
      {tabs === 1 && (
        <Password />
      )}
      {tabs === 2 && (
        <History />
      )}
    </div>
  );
};

export default Profile;