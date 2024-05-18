import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FeatureCard = () => {
  return (
    <div className="bg-[#161617] md:py-40 py-20 bg-opacity-99">
      <div className="  text-white gap-4 flex-col md:flex-row  text-left mb-10">
        <div className="container flex md:justify-between  text-white gap-4 flex-col md:flex-row  text-left mb-10">
          <h1
            className=" font-semibold text-3xl md:text-4xl text-[#86868b]"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Get the highlights
          </h1>
          <div className="flex  md:gap-5 flex-col gap-2  md:flex-row md:items-center">
            <div
              className="text-sm font-medium md:text-center text-left  "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Get the video. <p className="inline text-blue-600">YouTube</p>
            </div>
            <div
              className="text-sm font-medium  md:items-center text-left "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="800"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Get the Brochure. <p className="inline text-blue-600">Download</p>
            </div>
          </div>
        </div>
        <div className="md:container">
          <Card className=" bg-black border-0  text-white  md:rounded-3xl  py-20">
            <div className="px-8 flex m-auto justify-between md:w-1/2 gap-8">
              <div className=" md:text-center ">
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/contrast/iphone_15pro__3nx4u28gc026_large_2x.jpg"
                  className="w-[200px]"
                />
                <div className="font-semibold text-xl my-5">iPhone 15 Pro</div>
                <div className="mb-10"> From ₹134900.00*</div>
                <div className="flex font-semibold text-xs justify-between w-[85%] flex-col md:flex-row  md:m-auto">
                  <div className="mb-10">Currently viewing</div>
                  <div>Buy</div>
                </div>
              </div>

              <div className=" md:text-center ">
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/contrast/iphone_15pro__3nx4u28gc026_large_2x.jpg"
                  className="w-[200px]"
                />
                <div className="font-semibold text-xl my-5">iPhone 15 Pro</div>
                <div className="mb-10"> From ₹134900.00*</div>
                <div className="flex font-semibold text-xs justify-between w-[85%] flex-col md:flex-row  md:m-auto">
                  <div className="mb-10">Currently viewing</div>
                  <div>Buy</div>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] w-[90%] h-[0.5px] m-auto bg-[#424245] my-10"></div>
            <div className=" w-[90%] flex justify-between   m-auto items-start md:w-[296px] ">
              <div className="w-1/2 mt-5">
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/contrast/icon_a17__dlzu2u0shq2q_large_2x.png"
                  width={50}
                  className=""
                ></img>
              </div>

              <div className="mr-auto  md:mr-0 mt-5">
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/contrast/icon_a17__dlzu2u0shq2q_large_2x.png"
                  width={50}
                  className="ml-5 md:ml-0"
                ></img>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
