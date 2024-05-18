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

const AccordionCard = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // State to manage active accordion item

  const toggleAccordion = (value: any) => {
    setActiveAccordion(activeAccordion === value ? null : value); // Toggle accordion state
  };
  return (
    <div className="bg-[#161617] pt-20  md:pt-40 pb-20 bg-opacity-99">
      <div className="container  text-white gap-4 flex-col md:flex-row  text-left mb-10">
        <div className=" flex md:justify-between  text-white gap-4 flex-col md:flex-row  text-left mb-10">
          <h1
            className=" font-semibold text-3xl md:text-4xl text-[#86868b]"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Get the highlights
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
              Get the Brochure. <p className="inline text-blue-600">Download</p>
            </div>
          </div>
        </div>
        <Card className="px-8 py-8 bg-black border-0  text-white  md:rounded-3xl flex flex-col md:flex-row">
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
                className="font-semibold text-xl"
                onClick={() => toggleAccordion("my-value")}
              >
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Misplaced your iPhone? The latest Apple Watch models can show
                you its approximate distance and direction.18 To set up a group
                photo on your iPhone, join the group and use Apple Watch as a
                viewfinder to snap the shot. And when you take a call on your
                Apple Watch, just tap your iPhone to continue the conversation
                there.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className={`border-[#424545] ${
                activeAccordion === "my-value" ? "open" : ""
              }`}
            >
              <AccordionTrigger
                className="font-semibold text-xl"
                onClick={() => toggleAccordion("my-value")}
              >
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#424545]">
              <AccordionTrigger className="font-semibold text-xl">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-[#424545]">
              <AccordionTrigger className="font-semibold text-xl">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="p-16">
            <img
              src="https://www.apple.com/in/iphone-15-pro/images/overview/ecosystem/airpods__ew23qced7pkm_large_2x.jpg"
              width={600}
              height={500}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AccordionCard;
