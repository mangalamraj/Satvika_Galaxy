import Image from "next/image";
const CTA = () => {
  return (
    <main className="relative bg-black text-white py-40 ">
      <div className="container flex flex-col items-center">
        <Image
          width={200}
          height={200}
          alt=""
          src="/Logo3.svg"
          className="pb-10 md:pb-14"
        />
        <div className="container absolute top-60 md:w-[100%] w-full md:pb-7 pb-3 opacity-75">
          <Image
            src="/1.svg"
            width={0}
            height={0}
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-3xl md:text-5xl text-white md:text-center md:w-[80%] m-auto">
            benchmark development that exceeds expectations
          </div>
          <div className="flex flex-col gap-2 md:text-center">
            <div className="flex font-semibold text-[#86868b] flex-col gap-2 text-lg md:text-xl">
              from SATVIKA Group
            </div>
            <div className="text-sm font-medium ">
              Know more about the developers.{" "}
              <p className="inline text-blue-600">Satvikagroup.in</p>
            </div>
          </div>
          <div className="md:w-[70%] md:m-auto">
            <img src="/Hands.png" className="w-full md:h-[450px]" />
          </div>
          <div className="text-sm font-medium  md:m-auto">
            Explore projects.{" "}
            <p className="inline text-blue-600">Satvikagroup.in</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CTA;
