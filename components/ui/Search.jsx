import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import {MdOutlineCloseFullscreen} from 'react-icons/md';

const Search = ({ setIsSearchModal }) => {
  return (
    <div className='fixed w-screen h-screen z-50 top-0 left-0 after:contet-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-80 grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w-[37.5rem] w-[23.125rem] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[2.5rem] text-center">Search</Title>
            <input type="text" placeholder="Search..." className="border w-full my-10" />
            <div>
            <ul>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">
                        <Image src="/images/tent.png" alt="" width={128} height={128} />
                    </div>
                    <span className="font-bold">Tent Camping</span>
                    <span className="font-bold">400 TL</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">
                        <Image src="/images/tent.png" alt="" width={128} height={128} />
                    </div>
                    <span className="font-bold">Tent Camping</span>
                    <span className="font-bold">400 TL</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">
                        <Image src="/images/tent.png" alt="" width={128} height={128} />
                    </div>
                    <span className="font-bold">Tent Camping</span>
                    <span className="font-bold">400 TL</span>
                </li>
            </ul>
            <button className="absolute top-5 right-5" onClick={() => setIsSearchModal(false)}>
                <MdOutlineCloseFullscreen size={30} className="transition-all" />
            </button>
          </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;