import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const SubodhSir = () => {
  return (
    <div className=" bg-black md:py-[80px] pb-20 pt-20 bg-opacity-99">
      <div className="" id="testomonials">
        {/* <Card className="flex gap-4 flex-col xl:flex-row border-0  text-white  md:p-20 p-8 py-10">
          <div className="md:w-1/2">
            <img src="subodhsir.png" className="w-[350px] h-[400px]" />
          </div>
          <div className="w-full">
            <div className="text-black text-2xl md:text-4xl font-bold py-4">
              A message from <p className="p-0 -m-1">our director</p>
            </div>
            <div className="h-[2px] rounded-2xl w-[100%] bg-[#86868b] bg-opacity-30 mb-2"></div>
            <div className="text-black text-xl md:text-xl font-bold">
              Subodh Verma
              <p className="font-bold text-sm">Managing Director</p>
              <p className="font-bold text-sm pb-4">SATVIKA GROUP</p>
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
        </Card> */}
        {/* <img src="/Subodh_Sir.png" /> */}
        <div className="container  flex justify-between max-h-[741px] xl:max-h-[430px]">
          <div className="flex rounded-3xl flex-col-reverse xl:flex-row items-center bg-[#161617]">
            <div className="text-white xl:p-10 pt-10 xl:w-[60%] p-4">
              <h2 className="md:text-4xl text-3xl font-semibold pb-2">
                A message from our Managing director
              </h2>
              <p className="md:text-2xl text-xl font-semibold  ">
                Subodh Verma
              </p>
              <p className="pb-4 text-xs">MANAGING DIRECTOR, SATVIKA GROUP</p>
              <p className="text-sm font-semibold text-justify tracking-tighter pb-3">
                We believe a home is where dreams take root. Satvika Galaxy is
                designed with your comfort and well-being in mind, featuring
                top-notch amenities and serene spaces to elevate your living
                experience. Our dedication to quality and service ensures that
                you feel valued and secure every day.
              </p>
              <p className="text-sm font-semibold text-justify tracking-tighter">
                We are committed to creating a community where you feel truly at
                home. Explore our website, envision the possibilities, and join
                us in a place where your lifestyle and aspirations thrive.
              </p>

              <p className="text-sm pt-2">
                <div className="text-[#86868b]">
                  visit our website :{" "}
                  <Link
                    className="text-blue-600"
                    href="https://satvikagroup.in/"
                    target="_black"
                  >
                    satvikagroup.in
                  </Link>
                </div>
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
              <img
                src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=3446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="border-r-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubodhSir;
