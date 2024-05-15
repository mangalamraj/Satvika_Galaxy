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

export default function Home() {
  return (
    <main>
      <div className="relative  bg-black h-[88vh] flex flex-col 2xl:pt-20 pt-10 items-center background overflow-hidden">
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

          <div className="w-full md:pb-4 pb-8 -z-1">
            <div className="container md:w-[100%] w-full md:pb-7 pb-3 opacity-75">
              <Image
                src="/1.svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="container md:w-[95%] w-full">
              <Image
                src="/2.svg"
                width={0}
                height={0}
                className="w-full h-full pb-7"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute  bottom-0 md:-bottom-44 w-full overflow-hidden">
          <img
            src="/P1.png"
            alt="P111"
            className="mx-auto 2xl:w-[960px] w-[840px]"
          />
        </div>
        <div className="absolute hidden md:block md:-bottom-20 left-0 w-2/3  overflow-hidden">
          <img src="/cloud.png" className="w-[400px] m-auto" />
        </div>
        <div className="absolute hidden md:block md:bottom-16 right-0 w-2/3  overflow-hidden">
          <img src="/cloud.png" className="w-[400px] m-auto" />
        </div>
      </div>
      <div className="w-full h-2 bg-white"></div>
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
