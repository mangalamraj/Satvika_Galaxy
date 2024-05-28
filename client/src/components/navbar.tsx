"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useModal } from "@/app/providers/modalProvider";

const Navbar = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isPhoneValid, setPhoneValid] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="sticky top-0 z-50 h-20 w-full items-center backdrop-blur shadow-sm px-2 flex justify-between bg-black">
      <div className="flex justify-between container">
        <div className="font-semibold text-xl md:text-2xl">
          <Image src="/Logo3.svg" alt="" width={150} height={100} />
        </div>
        <div className="flex items-center text-white gap-4">
          <Link
            href="https://satvikagroup.in"
            className="hidden md:block hover:underline cursor-pointer"
          >
            Company Site
          </Link>
          <Link
            href="#id"
            className="hidden md:block hover:underline cursor-pointer"
          >
            Icon Tower
          </Link>
          <div>
            <Button
              onClick={openModal}
              className="rounded-3xl w-[150px] text-xs md:w-full text-white bg-[#135de8] hover:bg-white hover:text-black font-semibold md:text-sm"
            >
              Download Brochure
            </Button>

            {isModalOpen && (
              <div
                id="myModal"
                className="container absolute pt-36 inset-0 flex items-center justify-center z-50"
                role="dialog"
                style={{ display: "block" }}
              >
                <div
                  ref={modalRef}
                  className=" bg-[#373A40] p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
                >
                  <div className="flex justify-between items-center border-b-[0.3px] border-gray-100  border-opacity-40  pb-3">
                    <h3 className="text-lg font-medium text-white">
                      Download Your Brochure
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white"
                      onClick={closeModal}
                    >
                      <X />
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-300 text-sm">
                      Please fill the form below.
                    </p>
                    <form
                      method="POST"
                      action="https://script.google.com/macros/s/AKfycbyOo88NnUZM7NWV5O7rHX3NepikW_utM5Qz4L4N8CuNNilDbw0XiYInPehw6ErxIyOX/exec"
                      target="hidden_iframe"
                      className="mt-4"
                      name="brochure-form"
                      onSubmit={() => {
                        toast.success("Application sent. ✨", {
                          position: "bottom-center",
                        });
                        setTimeout(() => {
                          window.open("/brochure.pdf", "_blank");
                          closeModal();
                        }, 1000);
                      }}
                    >
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-2 mt-1  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your name"
                          name="name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phoneNumber"
                          className="w-full p-2 mt-1  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your phone number"
                          required
                        />
                        {!isPhoneValid && (
                          <p className="text-red-500 text-sm mt-1">
                            Please enter a valid 10-digit phone number.
                          </p>
                        )}
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300">
                          Email ID
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 mt-1  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="purpose"
                          className="block text-gray-300"
                        >
                          Purpose
                        </label>
                        <select
                          id="purpose"
                          name="purpose"
                          className="w-full p-2 mt-1  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Interested in Buying">
                            Interested in Buying
                          </option>
                          <option value="Real Estate Agent">
                            Real Estate Agent
                          </option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        value="Submit"
                        className="bg-blue-600 rounded-3xl hover:bg-blue-700 text-white font-bold py-2 px-8"
                        name="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <iframe
                  name="hidden_iframe"
                  id="hidden_iframe"
                  style={{ display: "none" }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
