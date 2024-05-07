"use client";
import { CircleX, MoveRight } from "lucide-react";
import { useState } from "react";

const Banner = () => {
  const [close, setClose] = useState("");

  function handleOnClick() {
    setClose("none");
  }

  return (
    <div
      className="fixed w-full z-49 text-white bg-[#202022] flex items-center justify-center py-2"
      style={{ display: close }}
    >
      <div className="text-xs font-normal flex items-center gap-2 m-auto tracking-wide">
        Book easy site visit. On WhatsApp.{" "}
        <p className="inline text-blue-600">BOOK NOW</p>{" "}
        <div>
          <MoveRight className="w-5" />
        </div>
      </div>
      {/* <CircleX
      onClick={handleOnClick}
      className="w-5 flex align-middle m-1 md:mr-6 cursor-pointer hover:opacity-80"
    /> */}
    </div>
  );
};

export default Banner;
