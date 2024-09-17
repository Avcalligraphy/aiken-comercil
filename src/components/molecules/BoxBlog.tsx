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
    <Link href={`/blog/${id}`} className="bg-[url('/images/bgBlog.png')] w-[938px] h-[275px] bg-cover py-[41px] px-[38px] flex flex-row justify-between items-center translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 ">
      <Image
        src={image}
        width={322}
        height={191}
        alt="image-blog"
        className="rounded-[24px]"
      />
      <div>
        <p className="text-[15px] mb-[4px]  ">{formatDate(date)}</p>
        <h1 className="font-bold text-[26px] leading-[32px] max-w-[405px] ">
          {title}
        </h1>
        <p className="text-[15px] mb-[4px]  ">{writter}</p>
      </div>
    </Link>
  );
}
