import Image from "next/image";

const SecondaryCTA = () => {
  return (
    <div className="conatainer py-20 md:py-40 bg-black text-white">
      <div className="md:w-3/4 m-auto">
        <Image
          width={200}
          height={200}
          alt=""
          src="/IconTower2.svg"
          className="pb-10 md:pb-14 m-auto"
        />
        <div className="text-center md:text-6xl text-4xl leading4 font-semibold">
          Icon Tower
          <p className="text-4xl">Experience Ultimate Urban Luxury</p>
        </div>
        <div className=" container text-center text-[#86868b] text-2xl font-semibold mt-5 mb-10">
          It’s here. The biggest redesign in the history of Apple GPUs.
        </div>
        <div className="container h-[60%] pb-8">
          <img src="/icon1.png" className="m-auto w-full"></img>
        </div>
        <div className="container md:flex justify-center gap-20 text-[#86868b]">
          <div className="flex flex-col gap-2 md:w-[400px] text-base font-normal">
            <div className="">
              Experience luxury at Icon Tower, featuring stunning views and{" "}
              <p className="inline text-white font-semibold">
                a state-of-the-art helipad.
              </p>
            </div>
            <div className="pb-4">
              Discover{" "}
              <p className="inline text-white font-semibold">
                unparalleled luxury at Icon Tower. Enjoy breathtaking views,
                world-class amenities, and the convenience of a state-of-the-art
                helipad.
              </p>{" "}
              Elevate your lifestyle and arrive in style at Icon Tower. .
            </div>
          </div>
          <div className="text-base font-semibold">
            <p>Icon Tower:</p>
            <p className="text-4xl font-semibold text-white">Exquisite</p>
            <p>Luxury</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCTA;
