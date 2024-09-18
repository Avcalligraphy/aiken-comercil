'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function BoxStories({stories}:any) {

  // Duplicate the stories array by appending the first story again
  const extendedStories = [...stories, stories[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === extendedStories.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(true); // Enable transition
    }, 2000); // Slide every 2 seconds
    return () => clearInterval(interval);
  }, [extendedStories.length]);

  useEffect(() => {
    // Check if we are at the last image (the duplicate of the first)
    if (currentIndex === extendedStories.length - 1) {
      // Disable transition and jump back to the first image (index 0) without transition
      setTimeout(() => {
        setIsTransitioning(false); // Temporarily disable the transition
        setCurrentIndex(0); // Jump back to the first real image
      }, 2000); // Adjust this timeout to match the transition duration
    }
  }, [currentIndex, extendedStories.length]);

  // Calculate the cumulative height of all previous images up to the current index
  const calculateTranslateY = () => {
    let translateY = 0;
    for (let i = 0; i < currentIndex; i++) {
      translateY += extendedStories[i].height + 56; // adding the 56px gap between images
    }
    return translateY;
  };

  return (
    <div className="relative w-[320px] h-[630px] overflow-hidden">
      {" "}
      {/* Height set to the largest image */}
      <div
        className={`flex flex-col ${
          isTransitioning
            ? "transition-transform duration-[2000ms] ease-in-out"
            : ""
        }`}
        style={{ transform: `translateY(-${calculateTranslateY()}px)` }} // Slide vertically
      >
        {extendedStories.map((story, index) => (
          <div key={index} className="mb-[56px]">
            {" "}
            {/* 56px gap between images */}
            <Image
              width={320}
              height={story.height}
              src={story.src}
              alt={story.alt}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
