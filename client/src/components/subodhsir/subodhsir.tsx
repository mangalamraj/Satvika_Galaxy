import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const SubodhSir = () => {
  return (
    <div className=" bg-black md:py-20  py-20 bg-opacity-99">
      <div className="container" id="testomonials">
        <Card className="flex gap-4 flex-col xl:flex-row border-0  text-white  md:p-20 p-8 py-10">
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
              <div className="text-base md:font-semibold font-semibold text-justify md:leading-tight leading-none">
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
      </div>
    </div>
  );
};

export default SubodhSir;