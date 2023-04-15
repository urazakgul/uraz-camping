import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customer = () => {
  const PrevBtn = ({ onClick }) => {
    return (
      <button
        className="text-primary text-3xl absolute -bottom-12 right-1/2 bg-secondary flex items-center justify-center w-10 h-10 rounded-full mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  };

  const NextBtn = ({ onClick }) => {
    return (
      <button
        className="text-primary text-3xl absolute -bottom-12 left-1/2 bg-secondary flex items-center justify-center w-10 h-10 rounded-full"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrow: true,
        }
      }
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-14">
      <Title addClass="text-3xl text-center">
        In Their Own Words: Our Customers` Reviews
      </Title>
      <Slider {...settings}>
        <CustomerItem imgSrc="/images/fake_photo_1.png" />
        <CustomerItem imgSrc="/images/fake_photo_2.png" />
        <CustomerItem imgSrc="/images/fake_photo_1.png" />
        <CustomerItem imgSrc="/images/fake_photo_2.png" />
        <CustomerItem imgSrc="/images/fake_photo_1.png" />
        <CustomerItem imgSrc="/images/fake_photo_2.png" />
        <CustomerItem imgSrc="/images/fake_photo_1.png" />
        <CustomerItem imgSrc="/images/fake_photo_2.png" />
      </Slider>
    </div>
  );
};

export default Customer;
