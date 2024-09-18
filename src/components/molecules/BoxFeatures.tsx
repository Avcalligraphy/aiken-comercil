import Image from "next/image";
import React from "react";

interface BoxFeaturesProps {
  active: boolean;
  title: string;
  desc: string;
  photo: string;
  icons?: string;
  titleIcon: string;
  descIcon: string;
}

export default function BoxFeatures({
  active = true,
  photo,
  icons = "lock",
  title,
  desc,
  titleIcon,
  descIcon,
}: BoxFeaturesProps) {
  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="flex flex-col bg-[#F7F7F8] rounded-[24px] p-6 cmd:p-8 shadow-md shadow-gray-300">
        {!active && (
          <Image
            height={36}
            width={40}
            src="/icons/love.png"
            alt="love"
            className="mb-5"
          />
        )}
        <h1 className="text-black font-bold text-xl cmd:text-2xl">{title}</h1>
        <p className="text-[#5A5A5A] text-base cmd:text-lg mt-3 cmd:mt-4 leading-relaxed">
          {desc}
        </p>
        {active && (
          <div className="mt-6 cmd:mt-8">
            <Image
              width={500}
              height={500}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, 500px"
              src={`/images/phoneFeature${photo}.png`}
              alt={`phone-features-${photo}`}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col bg-[#F7F7F8] rounded-[24px] p-6 cmd:p-8 shadow-md shadow-gray-300">
        {!active && (
          <div className="mb-6 cmd:mb-8">
            <Image
              width={500}
              height={500}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, 500px"
              src={`/images/phoneFeature${photo}.png`}
              alt={`phone-features-${photo}`}
            />
          </div>
        )}
        {active && (
          <Image
            height={42}
            width={42}
            src={`/icons/${icons}.png`}
            alt="icons"
          />
        )}
        <h1 className="text-black font-bold text-xl cmd:text-2xl mt-4 cmd:mt-5">
          {titleIcon}
        </h1>
        <p className="text-[#5A5A5A] text-base md:text-lg mt-2 md:mt-3 leading-relaxed">
          {descIcon}
        </p>
      </div>
    </div>
  );
}
