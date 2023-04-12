import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearchLocation } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { MdShoppingBasket } from "react-icons/md";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
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
              <a href="">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">Accommodation</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">Activities</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">Gallery</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">Contact</a>
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
            <a href="#" className={`${
              isMenuModal ? "opacity-0 pointer-events-none" : ""
            }`}>
              <FaUserAlt className="hover:text-primary transition-all" />
            </a>
          )}
          {!isMenuModal && (
            <a href="#" className={`${
              isMenuModal ? "opacity-0 pointer-events-none" : ""
            }`}>
              <MdShoppingBasket className="hover:text-primary transition-all" />
            </a>
          )}
          {!isMenuModal && (
            <button className={`hover:text-primary transition-all ${
              isMenuModal ? "opacity-0 pointer-events-none" : ""
            }`} onClick={() => setIsSearchModal(true)}>
              <FaSearchLocation className="hover:text-primary transition-all" />
            </button>
          )}
          <a href="#" className="lg:inline-block hidden lg">
            <button className="btn-primary">Book Now</button>
          </a>
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
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;