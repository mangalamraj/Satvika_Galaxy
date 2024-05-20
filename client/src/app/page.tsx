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
import FeatureComponent from "@/components/featureComponent/featureComp";
import VideoComponent from "@/components/videoComponent/videoComponent";
import HomeElement from "@/components/home/home";

export default function Home() {
  return (
    <main>
      <HomeElement />
      <div className="w-full h-2 bg-white"></div>
      {/* <VideoComponent /> */}
      <Highlights />
      <CTA />
      <ContentGalllery />
      <SecondaryCTA />
      <AmenitiesCarousel />
      <ZoomSection />
      <SmallerCarousel />
      <AccordionCard />
      <FeatureCsrd />
      <FeatureComponent />
    </main>
  );
}
