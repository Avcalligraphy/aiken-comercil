import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center px-[186px] py-[40px] bg-[#0A0315] ">
      <div>
        <Image
          src="/icons/logo.png"
          width={111}
          height={36}
          alt="logo-aiken"
          className="bg-cover object-cover"
        />
        <p className=" text-[14px] mt-[57px] mb-[20px] ">Follow Us on</p>
        <div className="flex flex-row gap-[16px] ">
          <i className=" text-[24px] text-white bx bxl-tiktok"></i>
          <i className=" text-[24px] text-white bx bxl-instagram"></i>
          <i className=" text-[24px] text-white bx bxl-facebook-circle"></i>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-[30px] items-center  ">
          <p className="text-[16px] text-white ">About us</p>
          <p className="text-[16px] text-white ">Contact us</p>
          <p className="text-[16px] text-white ">Terms of Service</p>
        </div>
        <div className="flex flex-row justify-end gap-[16px] mt-[110px] ">
          <p className="text-[16px] text-gray-600 ">
            © 2024 Aiken. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
