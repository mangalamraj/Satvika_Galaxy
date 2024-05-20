"use client";
import { CircleX, MoveRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Banner = () => {
  const [close, setClose] = useState("");

  function handleOnClick() {
    setClose("none");
  }

  return (
    <div
      className=" w-full z-49 text-white bg-[#161617] flex items-center justify-center py-2"
      style={{ display: close }}
    >
      <div className="text-xs font-normal flex items-center gap-2 m-auto tracking-wide">
        Book easy site visit. On WhatsApp.{" "}
        <Link
          href="https://wa.link/amf5gt"
          target="_blank"
          className="inline text-blue-600"
        >
          BOOK NOW
        </Link>{" "}
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
