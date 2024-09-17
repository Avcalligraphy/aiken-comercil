"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function MockUp() {
  const images = [
    "/images/imageContainer1.png",
    "/images/imageContainer2.png",
    "/images/imageContainer3.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-[238px] h-[494px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/container.png')" }}
    >
      <div className="absolute top-[10px] left-[8px] w-[224px] h-[472px] overflow-hidden rounded-[30px]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <Image
                width={224}
                height={472}
                alt={`image-container-${index + 1}`}
                src={src}
                className="bg-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
