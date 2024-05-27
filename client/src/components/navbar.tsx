"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
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
                className="fixed xl:mt-4 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                role="dialog"
                style={{ display: "block" }}
              >
                <div
                  ref={modalRef}
                  className="bg-[#161617] p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
                >
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
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
                    <form onSubmit={handleSubmit} className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300">
                          Email ID
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full p-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="interested">
                            Interested in Buying
                          </option>
                          <option value="broker">Broker</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        className="bg-blue-600 rounded-3xl hover:bg-blue-700 text-white font-bold py-2 px-8"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
