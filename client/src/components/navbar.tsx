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
    <div className="sticky top-0 z-50  h-16 w-full items-center backdrop-blur shadow-sm  px-2 flex justify-between bg-black">
      <div className="container font-semibold text-xl md:text-2xl">
        <Image src="/Logo4.png" alt="" width={100} height={100}></Image>
      </div>
      <div className="md:flex justify-between gap-4 bg-black hidden ">
        <NavigationMenu className="bg-black">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inherit text-white hover:bg-black hover:text-white focus:bg-inherit data-[active]:bg-black data-[state=open]:bg-black ">
                <div>About Us</div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="w-full flex flex-col align-middle">
                  <div className="p-2 w-[200px]">The company</div>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <div className="p-2 w-[200px]">Satvika Plus</div>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <div className="p-2 w-[200px]">Gallery</div>
                </NavigationMenuLink>
                <div className="p-2 w-[200px]">Faq</div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inherit text-white hover:bg-black hover:text-white focus:bg-inherit data-[active]:bg-black data-[state=open]:bg-black ">
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="w-full flex flex-col align-middle">
                  <div className="p-2 w-[200px]">Project 1</div>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <div className="p-2 w-[200px]">Project 2</div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inherit text-white hover:bg-black hover:text-white focus:bg-inherit data-[active]:bg-black data-[state=open]:bg-black ">
                Highlighted Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <NavigationMenuLink className="w-full flex flex-col align-middle">
                    <div className="p-2 w-[200px]">Galaxy Tower</div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <div className="p-2 w-[200px]">Heights</div>
                  </NavigationMenuLink>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {" "}
              <NavigationMenuTrigger className="bg-inherit text-white hover:bg-black hover:text-white focus:bg-inherit data-[active]:bg-black data-[state=open]:bg-black ">
                Contact
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
        <div></div>
      </div>
    </div>
  );
};
export default Navbar;
