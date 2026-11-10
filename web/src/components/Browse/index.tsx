import Image from "next/image";
import React from "react";

const Browse = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:my-20 my-14">
        <div className="mx-auto h-full">
          <Image
          width={100}
          height={100}
            src="/phoneCombo.png"
            alt=""
            className="h-auto w-[300px] lg:w-[499px] rounded-[60px]"
          />
        </div>
        <div className="justify-center xl:pe-20 flex flex-col xl:text-left text-center xl:items-start items-center">
          <h1 className="lg:font-bold font-normal xl:text-[48px] leading-[30px] lg:leading-[50px] text-[25px] text-black md:w-full w-[70%]">
            Browse through available buses near you
          </h1>
          <h1 className="text-black lg:text-xl text-sm  font-normal xl:w-[600px] w-[80%] my-5">
            Discover a wide range of bus options tailored to your journey. View
            essential details such as bus name, ratings, ticket prices, pickup
            points, and drop-off locations, making it easy to compare and choose
            the perfect ride.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Browse;
