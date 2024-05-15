import Image from "next/image";

const SecondaryCTA = () => {
  return (
    <div className="conatainer py-40 bg-black text-white">
      <div className="md:w-3/4 m-auto">
        <Image
          width={200}
          height={200}
          alt=""
          src="/Logo3.svg"
          className="pb-10 md:pb-14 m-auto"
        />
        <div className="text-center md:text-6xl text-4xl leading4 font-semibold">
          A17 Pro chip. <p>A monster win for gaming.</p>
        </div>
        <div className=" container text-center text-[#86868b] text-2xl font-semibold my-10">
          It’s here. The biggest redesign in the history of Apple GPUs.
        </div>
        <div className="container md:flex justify-center gap-20 text-[#86868b]">
          <div className="flex flex-col gap-2 md:w-[300px] text-base font-semibold">
            <div className="">
              A17 Pro is an entirely new class of iPhone chip that delivers our
              <p className="inline text-white">
                best graphics performance by far.
              </p>
            </div>
            <div className="pb-4">
              Mobile{" "}
              <p className="inline text-white">
                games will look and feel so immersive, with incredibly detailed
                environments and more realistic characters.
              </p>{" "}
              And with industry-leading speed and efficiency, A17 Pro takes fast
              and runs with it.
            </div>
          </div>
          <div className="text-base font-semibold">
            <p>New</p>
            <p className="text-4xl font-semibold text-white">Pro-Glass GPU</p>
            <p>With Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCTA;
