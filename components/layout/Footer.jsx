import React from "react";
import Title from "../ui/Title";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdSmartphone } from "react-icons/md";
import { AiFillTwitterCircle,AiFillInstagram,AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-secondary text-white flex justify-center items-center h-full">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col gap-y-2 text-center">
            <Title addClass="text-4xl sm:text-left">Contact Us</Title>
            <div className="flex flex-col sm:items-start items-center">
              <span className="flex items-center gap-x-1">
                <ImLocation />
                Location
              </span>
              <span className="flex items-center gap-x-1">
                <BsTelephoneFill />
                Call + 90 252 XXX XX XX
              </span>
              <span className="flex items-center gap-x-1">
                <MdSmartphone />
                Call + 90 5XX XXX XX XX
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 text-center mt-6 sm:mt-0">
            <Title addClass="text-4xl">Social Media</Title>
            <div className="flex items-center justify-center gap-x-3 text-4xl">
              <AiFillTwitterCircle className="cursor-pointer hover:scale-105 transition-all" />
              <AiFillInstagram className="cursor-pointer hover:scale-105 transition-all" />
              <AiFillGithub className="cursor-pointer hover:scale-105 transition-all" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-center">© 2023 All Rights Reserved By Uraz Akgül</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;