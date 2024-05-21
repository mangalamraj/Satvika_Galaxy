import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./feature.css";

const FeatureComponent2 = () => {
  return (
    <div className=" bg-black md:pt-32 pt-20 md:pb-10 bg-opacity-99">
      <div className="container">
        <Card className="  bg-[#161617] border-0  text-white ">
          <div className="container text-3xl bgimage md:text-5xl font-semibold md:p-20 py-40  m-auto ">
            Designed to{" "}
            <p className="mt-2 inline md:block">make a difference.</p>
          </div>

          <div className="w-[90%] m-auto  md:py-20 py-10 text-justify">
            What matters to you matters to Apple too. From privacy protections
            that give you more control over your data. To using more recycled
            materials that minimise environmental impact. To creating built‑in
            features that make iPhone accessible to all.What matters to you
            matters to Apple too. From privacy protections that give you more
            control over your data. To using more recycled materials that
            minimise environmental impact. To creating built‑in features that
            make iPhone accessible to all.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureComponent2;
