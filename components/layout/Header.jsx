import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className="h-[6.25rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`lg:static absolute top-0 left-0 lg:w-auto lg:h-auto w-full h-full lg:text-white text-black lg:bg-transparent bg-white lg:flex hidden z-50 ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-3 lg:flex-row flex-col items-center">
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <Link href="/accommodation">Accommodation</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <Link href="/activities">Activities</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <Link href="/reservation">Reservation</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute top-5 right-5 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <MdOutlineCloseFullscreen size={30} className="transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center z-50">
          {!isMenuModal && (
            <Link
              href="/auth/login"
              className={`${
                isMenuModal ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <FaUserAlt className="hover:text-primary transition-all" />
            </Link>
          )}
          {!isMenuModal && (
            <button
              className={`lg:hidden inline-block ${
                isMenuModal ? "opacity-0 pointer-events-none" : ""
              }`}
              onClick={() => setIsMenuModal(true)}
            >
              <RxDropdownMenu className="text-3xl hover:text-primary transition-all" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;