"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const ProgressVideo = () => {
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
    <div className="bg-[#0F2F44] pt-20 md:pt-0">
      <div className="relative bg-[#0F2F44]" id="video">
        <div
          className="progress-video"
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1008017010?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Galaxy Site Update - Published Date 4th August 2024"
          ></iframe>
        </div>
      </div>
      {/* <div className="container text-[#86868b] md:px-0 text-xs font-medium text-center mt-10 pb-10 w-full md:w-[45%] m-auto">
        Stay uptodate with quarterly site progress video. Please check the
        mentioned date of publish carefully. RERA No :
        BRERAP12464-001/194/R-1672/2024.
      </div> */}
    </div>
  );
};

export default ProgressVideo;
