import Image from "next/image";
import Title from "./Title";

const About = () => {
  return (
    <div className="bg-secondary py-36">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm-h-[600px]  flex justify-center w-[350px] h-[450px]">
            <Image src="/images/logo.png" alt="" fill style={{objectFit: "cover"}} />
          </div>
        </div>
        <div className="md:w-1/2">
          <Title addClass="text-5xl">About Us</Title>
          <p className="my-5 flex flex-col items-center">
            Uraz Camping is a well-established camping site in Datça, Muğla.
            With 10 years of experience, we offer exceptional camping services
            in a picturesque natural setting. We provide various accommodation
            options, including tents, caravans, and bungalows, along with
            facilities such as restrooms, showers, a communal kitchen, and a
            restaurant. We are committed to sustainable camping practices and
            have a friendly staff to assist you. Come and experience the magic
            of camping at Uraz Camping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;