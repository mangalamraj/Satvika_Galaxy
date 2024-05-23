import Link from "next/link";
import { Button } from "../ui/button";

const Downloads = () => {
  return (
    <div className="conatainer pb-10 md:py-20 bg-black text-white" id="id">
      <div className="md:w-3/4 m-auto">
        <img
          width={300}
          height={300}
          alt=""
          src="/down.svg"
          className="pb-5 m-auto"
        />
        <div className="container text-center md:text-6xl text-3xl leading4 font-semibold">
          <p className="text-3xl">Official Documents</p>
        </div>
        <div className=" container text-center text-[#86868b] text-xl md:text-2xl font-semibold mt-2 mb-6">
          RERA Approved documents at your convenience.
        </div>
        <div className="container md:w-[80%] w-full flex justify-center md:gap-10 gap-2 flex-col md:flex-row">
          <Button className="rounded-3xl   text-xs  md:w-full text-white bg-[#135de8] hover:bg-white hover:text-black font-semibold md:text-sm">
            <Link href="/floorplans.pdf" target="_blank">
              Floorplans
            </Link>
          </Button>

          <Button className="rounded-3xl   text-xs  md:w-full text-white bg-[#135de8] hover:bg-white hover:text-black font-semibold md:text-sm">
            <Link href="/specification.pdf" target="_blank">
              Specifications
            </Link>
          </Button>
        </div>
        <div className="container md:p-0 text-xs font-medium text-center mt-6 w-full  md:w-[45%] m-auto text-[#86868b]">
          Disclaimer: All downloads provided on this website are for
          informational purposes only. Users are responsible for verifying the
          accuracy and suitability of the content for their intended use.
        </div>
      </div>
    </div>
  );
};

export default Downloads;
