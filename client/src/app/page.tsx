import Slider from "@/components/slider";
import Image from "next/image";
import "./home.css";
// import { particlesJS } from "particles.js";
export default function Home() {
  // particlesJS.load("particles-js", "assets/particles-config.json", function () {
  //   console.log("callback - particles.js config loaded");
  // });
  return (
    <main className="bg-black flex flex-col justify-center items-center pt-20 pb-10 background">
      {" "}
      <div className="md:w-1/6 w-52 pb-7">
        <Image
          src="./gALAXY.svg"
          width={0}
          height={0}
          className="w-full h-full"
          alt=""
        ></Image>{" "}
      </div>
      <div className="md:w-40 w-40 pb-12">
        <Image
          src="./LIVING .svg"
          width={0}
          height={0}
          className="w-full h-full"
          alt=""
        ></Image>
      </div>
      <div className="container md:w-[90%] w-full md:pb-7 pb-3 opacity-75">
        <Image
          src="./1.svg"
          width={0}
          height={0}
          className="w-full h-full"
          alt=""
        ></Image>
      </div>
      <div className="container md:w-[88%] w-full">
        <Image
          src="./2.svg"
          width={0}
          height={0}
          className="w-full h-full pb-7"
          alt=""
        ></Image>
      </div>
    </main>
  );
}
