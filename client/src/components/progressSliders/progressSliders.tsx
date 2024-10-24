"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useState } from "react";
import Link from "next/link";
import { useModal } from "@/app/providers/modalProvider";
import Image from "next/image";

import image1 from "./images/4th Aug 1.jpg";
import image2 from "./images/4th Aug 2.jpg";
import image3 from "./images/4th Aug 3.jpg";

const ProgressSliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { openModal } = useModal();
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { origin: "center", perView: 2, spacing: 20 },
        },
      },
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="bg-[#0F2F44] pt-20 md:pt-30 pb-32 bg-opacity-99">
      <div className="container flex md:justify-between  text-white gap-4 flex-col md:flex-row  text-left mb-10">
        <h1
          className=" font-semibold text-3xl md:text-4xl text-[#d5d5da]"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Picture updates
        </h1>
        <div className="flex  md:gap-5 flex-col gap-2  md:flex-row md:items-center">
          <div
            className="text-sm font-medium md:text-center text-left  "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Next update ETA: <p className="inline text-white">November</p>
          </div>
          <div
            className="text-sm font-medium  md:items-center text-left "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="800"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Get the Brochure -{" "}
            <p onClick={openModal} className="inline text-white cursor-pointer">
              Download
            </p>
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider mx-auto">
        <div className="keen-slider__slide number-slide1 md:rounded-3xl slide1">
          <Image
            src={image1}
            alt="Landscape picture"
            className="hover:scale-110 transition-transform"
            width={1000}
            height={1000}
          />
        </div>
        <div className="keen-slider__slide number-slide1 md:rounded-3xl slide1">
          <Image
            src={image2}
            alt="Landscape picture"
            className="hover:scale-110 transition-transform"
            width={1000}
            height={1000}
          />
        </div>
        <div className="keen-slider__slide number-slide1 md:rounded-3xl slide1">
          <Image
            src={image3}
            alt="Landscape picture"
            className="hover:scale-110 transition-transform"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-10 w-[300px] bg-[#424545] m-auto rounded-3xl min-h-[50px] items-center bg-opacity-80">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
      <div className="container md:p-0 text-xs font-medium text-center mt-10 w-full  md:w-[45%] m-auto text-[#86868b]">
        Stay uptodate with quarterly site progress video. Please check the
        mentioned date of publish carefully. RERA No :
        BRERAP12464-001/194/R-1672/2024.
      </div>
    </div>
  );
};
export default ProgressSliders;
