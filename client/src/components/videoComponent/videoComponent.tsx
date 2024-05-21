import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const VideoComponent = () => {
  useEffect(() => {
    // Dynamically load the Vimeo player script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#161617]">
      <div className="relative bg-black">
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/948662122?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="SATVIKA Galaxy Apartment Trailer | 3BHK, 4BHK Luxurious Flats in Patna"
          ></iframe>
        </div>
      </div>
      <div className="container md:p-0 text-xs font-medium text-center mt-10 w-full md:w-[45%] m-auto text-white">
        SATVIKA Galaxy beckons you to embark on a cosmic voyage, where supernova
        amenities await to dazzle you with unparalleled exclusivity, comfort,
        and convenience.
      </div>
    </div>
  );
};

export default VideoComponent;
