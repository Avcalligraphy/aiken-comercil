import Image from "next/image";

const Card = ({ name, title, bgColor, className, image, index }:any) => {
  return (
    <div
    
      className={`${bgColor} rounded-2xl shadow-md px-6 pt-[32px] pb-[36px] w-48 flex flex-col items-center ${className}`}
    >
      <div className=" rounded-full overflow-hidden mb-4">
        <Image
          width={126}
          height={126}
          alt={`Photo of ${name}`}
          src={`/images/${image}.png`}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-black font-medium text-center text-[16px] mb-1">
        {title}
      </h2>
      <p className="text-gray-600 text-[14px] text-center">{name}</p>
    </div>
  );
};

export default Card;
