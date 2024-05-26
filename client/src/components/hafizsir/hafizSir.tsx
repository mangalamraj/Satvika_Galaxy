import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./hafez.css";
import image from "../../../public/hafeez.png";
import Link from "next/link";

const Hafeez = () => {
  return (
    <div className=" w-full bg-black">
      {/* <div className="container">
        <Card className="flex gap-4 flex-col xl:flex-row border-0  text-white bg-[#161617]  md:p-20 p-8 py-10">
          <div className="md:w-1/2">
            <img src="hafeez.png" className="w-[350px] h-[400px]" />
          </div>
          <div className="w-full text-white">
            <div className=" text-2xl md:text-4xl font-bold py-4">
              A message from <p className="p-0 -m-1">our director</p>
            </div>
            <div className="h-[2px] rounded-2xl w-[100%] bg-[#86868b] bg-opacity-30 mb-2"></div>
            <div className=" text-xl md:text-xl font-bold">
              Hafeez Group
              <p className="font-bold text-sm">Hafeez Group</p>
              <p className="text-sm md:text-base pb-4">HAFEEZ GROUP</p>
              <div className="text-sm md:text-base md:font-semibold font-semibold text-justify md:leading-tight leading-none">
                We believe a home is where dreams take root. Satvika Galaxy is
                designed with your comfort and well-being in mind, featuring
                top-notch amenities and serene spaces to elevate your living
                experience. Our dedication to quality and service ensures that
                you feel valued and secure every day.
                <p className="pt-4">
                  {" "}
                  We are committed to creating a community where you feel truly
                  at home. Explore our website, envision the possibilities, and
                  join us in a place where your lifestyle and aspirations
                  thrive.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div> */}
      {/* <img src="/hafez.png" className="container" /> */}
      <div className="container pb-20 flex justify-between ">
        <div className="flex rounded-xl flex-col-reverse xl:flex-row items-center bg-[#161617]">
          <div className="text-white xl:p-10 pt-10 xl:w-[60%] p-4">
            <h2 className="md:text-4xl text-3xl font-semibold pb-2">
              A message from our Design Architect
            </h2>
            <p className="md:text-2xl text-xl font-semibold md:pb-8 pb-4">
              Ar. Hafez Contractor
            </p>
            <p className="text-sm font-semibold text-justify tracking-tighter pb-3">
              Architecture is akin to a narrative, where the language of the
              landscape and built creation are used. Satvika Galaxy weaves a
              tale of how contemporary conveniences, adorned with regal
              elements, culminate in an exceptional living space.
            </p>
            <p className="text-sm font-semibold text-justify tracking-tighter">
              The grand elevation boasts an exquisite design, meticulous
              detailing, and impeccable craftsmanship, while the landscape is a
              masterpiece adorned with the stunning hues of nature and
              extraordinary privileges. Satvika Galaxy is poised to become the
              most distinguished residential address in Patna, transporting you
              to an epoch of royal luxury where lavishness is revered and the
              quality of life is unparalleled.
            </p>
            <p className="text-sm pt-2 text-blue-600">
              <Link href="https://www.hafeezcontractor.com/" target="_black">
                visit website
              </Link>
            </p>
            {/* <div className="flex justify-between w-[80%]">
              <div>
                <h4>10K+</h4>
                <p>COMPANIES</p>
              </div>
              <div>
                <h4>314</h4>
                <p>TEMPLATES</p>
              </div>
              <div>
                <h4>12M+</h4>
                <p>QUERIES</p>
              </div>
            </div> */}
          </div>
          <div className="background2 w-[100%] xl:w-[40%] border-r-xl">
            <img src="./hafeez.jpeg" className="border-r-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hafeez;
