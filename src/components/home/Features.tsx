/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BoxFeatures from "../molecules/BoxFeatures";
import Button from "../molecules/Button";

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col items-center csm:mt-[200px] mt-[400px] "
    >
      <h1
        data-aos="fade-up"
        className="font-bold text-3xl cmd:text-4xl clg:text-[54px] text-black text-center leading-tight cmd:leading-[56px] max-w-[900px] "
      >
        Your Partner in Transformative Mental Wellness and Growth
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-[#5A5A5A] text-base cmd:text-lg clg:text-[20.5px] mt-4 cmd:mt-[33px] max-w-[600px]"
      >
        Aiken seamlessly blends journaling, habit mastery, and emotional
        well-being into a unified platform for your growth.
      </p>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="grid grid-cols-1 cmd:grid-cols-2 clg:grid-cols-3 gap-6 mt-8 cmd:mt-16 px-4 cmd:px-6 clxl:px-[300px] cllxl:px-[200px]  cxxl:px-[100px] cxl:px-[50px]"
      >
        <BoxFeatures
          title="Unravel the Puzzle"
          desc="Aiken remembers everything, helping you connect the dots and find clarity."
          active
          titleIcon="Secure and Private"
          descIcon="With end-to-end encryption, your data stays protected, whether in transit or at rest."
          photo="1"
        />
        <BoxFeatures
          title="Strengthen Your Resilience"
          desc="Master stress management and enhance your relationships along the way."
          active={false}
          titleIcon="Express Yourself Freely"
          descIcon="Share your thoughts openly, without the fear of being a burden."
          photo="2"
        />
        <BoxFeatures
          title="Your Space for Stories"
          desc="Write from the heart and feel the support from friends who truly understand."
          active
          titleIcon="Achieve Your Aspirations"
          descIcon="Discover the goals that truly matter and clear the path to success."
          photo="3"
          icons="arrow"
        />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="mt-12 cmd:mt-[100px] mb-20 cmd:mb-[300px]"
      >
        <a
          href="https://linktr.ee/aikenbook.id?fbclid=PAZXh0bgNhZW0CMTEAAaYFlLZbOhKbc-J2yesQL0JqsLbYY12PBnxzSB0icNNu8NCWo3glqU9ZkCQ_aem_K7GMaWuGC42dbAakE_4ZtA"
          target="_blank"
        >
          <Button
            text="Try Aiken free"
            bg="bg-gradient-to-r from-[#F9C623] to-[#A34D39] px-6 cmd:px-[50px]"
          />
        </a>
      </div>
      <div className="bg-[url('/images/bgClarity.png')] bg-cover h-[600px] flex flex-col items-end justify-center csm:px-[105px] px-[15px]  w-full">
        <div className="csm:mr-[70px] mr-0 ">
          <h1
            data-aos="zoom-in-up"
            className="font-semibold cmd:text-[54px] text-[44px] cmd:mb-[112px] mb-[80px] text-white  "
          >
            Embrace Clarity.
          </h1>
        </div>
        <p
          data-aos="zoom-in-left"
          className="font-lora text-white max-w-[496px] cmd:text-[28px] text-[20px] cmd:leading-[41px] leading-[30px] text-justify "
        >
          “Breaking free from overwhelm, I’ve made remarkable strides in
          changing habits that once felt impossible.”
        </p>
        <p
          data-aos="zoom-in-left"
          className="text-[18px] mt-[48px] text-white text-left "
        >
          — Annisa Salsabila, Premium Subscriber
        </p>
      </div>
    </section>
  );
}
