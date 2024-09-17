import React from "react";
import Image from "next/image";
import MockUp from "../molecules/MockUp";

interface TestimonialProps{
   width: number,
   height:number,
   photo:string,
   className:string
}
const Testimonial = ({ width, height, photo, className }: TestimonialProps) => (
  <div className={`absolute ${className}`}>
    <Image
      alt="image-chat"
      width={width}
      height={height}
      src={`/images/${photo}.png`}
    />
  </div>
);

export default function AikenShowcase() {
  return (
    <div
      id="#tester"
      className="relative flex justify-center items-center my-[112px]"
    >
      <div
        data-aos="zoom-in"
        style={{ backgroundImage: "url('/images/bgCircle.png')" }}
        className="w-[707px] h-[707px] bg-cover flex justify-center items-center relative"
      >
        <div className="flex items-center justify-center">
          <Image
            width={394}
            height={556}
            src="/images/aikenBook.png"
            alt="aiken-book"
            className="mt-[-100px]"
          />
          <div className="mt-[100px] ml-[-120px] ">
            <MockUp />
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="500">
          <Testimonial
            width={361}
            height={102}
            photo="photo1"
            className="left-0 top-1/4 transform -translate-x-full"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <Testimonial
            width={361}
            height={132}
            photo="photo2"
            className="left-0 bottom-1/4 transform -translate-x-full"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <Testimonial
            width={381}
            height={131}
            photo="photo4"
            className="right-0 top-1/4 transform translate-x-full"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <Testimonial
            width={381}
            height={131}
            photo="photo3"
            className="right-0 bottom-1/4 transform translate-x-full"
          />
        </div>
      </div>
    </div>
  );
}
