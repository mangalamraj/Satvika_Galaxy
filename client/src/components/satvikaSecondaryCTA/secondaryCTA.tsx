import Image from "next/image";

const SecondaryCTA = () => {
  return (
    <div className="conatainer py-20 md:py-40 bg-black text-white" id="id">
      <div className="md:w-3/4 m-auto">
        <img
          width={200}
          height={200}
          alt=""
          src="https://mango2.b-cdn.net/icon10.png"
          className="pb-10 md:pb-14 m-auto"
        />
        <div className="container text-center md:text-6xl text-3xl leading4 font-semibold">
          <p className="text-3xl">Elevate Your Living to New Heights</p>
        </div>
        <div className=" container text-center text-[#86868b] text-xl md:text-2xl font-semibold mt-5 mb-10">
          Soaring above the city skyline with breathtaking terraces, offering
          unparalleled views and luxurious living at every level.
        </div>
        <div className="container h-[60%] pb-8">
          <img src="/icon1.png" className="m-auto w-full"></img>
        </div>
        <div className="container md:flex justify-center gap-20 text-[#86868b]">
          <div className="flex flex-col gap-2  text-base font-normal">
            <div className="text-justify">
              ICON Tower rises as a beacon of modernity, standing tall above the
              city skyline. Each terrace is meticulously{" "}
              <p className="inline text-white font-semibold">
                designed to offer breathtaking panoramic views and create a
                seamless blend of luxury and comfort.
              </p>{" "}
              From the ground floor to the topmost level, residents experience
              unparalleled living with state-of-the-art amenities and spacious,
              elegant interiors. <br />
              <br />
              Whether enjoying a morning coffee overlooking the city or hosting
              a gathering under the stars,{" "}
              <p className="inline text-white font-semibold">
                ICON Tower provides a unique urban lifestyle that combines
                sophistication with convenience.
              </p>
            </div>
          </div>
          <div className="flex md:block justify-between pt-6 md:pt-0">
            <div className="text-base font-semibold md:pb-16">
              <p>Icon Tower</p>
              <p className="text-4xl font-semibold text-white">Rooftop</p>
              <p>Lounge</p>
            </div>
            <div className="text-base font-semibold ">
              <p>Skyline with</p>
              <p className="text-4xl font-semibold text-white">Unparelleled </p>
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCTA;
