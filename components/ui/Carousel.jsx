import Image from "next/image";
import Title from "./Title";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="relative h-full w-full">
        <Image
          src="/images/akcabuk_camping.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white">
        <div className="bg-black bg-opacity-70 p-8 lg:w-2/3 w-1/2">
          <Title addClass="text-3xl text-center">
            Uraz Camping: Where the Journey Begins and Adventures Never End
          </Title>
          <p className="my-4 text-sm text-center">
            At Uraz Camping, we believe that camping is not just an activity,
            but the start of a journey filled with endless adventures.
          </p>
          <button className="btn-primary flex justify-center mx-auto">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;