const ContentGalllery = () => {
  return (
    <div className="  bg-[#161617] text-white pb-20">
      <div className="container ">
        <div className="font-semibold text-3xl md:text-5xl text-[#86868b] py-20">
          Explore the full story.
        </div>
        <div className="container md:text-6xl text-4xl leading4 font-semibold">
          <p>iPhone.</p>Forged in titanium.
        </div>
        <div className="ImageGallery"></div>
        <div className=" container items-center  mt-6">
          <div className=" flex flex-col md:flex-row md:w-4/5 md:gap-20 text-base font-semibold justify-between">
            <div className="">
              iPhone 15 Pro is the first iPhone to feature an aerospace‑grade
              titanium design, using the same alloy that spacecraft use for
              missions to Mars.
            </div>
            <div>
              Titanium has one of the best strength‑to‑weight ratios of any
              metal, making these our lightest Pro models ever. You’ll notice
              the difference the moment you pick one up.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGalllery;
