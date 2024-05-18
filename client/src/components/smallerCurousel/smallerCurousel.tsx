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
        <div className=" md:w-3/4 m-auto md:text-6xl text-4xl leading4 font-semibold">
          Welcome to Satvika Galaxy Apartments.
        </div>
        <div className="md:w-3/4  m-auto text-[#86868b] md:text-2xl text-xl font-semibold my-10">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-1"
              >
                <div className="p-1">
                  <div>
                    <img
                      src="https://www.apple.com/v/iphone-15-pro/c/images/overview/camera/pro_lens1__brxt4ho5qkeu_large_2x.jpg"
                      width={600}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="p-2 text-center">
                    Benchmark development that exceeds exptectations
                  </div>
                </div>
              </CarouselItem>
            ))}
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
