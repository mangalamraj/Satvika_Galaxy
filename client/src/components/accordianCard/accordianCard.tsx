"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import "./accordian.css";
import Link from "next/link";

const AccordionCard = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // State to manage active accordion item

  const toggleAccordion = (value: any) => {
    setActiveAccordion(activeAccordion === value ? null : value); // Toggle accordion state
  };
  return (
    <div className="bg-[#161617] pt-20  md:pt-40 pb-20 bg-opacity-99">
      <div className="md:container  text-white gap-4 flex-col md:flex-row  text-left mb-10">
        <div className="container md:p-0 flex md:justify-between  text-white gap-4 flex-col md:flex-row  text-left mb-10">
          <h1
            className=" font-semibold text-3xl md:text-4xl text-[#86868b]"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            FAQs
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
              Get the Brochure.{" "}
              <Link
                href="/brochure.pdf"
                target="_blank"
                className="inline text-blue-600"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
        <Card className="px-8 py-8 bg-black border-0  text-white  md:rounded-3xl flex flex-col xl:flex-row">
          <Accordion
            type="single"
            collapsible
            className=" w-full md:p-16"
            defaultValue="my-value"
          >
            <AccordionItem
              value="my-value"
              className={`border-[#424545] ${
                activeAccordion === "my-value" ? "open" : ""
              }`}
            >
              <AccordionTrigger
                className="font-semibold text-xl text-left"
                onClick={() => toggleAccordion("my-value")}
              >
                Is the project RERA registered?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we are RERA approved, RERA no.
                BRERAP12464-001/194/R-1672/2024
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className={`border-[#424545] ${
                activeAccordion === "my-value" ? "open" : ""
              }`}
            >
              <AccordionTrigger
                className="font-semibold text-xl text-left"
                onClick={() => toggleAccordion("my-value")}
              >
                How can I get a site visit?
              </AccordionTrigger>
              <AccordionContent>
                We are more than happy to welcome you, contact us at
                <p className="inline text-blue-600">
                  8271424888/8271423888
                </p>{" "}
                and schedule a visit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#424545]">
              <AccordionTrigger className="font-semibold text-xl text-left">
                How can I enquire and get the details?
              </AccordionTrigger>
              <AccordionContent>
                Contact us at{" "}
                <p className="inline text-blue-600">8271424888/8271423888</p>,
                you can email us your queries at satvika.galaxy@gmail.com
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#424545]">
              <AccordionTrigger className="font-semibold text-xl text-left">
                What is the location and connectivity of the project?
              </AccordionTrigger>
              <AccordionContent>
                Satvika Galaxy is strategically located in Patna, ensuring youre
                never far from essential services. Just as a galaxy is a
                connected system of stars, we ensure youre connected to all
                facets of urban living. Please refer to the map displayed and
                the brochure for utmost clarity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-[#424545]">
              <AccordionTrigger className="font-semibold text-xl text-left">
                Available amenities detailed information, please?
              </AccordionTrigger>
              <AccordionContent>
                There are numerous amenities, some of the highlighted ones are-
                Gyms, an infinity pool, and gardens. Please go through our
                brochure for a detailed list of amenities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-[#424545]">
              <AccordionTrigger className="font-semibold text-xl text-left">
                Is this a sustainable project?
              </AccordionTrigger>
              <AccordionContent>
                We have tried our best to design the project in a way
                sustainable manner. We have kept our construction on 20% of the
                land and the rest is gardens and open areas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="p-16 md:pt-24">
            <img src="/faq.svg" width={600} height={500} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AccordionCard;
