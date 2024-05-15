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

const AmenitiesCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className="bg-[#161617] py-20 text-white">
      <div className="container">
        <div className=" font-semibold text-3xl md:text-5xl text-[#86868b] mb-10">
          Amanities
        </div>
      </div>
      <div className="w-[74%] m-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className=" max-w-full ml-auto rounded-3xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-3/4 lg:basis-1/4 pl-1 rounded-3xl"
              >
                <div className="p-0 rounded-3xl border-0">
                  <Card className="rounded-3xl bg-[#242426] border-0 w-[300px]">
                    <CardContent className="flex aspect-square items-center justify-center border-0">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="block">
            <CarouselPrevious className="text-white bg-black" />
            <CarouselNext className="text-white bg-black" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AmenitiesCarousel;
