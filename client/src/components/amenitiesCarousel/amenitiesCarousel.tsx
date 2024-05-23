import { Swiper, SwiperSlide } from "swiper/react";
import "./eminities.css";
// Import Swiper styles
import "swiper/css";

import "./eminities.css";

// import required modules
import { Navigation } from "swiper/modules";
import {
  CircleChevronLeft,
  CircleChevronRight,
  CirclePlus,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function AmenitiesCarousel() {
  return (
    <div className="bg-black py-20 md:py-20">
      <div className="container font-semibold text-3xl md:text-4xl text-white">
        <div className="md:w-4/5 m-auto md:text-4xl text-3xl leading4 font-semibold">
          Discover Exceptional Amenities at Satvika Galaxy.
        </div>
      </div>
      <div className="relative pt-10">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          noSwiping={true}
          noSwipingClass="swiper-no-swiping"
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          className="swiper-no-swiping"
        >
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl swiper-no-swiping">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">
                Kids Play Area
              </div>
              <div className="w-[100%] text-sm text-left pt-2">
                A vibrant, safe play space with swings, slides, climbing frames,
                and soft zones, supervised for children&apos;s fun and parents
                peace.
              </div>

              <Dialog>
                <DialogTrigger className="w-6 flex justify-around ml-auto mt-2">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl swiper-no-swiping">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">Spa</div>
              <div className="w-[100%] text-sm text-left pt-2">
                A luxurious sanctuary offering massages, facials, and body
                treatments by skilled therapists using premium products for
                holistic rejuvenation.
              </div>

              <Dialog>
                <DialogTrigger className="mt-2 w-6 flex justify-around ml-auto">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">
                Swimming Pool
              </div>
              <div className="w-[100%] text-sm text-left pt-2">
                A sparkling, temperature-controlled pool perfect for laps and
                leisure, featuring lounge chairs, a sundeck, and stunning views.
              </div>

              <Dialog>
                <DialogTrigger className="mt-2 w-6 flex justify-around ml-auto">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent className="dark:bg-[#242426] border-0">
                  <DialogHeader className="bg-[#242426] text-white">
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl swiper-no-swiping">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">
                Shower Area
              </div>
              <div className="w-[100%] text-sm text-left pt-2">
                Modern shower facilities equipped with high-quality fixtures,
                spacious changing rooms, and lockers for post-gym or pool
                refreshment.
              </div>

              <Dialog>
                <DialogTrigger className="mt-2 w-6 flex justify-around ml-auto">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl swiper-no-swiping">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">Gym</div>
              <div className="w-[100%] text-sm text-left pt-2">
                A state-of-the-art fitness center with advanced equipment,
                personal trainers, and dedicated areas for cardio, strength
                training, and yoga.
              </div>

              <Dialog>
                <DialogTrigger className="mt-2 w-6 flex justify-around ml-auto">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl swiper-no-swiping">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">
                Meeting Room
              </div>
              <div className="w-[100%] text-sm text-left pt-2">
                A professional, well-equipped meeting space with high-speed
                internet, audio-visual aids, and comfortable seating for
                productive gatherings.
              </div>

              <Dialog>
                <DialogTrigger className="mt-2 w-6 flex justify-around ml-auto">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className=" m-4 md:m-0 max-w-[320px] md:max-w-[300] text-white bg-[#242426] p-6 rounded-3xl swiper-no-swiping">
            <div>
              <div style={{ width: "13%", marginBottom: "0.5em" }}>
                <img
                  src="https://www.apple.com/v/iphone-15-pro/c/images/overview/why-apple/icon_trade_in__d55z58jpfkq6_large_2x.png"
                  className="w-[20px]"
                />
              </div>
              <div className="w-[70%] text-xl font-semibold text-left">
                Guest House
              </div>
              <div className="w-[100%] text-sm text-left pt-2">
                Elegantly furnished guest accommodations offering comfort and ,
                ideal for visitors, featuring all necessary amenities for a
                pleasant stay.
              </div>

              <Dialog>
                <DialogTrigger className="mt-2 w-6 flex justify-around ml-auto">
                  <Image
                    src="/plus.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full"
                  ></Image>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>{" "}
          <div className="relative w-[80%] md:mt-14 mt-10 ">
            <div className=" absolute bottom-0  right-0 mt-10 mr-14  swiper-button-prev">
              <Image
                src="/arrow.svg"
                alt=""
                width={30}
                height={30}
                className="hover:opacity-100 cursor-pointer opacity-80"
              />
            </div>
            <div className=" absolute bottom-0 right-0 mt-10 mr-1 swiper-button-next">
              <Image
                src="/arrow.svg"
                alt=""
                width={30}
                height={30}
                className="rotate-180 hover:opacity-100 cursor-pointer opacity-80"
              />
            </div>
          </div>
        </Swiper>
        <div className="m-auto md:w-[50%] w-[90%] h-[0.75px] bg-white opacity-20 mt-40 "></div>
      </div>
    </div>
  );
}
