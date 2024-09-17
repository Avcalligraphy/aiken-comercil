import React from 'react'
import Button from './Button';

export default function BoxPricing({active = true, title, price}:any) {
  return (
    <div
      className={` ${
        active ? "bg-[#DDEBE9] border-[1px] border-[#17826F] " : "bg-[#F7F7F8] "
      } rounded-[24px] h-[286px] w-[314px]`}
    >
      <div className="flex justify-center">
        {active ? (
          <div className=" font-medium text-[12px] text-white px-[13px] py-[9px] bg-[#17826F] rounded-[100px] mt-[-15px] w-[120px] text-center ">
            SAVE 30%
          </div>
        ) : null}
      </div>
      <div className={`px-[40px] ${active ? "mt-[40px]" : "mt-[60px]"}  `}>
        <p className=" mb-[9px] text-[18px] text-center   ">Monthly</p>
        <h1 className="text-[32px] font-medium mb-[77px] text-center ">
          Rp. 299k/mo
        </h1>
        <button
          className={`bg-[#7A54B7] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 rounded-[41px] text-white cmd:py-[14px] py-[14px]  text-[18px] w-full text-center `}
        >
          Start Free Trial
        </button>
      </div>
    </div>
  );
}
