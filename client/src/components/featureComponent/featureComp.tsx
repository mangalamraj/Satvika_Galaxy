import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const FeatureComponent = () => {
  return (
    <div className=" bg-black md:py-20  py-20 bg-opacity-99">
      <div className="container">
        <Card className="container bg-[#161617] border-0  text-white  md:p-20 p-8 py-10">
          <div className="text-3xl md:text-5xl font-semibold  m-auto">
            Designed to{" "}
            <p className="mt-2 inline md:block">make a difference.</p>
          </div>
          <div className=" h-[0.5px] m-auto bg-[#424245] my-10"></div>
          <div className="md:flex justify-between">
            <div className="md:w-[40%]">
              What matters to you matters to Apple too. From privacy protections
              that give you more control over your data. To using more recycled
              materials that minimise environmental impact. To creating built‑in
              features that make iPhone accessible to all.
            </div>
            <div className="md:w-[30%] mt-4">
              The internal structural frame of iPhone 15 Pro has
              <p className="text-3xl mt-2 font-semibold">
                100% recycled aluminium
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureComponent;
