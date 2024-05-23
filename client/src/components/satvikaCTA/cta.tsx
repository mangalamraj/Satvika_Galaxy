import Image from "next/image";
import Link from "next/link";
const CTA = () => {
  return (
    <main className="relative bg-black text-white py-20 md:py-40 ">
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
          <div className="font-semibold text-2xl md:text-5xl text-white text-center md:w-[100%] m-auto">
            A company known for it’s benchmark development that exceeds
            expectations.
          </div>
          <div className="flex flex-col gap-2 md:text-center">
            <div className="flex font-semibold text-[#86868b] flex-col gap-2 text-lg md:text-xl">
              Intorducing SATVIKA Galaxy
            </div>
            <div className="text-sm font-medium ">
              Know more about the developers.{" "}
              <Link
                href="https://satvikagroup.in/"
                className="inline text-blue-600"
                target="_blank"
              >
                Satvikagroup.in
              </Link>
            </div>
          </div>
          <div className="md:w-[70%] md:m-auto">
            <img src="/Hands.png" className="w-full md:h-[450px]" />
          </div>
          <div className=" md:pb-20 pb-4  text-sm font-semibold  w-full  md:w-[70%] m-auto text-white  text-justify">
            Our innovative construction techniques and attention to detail
            ensure every project is a masterpiece of quality and style. Choose
            Satvika Group for exceptional, forward-thinking homes that stand the
            test of time.
            <br />
            <br />
            Choosing Satvika Group means partnering with a dedicated team that
            turns your vision into reality. From concept to completion, we work
            closely with you, using the finest materials and latest technologies
            to perfect every detail. Our homes blend timeless elegance with
            modern innovation, incorporating energy efficiency, smart home
            technology, and sustainable practices.
          </div>
          <div className=" md:p-0 w-full flex justify-center align-middle items-center">
            <img src="/4.1.svg" className="w-1/4 m-auto" />
            <img src="/4.2.svg" className="w-1/4 m-auto" />
            <img src="/4.3.svg" className="w-1/4 m-auto" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CTA;
