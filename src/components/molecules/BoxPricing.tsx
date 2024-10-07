import React from 'react'
import Button from './Button';

export default function BoxPricing({active = true, li1, li2, li3, price}:any) {
  return (
    <div
      className={` ${
        active ? "bg-[#DDEBE9] border-[1px] border-[#17826F] " : "bg-[#F7F7F8] "
      } rounded-[24px] min-h-[286px] w-[314px]`}
    >
      <div className="flex justify-center">
        {active ? (
          <div className=" font-medium text-[12px] text-white px-[13px] py-[9px] bg-[#17826F] rounded-[100px] mt-[-15px] w-[120px] text-center ">
            SAVE
          </div>
        ) : null}
      </div>
      <div className={`px-[40px] ${active ? "mt-[40px]" : "mt-[60px]"}  `}>
        <h1 className="text-[32px] font-medium text-center mb-[9px] ">
          Rp. {price}
        </h1>
        <div className="flex justify-start px-[25px] ">
          {active ? (
            <ul className="list-outside mt-7 mb-[77px] text-[18px] list-image-[url(/icons/check.png)]  ">
              <li>{li1}</li>
              <li>{li2}</li>
              <li>{li3}</li>
            </ul>
          ) : (
            <ul className="list-outside mt-7 mb-[77px] text-[18px] list-image-[url(/icons/check.png)]  ">
              <li>{li1}</li>
            </ul>
          )}
        </div>
        <a href="https://linktr.ee/aikenbook.id" target="_blank">
          <button
            className={`bg-[#7A54B7] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 rounded-[41px] text-white cmd:py-[14px] py-[14px]  text-[18px] mb-6 w-full text-center `}
          >
            Start Free Trial
          </button>
        </a>
      </div>
    </div>
  );
}
