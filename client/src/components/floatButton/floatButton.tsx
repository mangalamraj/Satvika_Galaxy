"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./button.css";

const FloatButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`fixed bottom-4 w-full flex items-center justify-center z-50 ${isVisible ? "fade-up" : ""}`}
    >
      <div className="flex bg-[#424545] bg-opacity-80 p-2 gap-2 rounded-3xl px-3">
        <div className="text-white font-semibold text-sm my-auto">
          More on design & display
        </div>
        <Image src="/whatsapp.png" alt="WhatsApp icon" width={25} height={25} />
      </div>
    </div>
  );
};

export default FloatButton;
