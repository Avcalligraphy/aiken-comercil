/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import BoxPricing from '../molecules/BoxPricing';

export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col items-center mb-[300px] ">
      <h1
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
        className="text-[54px] text-center leading-[56px] font-bold "
      >
        An affordable path to a <br /> better you
      </h1>
      <p
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
        className="text-[#5A5A5A] text-[20px] text-center mt-[17px] "
      >
        Aiken is free to use. When you're ready to make the full commitment to
        your <br /> personal growth, Aiken Bloom is the way to go.
      </p>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="flex flex-row gap-[24px] mt-[85px] "
      >
        <BoxPricing active={false} />
        <BoxPricing />
      </div>
    </section>
  );
}
