import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BoxBlogProps{
    image:string,
    date:string,
    title:string,
    writter:string
    id:any
}
export default function BoxBlog({image, date, title, writter, id}: BoxBlogProps) {
    const formatDate = (date: string) => {
      const dateObject = new Date(date);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[dateObject.getMonth()]; // Mendapatkan nama bulan
      const day = dateObject.getDate();
      const year = dateObject.getFullYear();

      return `${month} ${day}, ${year}`; // Format: Bulan Tanggal, Tahun
    };
  return (
    <Link
      href={`/blog/${id}`}
      className="bg-[url('/images/bgBlog.png')] rounded-[24px] clg:w-[938px] w-full clg:h-[275px] h-fit bg-cover py-[41px] px-[38px] flex clg:flex-row flex-col justify-between clg:items-center items-start translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 "
    >
      <Image
        src={image}
        width={322}
        height={191}
        layout="responsve"
        alt="image-blog"
        className="rounded-[24px]"
      />
      <div>
        <p className="csssm:text-[15px] text-[12px] mb-[4px] clg:mb-0 mt-4  ">
          {formatDate(date)}
        </p>
        <h1 className="font-bold csm:text-[26px] csssm:text-[20px] text-[18px] csm:leading-[32px] leading-[22px] clg:max-w-[405px] max-w-fit ">
          {title}
        </h1>
        <p className="csssm:text-[15px] text-[12px] mb-[4px]  ">{writter}</p>
      </div>
    </Link>
  );
}
