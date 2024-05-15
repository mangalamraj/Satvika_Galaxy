"use client";
import * as React from "react";
import Image from "next/image";
import "./home.css"; // Assuming this contains additional styles
import Highlights from "@/components/highlights/highlights";
import CTA from "@/components/satvikaCTA/cta";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";
import KeyWorks from "@/components/keyWorks/keyWorks";
import ContentGalllery from "@/components/contenGallery/contantgallery";
import ZoomSection from "@/components/sectionZoom/ZoomContent";
import SecondaryCTA from "@/components/satvikaSecondaryCTA/secondaryCTA";
import SmallerCarousel from "@/components/smallerCurousel/smallerCurousel";
import AccordionCard from "@/components/accordianCard/accordianCard";
import AmenitiesCarousel from "@/components/amenitiesCarousel/amenitiesCarousel";
import FeatureCsrd from "@/components/featureCard/featureCard";
import FeatureComponent from "@/components/featureComponent/featureComp";
import VideoComponent from "@/components/videoComponent/videoComponent";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const c1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const c2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  return (
    <main>
      <div className="relative  bg-black h-[88vh] flex flex-col 2xl:pt-20 pt-10 items-center background overflow-hidden">
        <div className="overflow-hidden h-[1vh]">
          <span></span>
          <span></span>
        </div>
        <div className="w-full flex flex-col gap-5 md:justify-between h-full">
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="w-66">
              <Image
                src="/gALAXY.svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt=""
              />
            </div>

            <div className="md:w-40 w-40">
              <Image
                src="/LIVING .svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:pb-4 pt-28 -z-1">
            <motion.div
              ref={ref}
              className="container md:w-[100%] w-full md:pb-7 pb-3 opacity-75"
              style={{ translateX: x }}
            >
              <Image
                src="/1.svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              ref={ref}
              className="container md:w-[95%] w-full"
              style={{ translateX: y }}
            >
              <Image
                src="/2.svg"
                width={0}
                height={0}
                className="w-full h-full pb-7"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute  bottom-0  w-full overflow-hidden">
          <img
            src="/P1.png"
            alt="P111"
            className="mx-auto 2xl:w-[720px] w-[600px]"
          />
        </div>
        <motion.div
          className="absolute hidden md:block md:-bottom-20 left-0 w-2/3  overflow-hidden"
          style={{ translateX: c1 }}
          ref={ref}
        >
          <img src="/cloud.png" className="w-[400px] m-auto" />
        </motion.div>
        <motion.div
          className="absolute hidden md:block md:bottom-28 right-0 w-2/3  overflow-hidden"
          style={{ translateX: c2 }}
          ref={ref}
        >
          <img src="/cloud.png" className="w-[400px] m-auto" />
        </motion.div>
      </div>
      <div className="w-full h-2 bg-white"></div>
      <VideoComponent />
      <Highlights />
      <CTA />
      <ContentGalllery />
      <SecondaryCTA />
      <ZoomSection />
      <SmallerCarousel />
      <AccordionCard />
      {/* <AmenitiesCarousel /> */}
      <FeatureCsrd />
      <FeatureComponent />
    </main>
  );
}
