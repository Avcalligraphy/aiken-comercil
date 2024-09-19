/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import BoxPricing from '../molecules/BoxPricing';

export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col items-center mb-[300px] ">
      <h1
        // data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
        className="cmd:text-[54px] csm:text-3xl text-2xl leading-tight font-bold  text-center max-w-[549px] "
      >
        Affordable Growth for a Better You
      </h1>
      <p
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center text-[#5A5A5A] text-base cmd:text-lg clg:text-[20.5px] mt-4 cmd:mt-[33px] max-w-[690px] "
      >
        Start with Aiken for free, and when you're ready to go all in on your
        personal journey, Aiken Bloom is the perfect choice.
      </p>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="flex cmd:flex-row flex-col items-center gap-[24px] mt-[85px] "
      >
        <BoxPricing active={false} price="220.000" title="Book" />
        <BoxPricing
          price="299.000"
          title="Book + (App Premium Account for 3 months)"
        />
      </div>
    </section>
  );
}
