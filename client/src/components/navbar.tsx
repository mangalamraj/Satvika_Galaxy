"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./modeToggler";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useKeenSlider } from "keen-slider/react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-20 w-full items-center backdrop-blur shadow-sm px-2 flex justify-between bg-black">
      <div className=" flex justify-between container">
        <div className=" font-semibold text-xl md:text-2xl">
          <Image src="/Logo3.svg" alt="" width={150} height={100}></Image>
        </div>

        <div className=" flex items-center text-white gap-4  ">
          <div className="hidden md:block">Company Site</div>
          <div className="hidden md:block">Icon Tower</div>

          <div>
            <Button className="rounded-3xl text-white bg-[#135de8] hover:bg-white hover:text-black font-semibold text-sm">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
