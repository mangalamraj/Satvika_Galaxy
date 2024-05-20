"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useState } from "react";
import Link from "next/link";

const Highlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
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
    ],
  );
  return (
    <div className="bg-[#161617] py-20 md:pt-40 pb-32 bg-opacity-99">
      <div className="container flex md:justify-between  text-white gap-4 flex-col md:flex-row  text-left mb-10">
        <h1
          className=" font-semibold text-3xl md:text-4xl text-[#86868b]"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Get the highlights
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
            Get the video. <p className="inline text-blue-600">YouTube</p>
          </div>
          <div
            className="text-sm font-medium  md:items-center text-left "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="800"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Get the Brochure. <p className="inline text-blue-600">Download</p>
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider mx-auto">
        <div className="keen-slider__slide number-slide1 md:rounded-3xl slide1">
          <div className="absolute z-50 w-[60%] md:w-[50%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Gaze upon the sparkling waters of our pools, a true serene feeling.{" "}
          </div>
          <img
            src="/slide1.png"
            className="hover:scale-110 transition-transform "
          />
        </div>
        <div className="keen-slider__slide number-slide2 md:rounded-3xl">
          <div className="absolute z-50 w-[60%]  md:w-[50%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4 ">
            Ultra Luxury modern apartments with world class amenities.{" "}
          </div>
          <img
            src="/slide2.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide3 md:rounded-3xl">
          <div className="absolute z-50 w-[60%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Captivating pool views - not just by the poolside, but on the edge
            of a serene.{" "}
          </div>
          <img
            src="/slide3.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[70%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Every corner is meticulously designed to reflect the beauty and
            vastness of the galaxy.{" "}
          </div>
          <img
            src="/slide4.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[50%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Club Satvika Galaxy offers a range of social amenities.{" "}
          </div>
          <img
            src="/slide5.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[70%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Every corner is meticulously designed to reflect the beauty and
            vastness of the galaxy.{" "}
          </div>
          <img
            src="/slide6.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[70%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4 ">
            Our range of healthy experiences that meet the taste of every
            fitness enthusiast.{" "}
          </div>
          <img
            src="/slide7.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[60%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Enter into exclusive elite lifestyle experience with a grand
            entrance foyer.{" "}
          </div>
          <img
            src="/slide8.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[50%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Celebrate magnitude of events in a luxurious banquet hall.{" "}
          </div>
          <img
            src="/slide9.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[50%] md:text-xl text-base font-semibold top-0 left-0 md:p-8 p-4">
            Stay tuned for more news and updates{" "}
          </div>
          <img
            src="/slide10.png"
            className="hover:scale-110 transition-transform"
          />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-10 w-[240px] bg-[#424545] m-auto rounded-3xl min-h-[50px] items-center bg-opacity-80">
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
      <div className="text-xs font-medium text-center mt-10 w-full  md:w-[45%] m-auto text-[#86868b]">
        Step into Satvika Galaxy, Where every home is a shinig star. Located in
        the heart of, patna this stellar project by{" "}
        <Link href="https://satvikagroup.in/" target="_blank">
          <p className="inline text-blue-600">SATVIKA GROUP</p>
        </Link>{" "}
        offers you lifestyle that is out of this world.
      </div>
    </div>
  );
};
export default Highlights;
