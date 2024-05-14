"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useState } from "react";
const Highlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
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
        slides: { origin: "center", perView: 2, spacing: 50 },
      },
    },
  });
  return (
    <div className="bg-[#161617] py-40 bg-opacity-99">
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
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-10 w-[137px] bg-[#424545] m-auto rounded-3xl min-h-[50px] items-center bg-opacity-70">
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
    </div>
  );
};
export default Highlights;
