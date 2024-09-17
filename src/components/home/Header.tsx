/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from '../navbar';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div
        id="#header"
        className="bg-[url('/images/imageHeader.png')] bg-cover  w-full cmd:min-h-[900px] csm:min-h-[700px] min-h-[600px] "
      >
        <div className="bg-[url('/images/background.png')] bg-cover w-full cmd:min-h-[700px] csm:min-h-[600px] min-h-[600px] relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className=" flex justify-center cmd:pt-[270px] csm:px-[0px] px-[15px] csm:pt-[240px] pt-[180px] items-center ">
            <h1
              data-aos="fade-right"
              className="font-bold navMobile:text-[60px] cxl:text-[60px] cmd:text-[57px] csm:text-[40px] text-[37px] csm:leading-[100%] leading-[120%] tracking-[-4%] text-white text-center navMobile:max-w-[1200px] cmd:max-w-[1100px] max-w-[700px]  "
            >
              "THE BEST THING I'VE DONE <br /> FOR MY MENTAL HEALTH"
            </h1>
          </div>
          <h1
            data-aos="fade-right"
            className="text-center mt-[25px] text-[20px] text-white "
          >
            Feel better in minutes, not months. Aiken's interactive journal{" "}
            <br />
            complements traditional therapy at a fraction of the cost.
          </h1>
          <div
            data-aos="zoom-in"
            className="flex flex-row justify-center items-center gap-[16px] mt-[40px] "
          >
            <Image
              width={168}
              height={56}
              src="/icons/applestore.png"
              alt="applestore"
            />
            <Image
              width={190}
              height={56}
              src="/icons/playstore.png"
              alt="playstore"
            />
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
                ⭐ 4.73 ▪️ Trusted by 50K people
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-[-100px] ">
        <div className="bg-[url('/images/bgPartner.png')] w-[973px] h-[204px] flex flex-col justify-center ">
          <div className="flex justify-center items-center">
            <h1
              data-aos="fade-up"
              className="font-medium text-[32px] text-white "
            >
              Loved by mental health advocates worldwide
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-center items-center mt-[24px] "
          >
            <Image
              height={25}
              width={640}
              alt="mental-world-wide"
              src="/images/mentalWorldWide.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
