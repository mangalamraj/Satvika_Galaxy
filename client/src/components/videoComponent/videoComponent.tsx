import Image from "next/image";
const VideoComponent = () => {
  return (
    <div className="relative bg-black">
      <video src="/SatvikaGalaxy-1.mp4" className="m-auto"></video>
      <div className="relative md:w-[68%] m-auto">
        <div className="flex text-white">
          <Image
            src="/youtube.png"
            alt=""
            className="absolute bottom-14 left-0 p-4 w-[70px]"
            width={70}
            height={70}
          />
          <div className="absolute bottom-12  left-12 p-4 my-3 text-xl font-semibold">
            YouTube
          </div>
          <div className="text-white absolute bottom-3 left-0 p-4 my-3 font-semibold">
            Galaxy Walkthrough
          </div>
        </div>
        <Image
          src="/play-button.png"
          alt=""
          className="absolute bottom-4 right-0 p-4"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default VideoComponent;
