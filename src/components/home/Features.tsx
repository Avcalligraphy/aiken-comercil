/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import BoxFeatures from '../molecules/BoxFeatures';
import Button from '../molecules/Button';

export default function Features() {
  return (
    <section id="features" className="flex flex-col items-center">
      <h1
        data-aos="fade-up"
        className="font-bold text-[54px] text-black text-center leading-[56px] "
      >
        Your companion for holistic <br /> personal growth
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-[#5A5A5A] text-[20.5px] mt-[33px]  "
      >
        Aiken combines journaling, habit-building, and emotional <br /> support
        in one integrated platform.
      </p>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="flex flex-row mt-[64px] gap-[24px] "
      >
        <BoxFeatures
          title="Connect the dots"
          desc="Aiken remembers and can help you make sense of it all."
          active
          width={362.7}
          height={319}
          titleIcon="Private and secure"
          descIcon="Your data is encrypted in transit and at rest to protect your privacy."
          photo="1"
        />
        <BoxFeatures
          title="Build resilience"
          desc="Manage stress more effectively and improve your relationships."
          active={false}
          width={362.7}
          height={321.6}
          titleIcon="Speak freely"
          descIcon="Voice your truth without worrying about burdening others."
          photo="2"
        />
        <BoxFeatures
          title="Place for your Stories"
          desc="You can write whatever you feel and feel better with our friends"
          active
          width={362.7}
          height={334}
          titleIcon="Reach your goals"
          descIcon="Identify the right goals for you and remove the obstacles in the way."
          photo="3"
          icons="arrow"
        />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="mt-[100px] mb-[300px]"
      >
        <Button
          text="Try Aiken free"
          bg="bg-gradient-to-r from-[#F9C623] to-[#A34D39] px-[50px] "
        />
      </div>
      <div className="bg-[url('/images/bgClarity.png')] bg-cover h-[600px] flex flex-col items-end justify-center px-[105px]  w-full">
        <h1
          data-aos="zoom-in-up"
          className="font-semibold text-[54px] mb-[112px] text-white mr-[70px]  "
        >
          Live with clarity.
        </h1>
        <p
          data-aos="zoom-in-left"
          className="font-lora text-white max-w-[496px] text-[28px] leading-[41px] text-justify "
        >
          “I was able to break free from feeling overwhelmed. I have made huge
          progress in changing habits I've struggled with for many years.”
        </p>
        <p
          data-aos="zoom-in-left"
          className="text-[18px] mt-[48px] text-white text-left "
        >
          — Azzah Afifah, Premium Subscriber
        </p>
      </div>
    </section>
  );
}
