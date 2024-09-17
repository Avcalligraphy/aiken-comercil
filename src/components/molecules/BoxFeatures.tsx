import Image from 'next/image';
import React from 'react'

interface BoxFeaturesProps{
    active: boolean,
    title: string,
    desc: string,
    width: number,
    height: number
    photo:string,
    icons?: string,
    titleIcon: string,
    descIcon: string
}
export default function BoxFeatures({active = true, width, height, photo, icons="lock", title, desc, titleIcon, descIcon}: BoxFeaturesProps) {
  return (
    <div>
      <div className="flex flex-col bg-[#F7F7F8] rounded-[24px] px-[32px] pt-[32px] shadow-md shadow-gray-300 ">
        {active ? null : (
          <Image
            height={36}
            width={40}
            src={`/icons/love.png`}
            alt="love"
            className="mb-[20px]"
          />
        )}
        <h1 className="text-black font-bold text-[24px] ">{title}</h1>
        <p
          className={`text-[#5A5A5A] text-[18px] mt-[14px] leading-[28px] max-w-[351px] ${
            active ? "mb-[74px]" : "mb-[38px]"
          }`}
        >
          {desc}
        </p>
        {active ? (
          <Image
            width={width}
            height={height}
            src={`/images/phoneFeature${photo}.png`}
            alt="phone-features1"
          />
        ) : null}
      </div>
      <div className="flex flex-col bg-[#F7F7F8] rounded-[24px] p-[32px] shadow-md shadow-gray-300 mt-[24px] ">
        {active ? null : (
          <Image
            width={width}
            height={height}
            src={`/images/phoneFeature${photo}.png`}
            alt="phone-features1"
            className="mb-[32px]"
          />
        )}
        {active ? (
          <Image height={42} width={42} src={`/icons/${icons}.png`} alt="icons" />
        ) : null}
        <h1 className="text-black font-bold text-[24px] mt-[16px]  ">
          {titleIcon}
        </h1>
        <p className="text-[#5A5A5A] max-w-[315px] text-[18px] mt-[6px] leading-[28px]">
          {descIcon}
        </p>
      </div>
    </div>
  );
}
