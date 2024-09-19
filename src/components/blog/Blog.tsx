'use client'
import React, { useState, useEffect } from "react";
import Footer from "../home/Footer";
import BoxBlog from "../molecules/BoxBlog";
import Navbar from "../navbar";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

// Async function to fetch blogs from API
async function getBlogs() {
  const res = await fetch(`${apiURL}/api/blogs?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await res.json();
  return data.data; // Return the data array
}

// Pagination component with Tailwind CSS styling
function Pagination({ currentPage, totalPages, onPageChange }:any) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "text-gray-400" : "text-gray-700"
        } p-2`}
      >
        <i className="bx bx-chevron-left text-[30px] "></i>
      </button>

      {/* Page numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 ${
            currentPage === number
              ? "bg-[#F7F3F9] text-[#6200FF]"
              : "bg-transparent text-gray-700"
          } rounded-[4px] hover:bg-purple-200 text-[14px] `}
        >
          {number}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages ? "text-gray-400" : "text-gray-700"
        }`}
      >
        <i className="bx bx-chevron-right text-[30px] "></i>
      </button>
    </div>
  );
}

// Main Blog component with pagination
export default function Blog() {
  const [blogs, setBlogs] = useState([]); // Initialize blogs as an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getBlogs();
        setBlogs(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    }

    fetchBlogs(); // Fetch blogs on component mount
  }, []);

  // Only render if blogs are fetched
  if (!blogs || blogs.length === 0) {
    return <div className="flex justify-center items-center h-screen text-purple-500 font-bold  ">Loading...</div>;
  }

  // Logic to display the current page's blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <>
      <div className="bg-gradient-to-b from-[#040112] to-[#ffff] min-h-screen relative z-10">
        <div className="bg-[url('/images/background.png')]">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="flex flex-col items-center gap-[47px] pt-[200px] pb-[100px] px-[25px]">
            {/* Map blog data untuk menampilkan BoxBlog */}
            {currentBlogs.map((blog:any) => (
              <BoxBlog
                key={blog.id}
                id={blog.id}
                title={blog.attributes.title}
                date={blog.attributes.date}
                image={apiURL + blog.attributes.image.data.attributes.url}
                writter={blog.attributes.writter}
              />
            ))}

            {/* Pagination component */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page:any) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
