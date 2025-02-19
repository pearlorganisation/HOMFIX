import { Apple, Play } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-10 mt-12">
            <div
              className="col-span-4 md:col-span-8 lg:col-span-4"
              aria-labelledby="footer-header"
            >
              <a
                id="WindUI-5-logo"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 text-base font-medium leading-6 whitespace-nowrap text-black focus:outline-none"
                href="javascript:void(0)"
              >
                <img
                  src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                  className="w-32 h-24"
                />
              </a>
              <h1 className="mt-8">
                RDash is a new age construction management platform for
                Developers, contractors and design studios
              </h1>

              <h1 className="mt-8">
                It enables complete workflow automation for all professionals
                involved in construction and interior projects management
              </h1>
            </div>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-product-5-logo"
            >
              <h3
                className="mb-6 text-base font-bold text-black"
                id="footer-product-5-logo"
              >
                Solutions
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Lead Management
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Project Management
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Vendor Management
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Task Management
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-docs-5-logo"
            >
              <h3
                className="mb-6 text-base font-bold text-black"
                id="footer-docs-5-logo"
              >
                Quick Links
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    About Us
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Pricing
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Blogs
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-about-5-logo"
            >
              <h3
                className="mb-6 text-base font-bold text-black"
                id="footer-about-5-logo"
              >
                Downloads
              </h3>
              <ul>
                <li className="mb-2 leading-6 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-gray-500" />
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Apple App Store
                  </a>
                </li>
                <li className="mb-2 leading-6 flex items-center gap-2">
                  <Play className="w-5 h-5 text-gray-500" />
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Google Play Store
                  </a>
                </li>
              </ul>
            </nav>
            {/* <nav
          className="col-span-2 md:col-span-4 lg:col-span-2"
          aria-labelledby="footer-get-in-touch-5-logo"
        >
          <h3
            className="mb-6 text-base font-medium text-slate-700"
            id="footer-get-in-touch-5-logo"
          >
            Get in touch
          </h3>
          <ul>
            <li className="mb-2 leading-6">
              <a
                href="javascript:void(0)"
                className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
              >
                {" "}
                Contact{" "}
              </a>
            </li>
            <li className="mb-2 leading-6">
              <a
                href="javascript:void(0)"
                className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
              >
                {" "}
                Support{" "}
              </a>
            </li>
            <li className="mb-2 leading-6">
              <a
                href="javascript:void(0)"
                className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
              >
                {" "}
                Partners{" "}
              </a>
            </li>
            <li className="mb-2 leading-6">
              <a
                href="javascript:void(0)"
                className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
              >
                {" "}
                Join research{" "}
              </a>
            </li>
          </ul>
        </nav> */}
          </div>
        </div>
      </div>
      {/* <!-- Sub Footer --> */}
      <div className="py-4 text-sm border-t border-slate-200 bg-slate-100">
        <div className="container px-6 mx-auto">
          <div className="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-2 md:col-span-4 lg:col-span-6">
              @c 2024 Vonken Brandtech Pvt. Ltd
            </div>
            <nav
              className="col-span-3 md:col-span-4 lg:col-span-6"
              aria-labelledby="subfooter-links-3-sub"
            >
              <h3 className="sr-only" id="subfooter-links-3-sub">
                Get in touch
              </h3>
              <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                <li className="leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
