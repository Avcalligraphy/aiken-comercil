import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <div className="bg-[#0A0315]">
      <div className="flex cxl:flex-row flex-col cxl:justify-between justify-start cxl:items-center items-start cmd:px-[186px] csm:px-[130px] px-[50px] py-[40px] ">
        <div>
          <Image
            src="/icons/logo.png"
            width={111}
            height={36}
            alt="logo-aiken"
            className="bg-cover object-cover"
          />
        </div>
        <div>
          <div className="flex cssm:flex-row flex-col gap-[30px] cxl:mt-0 mt-8 items-start  ">
            <a
              href="https://www.instagram.com/aiken.health?igsh=MXZ0dTBzYjQ2ZGF2MQ=="
              target="_blank"
              className="text-[16px] text-white "
            >
              About us
            </a>
            <a
              href="https://wa.me/6281213986906"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-white "
            >
              Contact us
            </a>
            <a
              href="mailto:aikenbook.id@gmail.com"
              className="text-[16px] text-white "
              target="_blank"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="flex cxl:flex-row flex-col  cxl:justify-between justify-start cxl:items-center items-start cmd:px-[186px] csm:px-[130px] px-[50px] py-[40px]">
        <div>
          <p className=" text-[14px] text-white mt-[57px] mb-[20px] ">
            Follow Us on
          </p>
          <div className="flex flex-row gap-[16px] ">
            <a
              href="https://www.tiktok.com/@aiken.book?_t=8neBG1Uxi80&_r=1"
              target="_blank"
            >
              <i className=" text-[24px] text-white bx bxl-tiktok"></i>
            </a>
            <a
              href="https://www.instagram.com/aiken.health?igsh=MXZ0dTBzYjQ2ZGF2MQ=="
              target="_blank"
            >
              <i className=" text-[24px] text-white bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562507937100"
              target="_blank"
            >
              <i className=" text-[24px] text-white bx bxl-facebook-circle"></i>
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-end gap-[16px] mt-[110px] ">
            <p className="text-[16px] text-gray-600 ">
              © 2024 Aiken. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
