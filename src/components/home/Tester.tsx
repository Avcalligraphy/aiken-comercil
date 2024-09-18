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
      className="relative flex justify-center items-center csm:mt-[112px] mt-[412px] mb-[112px] "
    >
      <div
        data-aos="zoom-in"
        style={{ backgroundImage: "url('/images/bgCircle.png')" }}
        className="cxl:w-[707px] cxl:h-[707px] csm:w-[507px] csm:h-[507px] w-[307px] h-[307px] bg-cover flex justify-center items-center relative"
      >
        <div className="flex csm:flex-row flex-col items-center csm:mt-0 mt-[100px]">
          <Image
            src="/images/aikenBook.png"
            alt="aiken-book"
            width={394}
            height={556}
            layout="responsive"
            sizes="(max-width: 640px) 100vw, 300px"
            className="mt-[-100px]"
          />
          <div className="csm:mt-[100px] mt-0 csm:ml-[-120px] ml-0 ">
            <MockUp />
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="cxl:block hidden"
          data-aos-duration="500"
        >
          <Testimonial
            width={361}
            height={102}
            photo="photo1"
            className="left-[90px]  top-1/4 transform -translate-x-full"
          />
        </div>
        <div
          data-aos="fade-right"
          className="cxl:block hidden"
          data-aos-duration="1000"
        >
          <Testimonial
            width={361}
            height={132}
            photo="photo2"
            className="left-[90px] bottom-1/4 transform -translate-x-full"
          />
        </div>
        <div
          data-aos="fade-left"
          className="cxl:block hidden"
          data-aos-duration="500"
        >
          <Testimonial
            width={381}
            height={131}
            photo="photo4"
            className="right-[90px] top-1/4 transform translate-x-full"
          />
        </div>
        <div
          data-aos="fade-left"
          className="cxl:block hidden"
          data-aos-duration="1000"
        >
          <Testimonial
            width={381}
            height={131}
            photo="photo3"
            className="right-[90px] bottom-1/4 transform translate-x-full"
          />
        </div>
      </div>
    </div>
  );
}
