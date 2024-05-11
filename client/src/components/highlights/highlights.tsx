"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
const Highlights = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { origin: "center", perView: 2, spacing: 50 },
      },
    },
  });
  return (
    <div className="bg-[#161617] py-20 bg-opacity-99">
      <div className="container flex md:justify-between  text-white gap-4 flex-col md:flex-row  text-left mb-10">
        <h1 className=" font-semibold text-3xl md:text-5xl text-[#86868b]">
          Get the highlights
        </h1>
        <div className="flex  md:gap-5 flex-col gap-2  md:flex-row md:items-center">
          <div className="text-sm font-medium md:text-center text-left  ">
            Get the video. <p className="inline text-blue-600">YouTube</p>
          </div>
          <div className="text-sm font-medium  md:items-center text-left ">
            Get the Brochure. <p className="inline text-blue-600">Download</p>
          </div>
        </div>
      </div>
      <div ref={sliderRef} className=" keen-slider w-full">
        <div className="keen-slider__slide number-slide1 md:rounded-3xl">1</div>
        <div className="keen-slider__slide number-slide2 md:rounded-3xl">2</div>
        <div className="keen-slider__slide number-slide3 md:rounded-3xl">3</div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">4</div>
        <div className="keen-slider__slide number-slide5 md:rounded-3xl">5</div>
        <div className="keen-slider__slide number-slide6 md:rounded-3xl">6</div>
      </div>
    </div>
  );
};
export default Highlights;
