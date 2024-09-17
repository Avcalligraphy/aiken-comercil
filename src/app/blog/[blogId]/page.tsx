import Footer from '@/components/home/Footer';
import Navbar from '@/components/navbar';
import React from 'react'
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

// Async function to fetch blogs from API
const apiURL = "https://5hfc9f1g-1337.asse.devtunnels.ms";
async function getBlogs(params:string) {
  const res = await fetch(
    `${apiURL}/api/blogs/${params}?populate=*`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await res.json();
  return data.data; // Return the data array
}
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
export default async function BlogId({params}:{params:{blogId:string}}) {
  const blogs = await getBlogs(params.blogId); // Fetch data secara langsung
  return (
    <>
      <div className=" min-h-screen bg-white ">
        <div className="w-full pb-[271px] relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="clg:px-[142px] csm:px-[70px] px-[35px] pt-[206px]">
            <div className="prose text-[20px] mx-auto    ">
              <h1 className="bg-gradient-to-r from-[#7A54B7] to-[#240F41] inline-block text-transparent bg-clip-text font-bold csm:text-[38px] text-[30px] ">
                {blogs.attributes.title}
              </h1>
              <p className="text-gray-500 text-[14px] mb-8 ">
                {formatDate(blogs.attributes.publishedAt)}
              </p>
              <p className="text-black text-[16px] font-semibold mb-8 ">
                {blogs.attributes.writter}
              </p>
              <BlocksRenderer content={blogs.attributes.content || []} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
