/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../molecules/Card";
import CardReport from "../molecules/CardReport";
import Button from "../molecules/Button";

export default function OurTheraphy() {
  const cardData = [
    {
      name: "Raelen Agle",
      title: "Nervous System Rebalancing",
      bgColor: "bg-gray-100",
      image: "photoTheraphy1",
    },
    {
      name: "Micha Tomoff",
      title: "Positive Psychology",
      bgColor: "bg-blue-100",
      image: "photoTheraphy2",
    },
    {
      name: "Dr. Christine Cielo",
      title: "Acceptance & Commitment",
      bgColor: "bg-orange-100",
      image: "photoTheraphy3",
    },
    {
      name: "David Coates",
      title: "Internal Family Systems",
      bgColor: "bg-purple-100",
      image: "photoTheraphy4",
    },
    {
      name: "Andrew Horn",
      title: "My Father and Me",
      bgColor: "bg-teal-100",
      image: "photoTheraphy5",
    },
  ];
  const cardDataReport = [
    {
      name: "ADHD",
      desc: "52%",
      bgColor: "bg-gray-100",
    },
    {
      name: "Grief",
      desc: "52%",
      bgColor: "bg-blue-100",
    },
    {
      name: "Depression",
      desc: "63%",
      bgColor: "bg-orange-100",
    },
    {
      name: "Anxiety",
      desc: "62%",
      bgColor: "bg-purple-100",
    },
    {
      name: "Anger",
      desc: "63%",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[300px]">
      <h1
        data-aos="fade-up"
        className="font-bold text-4xl text-center leading-tight mb-32"
      >
        Built with therapists and coaches.
        <br />
        Designed for positive change.
      </h1>
      <div className="flex justify-center  ">
        <div className="flex space-x-6 px-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              title={card.title}
              bgColor={card.bgColor}
              image={card.image}
              className={`transform transition-transform ${
                index === 0 || index === 4
                  ? "translate-y-0"
                  : index === 1 || index === 3
                  ? "-translate-y-6" // Adjusted value
                  : "-translate-y-12" // Adjusted value
              }`}
            />
          ))}
        </div>
      </div>
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="font-semibold text-[28px] leading-[48px] mt-[96px] "
      >
        Users report significant improvements within 7 days
      </h1>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" text-[#5A5A5A] text-[16px] leading-[25px] mt-[2px] mb-[75px] "
      >
        From 30 users surveyed
      </p>
      <div className="flex justify-center">
        <div className="flex space-x-6 px-4">
          {cardDataReport.map((card, index) => (
            <CardReport
              key={index}
              name={card.name}
              desc={card.desc}
              bgColor={card.bgColor}
              className={`transform transition-transform ${
                index === 0 || index === 4
                  ? "translate-y-0"
                  : index === 1 || index === 3
                  ? "translate-y-6" // Adjusted value
                  : "translate-y-12" // Adjusted value
              }`}
            />
          ))}
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="mt-[100px] mb-[300px]"
      >
        <Button
          text="Try Aiken free"
          bg="bg-gradient-to-r from-[#F9C623] to-[#A34D39] px-[50px] "
        />
      </div>
      <div className="bg-[url('/images/bgDeeper.png')] bg-cover h-[600px] flex flex-col items-start justify-center px-[105px]  w-full">
        <p
          data-aos="fade-up-right"
          className="font-lora text-white max-w-[496px] text-[28px] leading-[41px] text-justify "
        >
          “I've been able to discover deeper insights about myself and find
          paths to solve personal problems that I've had since childhood.”
        </p>
        <p
          data-aos="fade-up-right"
          className="text-[18px] mt-[48px] text-white text-left "
        >
          — Revanshah, Premium Subscriber
        </p>
      </div>
    </div>
  );
}
