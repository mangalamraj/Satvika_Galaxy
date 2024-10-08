"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useState } from "react";
import Link from "next/link";
import { useModal } from "@/app/providers/modalProvider";

const Highlights = () => {
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
    <div className="bg-[#161617] py-20 md:pt-30 pb-32 bg-opacity-99">
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
            Get the Brochure.{" "}
            <p
              onClick={openModal}
              className="inline text-blue-600 cursor-pointer"
            >
              Download
            </p>
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider mx-auto">
        <div className="keen-slider__slide number-slide1 md:rounded-3xl slide1">
          <div className="absolute z-50 w-[70%] md:w-[50%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Gaze upon the sparkling waters of our pools, a true serene feeling.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173503/Satvika/slide1_omgdjy.png"
            className="hover:scale-110 transition-transform "
            alt="slidepics"
          />
        </div>
        <div className="keen-slider__slide number-slide2 md:rounded-3xl">
          <div className="absolute z-50 w-[70%]  md:w-[50%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4 ">
            Ultra Luxury modern apartments with world class amenities.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173504/Satvika/slide2_dgr1nz.png"
            className="hover:scale-110 transition-transform"
            alt="slidepics"
          />
        </div>
        <div className="keen-slider__slide number-slide3 md:rounded-3xl">
          <div className="absolute z-50 w-[70%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Captivating pool views - not just by the poolside, but on the edge
            of a serene.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173503/Satvika/slide3_yxxb7r.png"
            className="hover:scale-110 transition-transform"
            alt="slidepics"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[70%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Every corner is meticulously designed to reflect the beauty and
            vastness of the galaxy.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173503/Satvika/slide4_i2w2rx.png"
            className="hover:scale-110 transition-transform"
            alt="slidepics"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[70%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Club Satvika Galaxy offers a range of social amenities.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173505/Satvika/slide5_ypg1t8.png"
            className="hover:scale-110 transition-transform"
            alt="slidepics"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[90%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Our lush green landscapes, sustainable designs, and tranquil
            gardens. Your perfect, eco-friendly home awaits.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717175145/Satvika/6_pafz8b.png"
            alt="slidepics"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[90%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4 ">
            Community-centric living starts here, ultra-spacious apartments with
            modern amenities & security.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717175141/Satvika/7_mjtwrf.png"
            alt="slidepics"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[90%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Enjoy our terrace garden and cozy seating. Perfect for relaxation
            and social gatherings. Your urban oasis awaits.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717175189/Satvika/11_smpyrg.png"
            alt="slidepics"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[90%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Welcome guests with grand entrance featuring an amphitheatre. Ideal
            for community events and gatherings.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717175184/Satvika/12_yvx7ky.png"
            alt="slidepics"
            className="hover:scale-110 transition-transform"
          />
        </div>

        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[90%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Beautiful architecture designed to captivate every heart. Our
            stylish apartments blend elegance and comfort for your perfect home.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717175178/Satvika/13_dtxsch.png"
            alt="slidepics"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[90%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Introducing Icon Tower: a sky-high marvel with stunning terraces.
            Experience unparalleled views and luxury living in the heart of the
            city.{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717175172/Satvika/14_x8g4bn.png"
            alt="slidepics"
            className="hover:scale-110 transition-transform"
          />
        </div>
        <div className="keen-slider__slide number-slide4 md:rounded-3xl">
          <div className="absolute z-50 w-[50%] md:text-xl text-sm font-semibold top-0 left-0 md:p-8 p-4">
            Stay tuned for more news and updates{" "}
          </div>
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173503/Satvika/slide10_zjudt6.png"
            className="hover:scale-110 transition-transform"
            alt="slidepics"
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
        Step into Satvika Galaxy, Where every home is a shinig star. Located in
        the heart of Patna this stellar project by{" "}
        <Link href="https://satvikagroup.in/" target="_blank">
          <p className="inline text-blue-600">SATVIKA GROUP</p>
        </Link>{" "}
        offers you lifestyle that is out of this world.
      </div>
    </div>
  );
};
export default Highlights;
