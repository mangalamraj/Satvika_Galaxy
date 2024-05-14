import * as React from "react";
import Image from "next/image";
const ZoomSection = () => {
  return (
    <div className="bg-black py-40">
      <div className="container text-white md:text-6xl text-4xl leading4 font-semibold">
        <div className=" md:w-3/4 m-auto">
          A camera that captures your wildest imagination.
        </div>
        <div className="md:w-3/4 m-auto text-[#86868b] text-2xl font-semibold my-10">
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system.
        </div>
        <div className="relative" style={{ width: "100%", height: "500px" }}>
          {" "}
          {/* Adjust height as needed */}
          <Image src="/lizard.jpg" alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default ZoomSection;
