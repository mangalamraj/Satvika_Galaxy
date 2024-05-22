"use client";
import * as React from "react";
import Image from "next/image";
import "./home.css"; // Assuming this contains additional styles
import Highlights from "@/components/highlights/highlights";
import CTA from "@/components/satvikaCTA/cta";
import ContentGalllery from "@/components/contenGallery/contantgallery";
import ZoomSection from "@/components/sectionZoom/ZoomContent";
import SecondaryCTA from "@/components/satvikaSecondaryCTA/secondaryCTA";
import SmallerCarousel from "@/components/smallerCurousel/smallerCurousel";
import AccordionCard from "@/components/accordianCard/accordianCard";
import AmenitiesCarousel from "@/components/amenitiesCarousel/amenitiesCarousel";
import FeatureCsrd from "@/components/featureCard/featureCard";
import VideoComponent from "@/components/videoComponent/videoComponent";
import HomeElement from "@/components/home/home";
import FeatureComponent2 from "@/components/featureCard2/featureCard2";
import SubodhSir from "@/components/subodhsir/subodhsir";
import Hafeez from "@/components/hafizsir/hafizSir";

export default function Home() {
  return (
    <main>
      <HomeElement />
      <div className="w-full md:h-8 h-4 bg-black"></div>
      <VideoComponent />
      <Highlights />
      <CTA />
      <ContentGalllery />
      <SecondaryCTA />
      <AmenitiesCarousel />
      <ZoomSection />
      <SmallerCarousel />
      <AccordionCard />
      {/* <FeatureCsrd /> */}
      <SubodhSir />
      <Hafeez />
      {/* <FeatureComponent2 /> */}
    </main>
  );
}
