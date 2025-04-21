"use client";

import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import { TbUserFilled } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [whoWeServeContent, setWhoWeServeContent] = useState(false);
  const [pages, setPages] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => {
      return prev ? false : true;
    });
    console.log(isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        // Adjust the threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`h-10 bg-[#4C5C6B] text-white w-full  flex justify-center items-center `}
      >
        <div className="w-full flex gap-2 cursor-pointer  max-w-screen-xl px-5  justify-end text-sm font-medium underline underline-offset-4 ">
          <TbUserFilled size={20} /> Sign In
        </div>
      </div>
      <div
        className={`z-50 w-full  bg-[#0E2337] text-white h-20  flex justify-center  ${
          isScrolled ? "fixed top-0" : ""
        }`}
      >
        {/* //Header for Desktop*/}

        <div className="hidden w-full  max-w-screen-xl px-5 lg:flex flex-wrap  items-center justify-between gap-2 ">
          <Link
            href="javascript:void(0)"
            className="text-2xl font-bold font-sans"
          >
            HOMFIX
          </Link>

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <Link href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </Link>
              </li>

              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <div>
                  <FlyoutLink href="#" FlyoutContent={SolutionsContent}>
                    Solutions
                  </FlyoutLink>
                </div>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <div>
                  <FlyoutLink href="#" FlyoutContent={WhoWeServeContent}>
                    Who We Serve
                  </FlyoutLink>
                </div>
              </li>

              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <FlyoutLink href="#" FlyoutContent={ServicesContent}>
                  Services
                </FlyoutLink>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/project"
                  className="hover:text-[#007bff]  block font-medium  text-[16px] "
                >
                 Our Project
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/floor-plan"
                  className="hover:text-[#007bff]  block font-medium  text-[16px] "
                >
                 Floor Plans
                </Link>
              </li>
            
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff]  block font-medium  text-[16px] "
                >
                 Cost Estimator
                </Link>
              </li>
           

              
            </ul>
          </div>

          <div className="flex  lg:max-lg:ml-auto  lg:space-x-6 ">
            <button className="px-4 py-2 flex items-center gap-2 rounded-md font-bold text-white border-2 border-slate-700 bg-slate-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              <RiChat1Line size={24} /> Let's Talk
            </button>
          </div>
        </div>

        {/* //Header for Mobile*/}

        <div className="lg:hidden mx-5 my-5 flex flex-wrap items-center justify-between gap-2 ">
          <button onClick={toggleMenu}>
            <FaBars size={20} />
          </button>
          <Link
            href="javascript:void(0)"
            className="text-2xl font-medium text-slate-700"
          >
            {/* <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' /> */}
            HOMFIX
          </Link>
          <button>
            <FaShoppingBasket size={23} />
          </button>
          <button>
            <FaRegUser size={18} />
          </button>

          {/* Sidebar */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={toggleMenu}
              ></div>
              <div className="relative bg-white w-1/2 min-w-[300px] h-full p-6 shadow-md overflow-auto">
                <button
                  className="fixed top-2 right-4 z-50 rounded-full bg-white p-3"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-slate-800"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <ul className="space-y-3">
                  <li className="mb-6">
                    <Link
                      href="javascript:void(0)"
                      className="text-2xl font-medium text-slate-700"
                    >
                      {/* <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' /> */}
                      HOTEL BOOKING
                    </Link>
                  </li>
                  <li className="border-b border-gray-300 py-3 px-3">
                    <Link
                      href="javascript:void(0)"
                      onClick={() => {
                        setWhoWeServeContent(!whoWeServeContent);
                      }}
                      className="flex justify-between items-center text-slate-700  font-medium text-[16px]"
                    >
                      Solutions{" "}
                      <span>
                        {" "}
                        {whoWeServeContent ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                    </Link>
                  </li>
                  {whoWeServeContent && (
                    <div className="">
                      <li className="border-b border-gray-300 py-2 px-3">
                        Hotel Option 1
                      </li>
                      <li className="border-b border-gray-300 py-2 px-3">
                        Hotel Option 1
                      </li>
                      <li className="border-b border-gray-300 py-2 px-3">
                        Hotel Option 1
                      </li>
                      <li className="border-b border-gray-300 py-2 px-3">
                        Hotel Option 1
                      </li>
                    </div>
                  )}
                  <li className=" border-b border-gray-300 py-3 px-3">
                    <Link
                      href="javascript:void(0)"
                      onClick={() => {
                        setPages(!pages);
                      }}
                      className="flex justify-between gap-1 items-center text-slate-700  font-semibold text-[18px]"
                    >
                      Pages{" "}
                      <span>{pages ? <FaAngleUp /> : <FaAngleDown />}</span>
                    </Link>
                  </li>
                  {pages && (
                    <div className="">
                      <li className="border-b border-gray-300 py-2 px-3">
                        Page Option 1
                      </li>
                      <li className="border-b border-gray-300 py-2 px-3">
                        Page Option 1
                      </li>
                      <li className="border-b border-gray-300 py-2 px-3">
                        Page Option 1
                      </li>
                      <li className="border-b border-gray-300 py-2 px-3">
                        Page Option 1
                      </li>
                    </div>
                  )}
                  <li className="border-b border-gray-300 py-3 px-3">
                    <Link
                      href="javascript:void(0)"
                      className=" text-slate-700  font-semibold text-[18px]"
                    >
                      Contact Us
                    </Link>
                  </li>
             
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div
      className="z-[1000] relative h-fit w-fit"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={"/"}
        className="relative flex items-center gap-1 font-medium hover:text-[#007bff] text-[16px]"
      >
        {children}{" "}
        <span>
          {open ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}
        </span>
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="bg-[#007bff] absolute h-[3px] -bottom-3 -left-2 -right-2 rounded-full origin-left transition-transform duration-300 ease-out"
        ></span>
      </Link>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 text-white top-[52px]"
          >
            {/* Hover gap */}
            <div className="absolute h-6 -top-6 left-0 right-0 bg-transparent" />
            {/* Arrow */}
            <div className="absolute h-4 w-4 bg-white top-0 left-1/2 rounded-[3px] -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SolutionsContent = () => {
  return (
    <div className="min-w-[800px] ml-[750px]  rounded-md text-[#0E2337]  text-[15px] font-medium bg-white p-6 shadow-xl flex gap-20 text-start">
      <div className="flex flex-col gap-2">
        <div className="text-slate-400 font-normal text-sm">
          LEAD MANAGEMENT
        </div>

        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1 className="mb-1"> PMO Services</h1>
            <h1> Tech Enabled Project Management</h1>
          </div>
        </Link>

        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1> Project Financing</h1>
            <h1> Get Financing for your Projects</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2 min-w-[200px] ">
        <div className="text-slate-400 font-normal text-sm">
          PROJECT MANAGEMENT
        </div>

        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1 className="mb-1"> Design Management</h1>
            <h1> Manage designs, versions & mark changes </h1>
          </div>
        </Link>

        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1> Project Financing</h1>
            <h1> Get Financing for your Projects</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-slate-400 font-normal text-sm min-w-[200px]">
          VENDOR MANAGEMENT
        </div>
        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1 className="mb-1"> Design Management</h1>
            <h1> Manage designs, versions </h1>
          </div>
        </Link>

        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1> Project Financing</h1>
            <h1> Get Financing for Projects</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-slate-400 font-normal text-sm">
          TASK MANAGEMENT
        </div>
        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1 className="mb-1"> Design Management</h1>
            <h1> Manage designs, versions</h1>
          </div>
        </Link>

        <Link
          href={"/"}
          className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap mt-1"
        >
          <FaStore className=" h-8 w-5 items-center" />

          <div className="text-slate-400 font-normal text-sm flex flex-col gap-1">
            <h1> Project Financing</h1>
            <h1> Get Financing for Projects</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

const WhoWeServeContent = () => {
  return (
    <div className="text-justify rounded-md text-[#0E2337] text-[15px] font-medium bg-white p-6 shadow-xl flex flex-col gap-2 min-w-[200px]">
      <Link
        href={"/"}
        className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap"
      >
        <FaStore className=" h-8 w-5 items-center" />
        <span>Retail</span>
      </Link>
      <Link
        href={"/"}
        className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap"
      >
        <FaStore className=" h-8 w-5 items-center" />
        <span>Co-working</span>
      </Link>
      <Link
        href={"/"}
        className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap"
      >
        <FaStore className=" h-8 w-5 items-center" />
        <span>Interiors</span>
      </Link>
      <Link
        href={"/"}
        className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap"
      >
        <FaStore className=" h-8 w-5 items-center" />
        <span>Developers</span>
      </Link>
      <Link
        href={"/"}
        className="h-10 flex items-center px-2 gap-4 rounded-md hover:bg-gray-50 whitespace-nowrap"
      >
        <FaStore className=" h-8 w-5 items-center" />
        <span>Contractors</span>
      </Link>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="min-w-[200px] rounded-md text-[#0E2337]  text-[15px] font-medium  bg-white p-6 shadow-xl flex flex-col  gap-2 text-start">
      <Link
        href={"/"}
        className="hover:underline hover:underline-offset-4  whitespace-nowrap"
      >
        PMO Services
        <div className="font-thin text-sm">Tech Enabled Project Management</div>
      </Link>
      <Link href={"/"} className="hover:underline hover:underline-offset-4 ">
        Project Financing
        <div className="font-thin text-sm">Get Financing for your Projects</div>
      </Link>
    </div>
  );
};

export default Header;
