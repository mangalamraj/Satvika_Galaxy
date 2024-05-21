import Image from "next/image";
import { useEffect } from "react";

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
    <div className="relative bg-black">
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/948653095?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="SATVIKA GALAXY - Epitome of luxurious flats in Patna"
        ></iframe>
      </div>
      <div className="relative md:w-[68%] m-auto">
        <div className="flex text-white">
          <Image
            src="/youtube.svg"
            alt="YouTube Icon"
            className="absolute bottom-14 left-0 p-4 w-[100px]"
            width={70}
            height={70}
          />
          <div className="absolute text-sm bottom-3 left-0 p-4 my-3 font-semibold">
            Galaxy Walkthrough
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
