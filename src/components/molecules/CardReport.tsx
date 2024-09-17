import Image from "next/image";

const CardReport = ({ name, desc, bgColor, className }: any) => {
  return (
    <div
      className={`bg-[#ffff] rounded-2xl shadow-md px-6 pt-[32px] pb-[36px] w-48 flex flex-col items-center ${className}`}
    >
      <h1 className="font-medium text-[23px] mb-[29px] ">{name}</h1>
      <div className=" overflow-hidden mb-[31px]">
        <Image
          width={50}
          height={65}
          alt="down-arrow"
          src="/icons/downArrow.png"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-black text-[16px] text-center ">
        <span className="font-bold">{desc} report</span>
      </p>
      <p className="text-black text-[16px]  text-center">improvement</p>
    </div>
  );
};

export default CardReport;
