import Image from "next/image";
import Video from "next-video";
import video from "/videos/v1.m4v";
const VideoComponent = () => {
  return (
    <div className=" relative bg-black">
      <Video src={video} className="m-auto"></Video>
      <div className="relative md:w-[68%] m-auto">
        <div className="flex text-white">
          <Image
            src="/youtube.svg"
            alt=""
            className="absolute bottom-14 left-0 p-4 w-[100px]"
            width={70}
            height={70}
          />
          <div className="text-white absolute text-sm bottom-3 left-0 p-4 my-3 font-semibold">
            Galaxy Walkthrough
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
