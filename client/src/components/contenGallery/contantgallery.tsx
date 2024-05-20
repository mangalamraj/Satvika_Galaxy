import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ContentGalllery = () => {
  return (
    <div className="  bg-[#161617] text-white py-20 md:py-40">
      <div className="container ">
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
        <div className="md:w-3/4 md:m-auto md:text-6xl text-4xl leading4 font-semibold">
          <div className="m-auto">
            <p>Galaxy.</p>Check our constellations.
          </div>
        </div>
        <div className="ImageGallery">
          <div className="md:w-4/5 md:m-auto pt-4 pb-4">
            <img src="/three1.png" alt="" />
          </div>
          <div className="md:w-4/5 gap-4 flex m-auto overflow-x-hidden">
            <img src="/three2.png" className="w-1/2"></img>
            <img src="/three3.png" className="w-1/2"></img>
          </div>
        </div>

        <div className="md:w-3/4 md:m-auto flex flex-col md:flex-row md:gap-20 gap-2 text-base font-semibold justify-between pt-10">
          <div className="">
            iPhone 15 Pro is the first iPhone to feature an aerospace‑grade
            titanium design, using the same alloy that spacecraft use for
            missions to Mars.
          </div>
          <div>
            Titanium has one of the best strength‑to‑weight ratios of any metal,
            making these our lightest Pro models ever. You’ll notice the
            difference the moment you pick one up.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGalllery;
