import Link from "next/link";
import { Button } from "../ui/button";

const RERA = () => {
  return (
    <div
      className="conatainer pb-20 md:py-20 pt-20 bg-black text-white"
      id="id"
    >
      <div className="md:w-3/4 m-auto">
        <img
          width={300}
          height={300}
          alt=""
          src="/doc.svg"
          className="pb-10 m-auto"
        />
        <div className="container text-center md:text-6xl text-3xl leading4 font-semibold">
          <p className="text-3xl">Stay up to date</p>
        </div>
        <div className=" container text-center text-[#86868b] text-xl md:text-2xl font-semibold mt-2 mb-6 ">
          Click the link for RERA Document or Scan QR
        </div>
        <div className="container md:w-[80%] md:mt-10 w-full flex justify-center md:gap-10 gap-2 flex-col md:flex-row">
          <img
            alt=""
            src="/reraap.svg"
            className="pb-5 m-auto w-[300px] md:w-[400px]"
          />
        </div>
        <div className="container md:p-0 text-xs font-semibold text-center mt-6 w-full  md:w-[45%]  text-blue-600">
          <Link
            href="https://oldprm.bihar.gov.in/searchProject/RERAP203312464_001"
            target="_blank"
          >
            www.oldprm.bihar.gov.in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RERA;
