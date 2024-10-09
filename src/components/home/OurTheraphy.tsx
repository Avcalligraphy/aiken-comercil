/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../molecules/Card";
import CardReport from "../molecules/CardReport";
import Button from "../molecules/Button";

export default function OurTheraphy() {
  const cardData = [
    {
      name: "Arief Fahmie",
      title: "Clinical Psychology",
      bgColor: "bg-gray-100",
      image: "photoTheraphy1",
    },
    {
      name: "Retno Kumolohadi",
      title: "Developmental Psychology",
      bgColor: "bg-blue-100",
      image: "photoTheraphy2",
    },
    {
      name: "Qurotul Uyun",
      title: "Social Psychology",
      bgColor: "bg-orange-100",
      image: "photoTheraphy3",
    },
    {
      name: "Indahria Sulistyarini",
      title: "Family and Marriage Psychology",
      bgColor: "bg-purple-100",
      image: "photoTheraphy4",
    },
    {
      name: "Hariz Enggar",
      title: "Health Psychology",
      bgColor: "bg-teal-100",
      image: "photoTheraphy5",
    },
  ];
  const cardDataReport = [
    {
      name: "Stress",
      desc: "82%",
      bgColor: "bg-gray-100",
    },
    {
      name: "Grief",
      desc: "71%",
      bgColor: "bg-blue-100",
    },
    {
      name: "Depression",
      desc: "94%",
      bgColor: "bg-orange-100",
    },
    {
      name: "Anxiety",
      desc: "92%",
      bgColor: "bg-purple-100",
    },
    {
      name: "Anger",
      desc: "76%",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[300px]">
      <h1
        data-aos="fade-up"
        className="font-bold cmd:text-4xl csm:text-3xl text-2xl leading-tight cmd:mb-32 csm:mb-28 mb-16 max-w-[603px] text-center "
      >
        Developed with Experts, Designed for Transformation
      </h1>
      <div className="flex justify-center  ">
        <div className="cxl:flex hidden space-x-6 px-4">
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
        <div className="cxl:hidden grid cmmd:grid-cols-4 csm:grid-cols-3 cssm:grid-cols-2 grid-cols-1 gap-[15px]">
          {cardData.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              title={card.title}
              bgColor={card.bgColor}
              image={card.image}
              className={``}
            />
          ))}
        </div>
      </div>
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="font-semibold cmd:text-[28px] text-[24px] cmd:leading-[48px] leading-[32px] mt-[96px] text-center cmd:px-0 px-[15px] "
      >
        Users report noticeable progress within their first 7 days
      </h1>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" text-[#5A5A5A] text-[16px] leading-[25px] mt-[2px] mb-[75px] "
      >
        From 70 users surveyed
      </p>
      <div className="flex justify-center">
        <div className="cxl:flex hidden space-x-6 px-4">
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
        <div className="cxl:hidden grid cmmd:grid-cols-4 csm:grid-cols-3 cssm:grid-cols-2 grid-cols-1 gap-[15px]">
          {cardDataReport.map((card, index) => (
            <CardReport
              key={index}
              name={card.name}
              desc={card.desc}
              bgColor={card.bgColor}
              className={``}
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
      <div className="bg-[url('/images/bgDeeper.png')] bg-cover h-[600px] flex flex-col items-start justify-center csm:px-[105px] px-[15px]  w-full">
        <p
          data-aos="fade-up-right"
          className="font-lora text-white max-w-[496px] cmd:text-[28px] text-[20px] cmd:leading-[41px] leading-[30px] csm:mr-[70px] mr-0 text-justify "
        >
          “I’ve uncovered deeper insights about myself and found solutions to
          personal challenges I’ve carried since childhood.”
        </p>
        <p
          data-aos="fade-up-right"
          className="text-[18px] mt-[48px] text-white text-left "
        >
          — Haikal Rivaldi, Premium Subscriber
        </p>
      </div>
    </div>
  );
}
