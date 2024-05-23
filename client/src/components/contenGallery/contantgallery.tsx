"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useEffect } from "react";

const ContentGalllery = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="bg-[#161617] text-white py-20 md:py-40">
      <div className="container">
        <div
          className="font-semibold text-3xl md:text-4xl text-[#86868b] pb-20"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Explore the full story.
        </div>
        <div className="md:w-4/5 md:m-auto md:text-5xl text-3xl leading4 font-semibold">
          <div className="pb-8">
            <p className="inline md:block">Galaxy.</p>A skyline of
            constellations.
          </div>
        </div>
        <div className="ImageGallery overflow-hidden">
          <div className="md:w-4/5 md:m-auto pt-4 pb-4 overflow-y-hidden overflow-x-hidden">
            <motion.div
              ref={ref}
              style={{
                scale: scaleProgress,
                opacity: scrollYProgress,
              }}
            >
              <img
                src="/three1.png"
                alt=""
                className="w-full overflow-y-hidden"
              />
            </motion.div>
          </div>
          <div className="md:w-4/5 m-auto overflow-hidden mt-4">
            <div className="flex gap-4 m-auto">
              <img src="/three2.png" className="w-1/2" alt="" />
              <img src="/three3.png" className="w-1/2" alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-4/5 md:m-auto flex flex-col md:flex-row md:gap-20 gap-2 text-base font-semibold justify-between pt-10">
          <div className="text-justify tracking-tighter">
            Satvika Galaxy, Patna &apos; s benchmark in residential projects.
            Offering luxury flats with modern amenities, this premier
            development redefines sophisticated urban living and shaping a new.
            Experience unparalleled comfort, state-of-the-art facilities, and a
            vibrant community in the heart of the city. Discover your dream home
            at Satvika Galaxy.
          </div>
          {/* <div className="text-justify tracking-tighter">
            Experience luxury living at Satvika Galaxy, where modern design
            meets serene surroundings, creating the perfect blend of elegance
            and tranquility.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContentGalllery;
