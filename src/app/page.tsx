'use client'
/* eslint-disable react/no-unescaped-entities */

import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import OurTheraphy from "@/components/home/OurTheraphy";
import Pricing from "@/components/home/Pricing";
import Stories from "@/components/home/Stories";
import Tester from "@/components/home/Tester";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Tester />
      <Features />
      <OurTheraphy />
      <Stories />
      <Pricing />
      <Footer />
    </>
  );
}
