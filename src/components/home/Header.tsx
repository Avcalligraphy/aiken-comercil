/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from '../navbar';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const worldWide = [
  {
    name: "google",
    width: 67.24,
    height: 41,
  },
  {
    name: "berkeley",
    width: 67.24,
    height: 41,
  },
  {
    name: "meta",
    width: 67.24,
    height: 41,
  },
  {
    name: "combinator",
    width: 67.24,
    height: 41,
  },
  {
    name: "microsoft",
    width: 67.24,
    height: 41,
  },
  {
    name: "mit",
    width: 67.24,
    height: 41,
  },
  {
    name: "labma",
    width: 67.24,
    height: 41,
  },
  {
    name: "peka",
    width: 67.24,
    height: 41,
  },
  {
    name: "psikolog",
    width: 67.24,
    height: 41,
  },
  {
    name: "dpk",
    width: 67.24,
    height: 41,
  },
];

const worldWideHidden = [
  {
    name: "google",
    width: 83.64,
    height: 51,
  },
  {
    name: "berkeley",
    width: 83.64,
    height: 51,
  },
  {
    name: "meta",
    width: 83.64,
    height: 51,
  },
  {
    name: "combinator",
    width: 83.64,
    height: 51,
  },
  {
    name: "microsoft",
    width: 83.64,
    height: 51,
  },
  {
    name: "mit",
    width: 83.64,
    height: 51,
  },
  {
    name: "labma",
    width: 83.64,
    height: 51,
  },
  {
    name: "peka",
    width: 83.64,
    height: 51,
  },
  {
    name: "psikolog",
    width: 83.64,
    height: 51,
  },
  {
    name: "dpk",
    width: 83.64,
    height: 51,
  },
];

export default function Header() {
   const settings = {
     dots: false,
     infinite: true,
     speed: 5000,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 0,
     cssEase: "linear",
     pauseOnHover: false,
     arrows: false,
   };
  return (
    <>
      <div
        id="#header"
        className="bg-[url('/images/imageHeader.png')] bg-cover  w-full cmd:min-h-[900px] csm:min-h-[800px] min-h-[650px] "
      >
        <div className="bg-[url('/images/background.png')] bg-cover w-full cmd:min-h-[700px] csm:min-h-[600px] min-h-[600px] relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className=" flex justify-center cmd:pt-[270px] csm:px-[15px] px-[15px] csm:pt-[260px] pt-[180px] items-center ">
            <div className="flex justify-center">
              <h1
                data-aos="fade-right"
                className="font-bold navMobile:text-[60px] cxl:text-[54px] cmd:text-[48px] csm:text-[40px] text-[30px] csm:leading-[100%] leading-[120%] tracking-[-4%] text-white text-center  csm:max-w-[955px] max-w-fit  "
              >
                Don't wait any longer. Explore our resources and start your
                transformation today.
              </h1>
            </div>
          </div>
          <div className="flex justify-center px-[15px]">
            <h1
              data-aos="fade-right"
              className="text-center csm:mt-[25px] mt-[20px] cmd:text-[20px] csm:text-[16px] text-[14px] text-white max-w-[760px] "
            >
              Feel the difference in minutes, not months. Aiken's interactive
              journal is designed to enhance traditional therapy at a fraction
              of the cost
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-row justify-center items-center gap-[16px] mt-[40px] "
          >
            <a href="https://www.tokopedia.com/aikenbook" target="_blank">
              <Image
                width={168}
                height={56}
                src="/icons/applestore.png"
                alt="applestore"
              />
            </a>
            <a href="https://shopee.co.id/shop/1252488041" target="_blank">
              <Image
                width={168}
                height={56}
                src="/icons/playstore.png"
                alt="playstore"
              />
            </a>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-row justify-center items-center gap-[18px] mt-[40px] "
          >
            <Image
              width={74}
              height={32}
              src="/icons/avatar.png"
              alt="applestore"
            />
            <div className="backdrop-blur-md bg-white/30 py-[4px] px-[12px] rounded-[27px] ">
              <h1 className="text-[14px] text-white">
                ⭐ 4.93 ▪️ Trusted by 100+ users
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center cmd:mt-[-100px] csm:mt-[-80px] mt-[-50px] clg:px-[0px] px-[15px] ">
        <div className="bg-[url('/images/bgPartner.png')] w-[973px] h-[204px] flex flex-col justify-center bg-cover rounded-[32px] ">
          <div className="flex justify-center items-center px-[15px]">
            <h1
              data-aos="fade-up"
              className="font-medium csm:text-[32px] csssm:text-[26px] text-[22px] text-center text-white "
            >
              Loved by mental health advocates:
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="cmd:flex hidden justify-center mt-[24px]"
          >
            <div className="cmd:w-[640px] csm:w-[540px] cssm:w-[440px] w-[300px] overflow-hidden ">
              <Slider {...settings}>
                {worldWideHidden.concat(worldWideHidden).map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center "
                  >
                    <Image
                      width={item.width}
                      height={item.height}
                      alt={`mental-world-wide ${item.name}`}
                      src={`/icons/${item.name}.png`}
                      className="bg-cover object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="cmd:hidden flex justify-center mt-[24px]"
          >
            <div className="cmd:w-[640px] csm:w-[540px] cssm:w-[440px] w-[300px] overflow-hidden ">
              <Slider {...settings}>
                {worldWide.concat(worldWide).map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center "
                  >
                    <Image
                      width={item.width}
                      height={item.height}
                      alt={`mental-world-wide ${item.name}`}
                      src={`/icons/${item.name}.png`}
                      className="bg-cover object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
