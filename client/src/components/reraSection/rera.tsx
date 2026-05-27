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

        {/* Line Division */}
        <div className="m-auto md:w-[80%] w-[90%] h-[0.75px] bg-white opacity-20 my-16"></div>

        {/* Heading */}
        <div className="container text-center md:text-5xl text-3xl font-semibold leading-tight">
          <h2>Environmental Clearance Compliance</h2>
        </div>

        {/* Paragraph */}
        <div className="container text-center text-[#86868b] text-base md:text-lg font-medium mt-6 mb-12 max-w-4xl m-auto leading-relaxed px-4">
          At Satvika Galaxy, your peace of mind and safety are our utmost priorities. Our development has been meticulously vetted and fully certified by leading national and state authorities. We operate in absolute compliance with the Bihar State Pollution Control Board, the Ministry of Environment, Forest and Climate Change (MoEF, GOI), and the Fire Safety Department. With key clearances like the Airport Authority of India NOC, and professional accreditations from NABET and QCI, we ensure a secure, legally immaculate, and environmentally responsible community built to protect your family and your investment.
        </div>

        {/* Image */}
        <div className="flex justify-center px-4 mb-16">
          <img
            alt="Environmental Compliance Logos"
            src="/comp-logo.png"
            className="w-full max-w-[650px] h-auto object-contain"
          />
        </div>

        {/* Modern Open-Ended Table */}
        <div className="w-full md:w-[90%] m-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Document Name</th>
                  <th className="py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  { name: "Environmental Clearance Compliance Report - June 2025", link: "/Satvika%20EC%20Compliance%20June%202025.pdf" },
                  { name: "Environmental Clearance Compliance Report - June 2024", link: "/Satvika%20EC%20Compliance%20Jun%202024.pdf" },
                  { name: "Environmental Clearance Acknowledgment - June 2025", link: "/Ackn_Satvika%20June%2025.pdf" },
                  { name: "Environmental Clearance Acknowledgment - June 2024", link: "/Ackn_Satvika%20June%2024.pdf" }
                ].map((doc, idx) => (
                  <tr key={idx} className="hover:bg-zinc-950/40 transition-colors group">
                    <td className="py-5 pr-4 text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {doc.name}
                    </td>
                    <td className="py-5 text-right whitespace-nowrap">
                      <Button className="rounded-3xl text-xs text-white bg-[#135de8] hover:bg-white hover:text-black font-semibold transition-all">
                        <Link href={doc.link} target="_blank">
                          View Document
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RERA;
