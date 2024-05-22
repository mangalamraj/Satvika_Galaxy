"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const SmallerCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className=" bg-black py-20 md:py-40 text-white">
      <div className="container">
        <div className=" md:w-3/4 m-auto md:text-6xl text-3xl leading4 font-semibold">
          Welcome to Satvika Galaxy Apartments.
        </div>
        <div
          className="md:w-3/4  m-auto text-[#86868b] md:text-2xl text-xl font-semibold my-10"
          id="amenities"
        >
          Discover Unmatched Comfort and Luxury: Experience Stellar Living at
          Satvika Galaxy Apartments
        </div>
      </div>
      <div className="md:w-[90%] m-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className=" max-w-full ml-auto"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-1">
              <div className="p-1">
                <div>
                  <img src="/e1.png" width={600} height={500} alt="" />
                </div>
                <div className="p-2 text-center">
                  Benchmark development that exceeds exptectations
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-1">
              <div className="p-1">
                <div>
                  <img src="e2.png" width={600} height={500} alt="" />
                </div>
                <div className="p-2 text-center">
                  Benchmark development that exceeds exptectations
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-1">
              <div className="p-1">
                <div>
                  <img src="e3.png" width={600} height={500} alt="" />
                </div>
                <div className="p-2 text-center">
                  Benchmark development that exceeds exptectations
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-1">
              <div className="p-1">
                <div>
                  <img src="e4.png" width={600} height={500} alt="" />
                </div>
                <div className="p-2 text-center">
                  Benchmark development that exceeds exptectations
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-1">
              <div className="p-1">
                <div>
                  <img src="e5.png" width={600} height={500} alt="" />
                </div>
                <div className="p-2 text-center">
                  Benchmark development that exceeds exptectations
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-1">
              <div className="p-1">
                <div>
                  <img src="e6.png" width={600} height={500} alt="" />
                </div>
                <div className="p-2 text-center">
                  Benchmark development that exceeds exptectations
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="text-white bg-black" />
            <CarouselNext className="text-white bg-black" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SmallerCarousel;
