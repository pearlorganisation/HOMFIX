"use client"

import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function ConstructionCalculator() {
  
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
console.log(data)
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-28">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-4">Free House Construction Cost Calculator</h1>

          <p className="text-[#333] mb-8">
            Fill out the form below to get an estimate of house construction costs. Speak to our technical expert for a
            more accurate pricing
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Mobile Number */}
    <div>
      <div className="flex items-center border-b pb-1 mb-1 h-12">
        <div className="flex items-center px-2   h-full">
          <span className="flex items-center gap-1">
            <img
              src="/images/download (1).jpg"
              alt="India flag"
              className="w-6 h-4 object-cover"
            />
            <span className="text-sm">
              <MdOutlineArrowDropDown fontSize={20} />
            </span>
          </span>
        </div>
        <input
          type="text"
          placeholder="Mobile Number*"
          className="w-full h-full px-3 outline-none  focus:border-blue-500"
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          })}
        />
      </div>
      {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
    </div>

    {/* Name */}
    <div>
      <input
        type="text"
        placeholder="Name*"
        className="w-full border-b px-3 h-12 outline-none focus:border-blue-500"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Location */}
    <div>
      <input
        type="text"
        placeholder="Location of your Plot*"
        className="w-full border-b px-3 h-12 outline-none focus:border-blue-500"
        {...register("location", { required: "Location is required" })}
      />
      {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
    </div>

    {/* Super Built Up Area */}
    <div>
      <input
        type="text"
        placeholder="Super Built Up Area (sq.ft)*"
        className="w-full border-b px-3 h-12 outline-none focus:border-blue-500"
        {...register("superBuiltUpArea", {
          required: "This field is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Enter a valid number",
          },
        })}
      />
      {errors.superBuiltUpArea && <p className="text-red-500 text-sm">{errors.superBuiltUpArea.message}</p>}
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Car Parking */}
    <div>
      <div className="relative">
        <select
          className="w-full border-b px-3 h-12 outline-none appearance-none bg-white focus:border-blue-500"
          {...register("carParking", { required: "Select car parking" })}
          defaultValue="01"
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <MdKeyboardArrowDown />
        </div>
        <div className="absolute left-0 -top-6 text-sm text-gray-600">
          No Of Car Parking (130 sq.ft/unit)*
        </div>
      </div>
      {errors.carParking && <p className="text-red-500 text-sm">{errors.carParking.message}</p>}
    </div>

    {/* Balcony & Utility Area */}
    <div>
      <input
        type="text"
        placeholder="Balcony & Utility Area (sq.ft)*"
        className="w-full border-b px-3 h-12 outline-none focus:border-blue-500"
        {...register("balconyUtility", {
          required: "This field is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Enter a valid number",
          },
        })}
      />
      {errors.balconyUtility && <p className="text-red-500 text-sm">{errors.balconyUtility.message}</p>}
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-[#E84C24] text-white font-medium py-4 rounded text-lg hover:bg-[#d43e18] transition-colors"
  >
    Estimate Cost For Free
  </button>

  {/* Disclaimer */}
  <div className="mt-6 text-sm text-gray-700">
    <p className="font-semibold">Disclaimer:</p>
    <p className="mt-2">
      The costs indicated are approximate costs for each resource. Actual cost estimates may vary for your
      city. Please check with our technical expert for more accurate pricing or visit our BricknBolt office
      for a custom estimate.
    </p>
  </div>
</form>

        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
  {/* More Free Calculators */}
  <div className="border rounded-lg p-6 shadow-md bg-white w-full md:w-72">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">More Free Calculators</h3>
    <ul className="space-y-3">
      {[
        "Stamp Duty Cost Estimator",
        "Foundation Cost Estimator",
        "FSI Calculator",
        "Compound Wall Cost Calculator",
      ].map((item, index) => (
        <li key={index}>
          <Link href="#" className="text-[#E84C24] hover:underline hover:text-red-600 transition duration-300">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Popular Blogs */}
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Popular Blogs</h2>
    <div className="space-y-6 w-full md:w-72">
      {[
        {
          title: "Calculating Construction Cost Per Square Foot in India",
          image: "/images/download (1).jpg",
        },
        {
          title: "Which Facing House is Good for All Rashis?",
          image: "/images/istockphoto-507122313-612x612.jpg",
        },
      ].map((blog, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
          <Link href="#" className="block">
            <Image
              src={blog.image}
              alt={blog.title}
              width={200}
              height={40}
              className="w-full h-36 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-800 hover:text-[#E84C24] transition duration-300">
                {blog.title}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>

{/* WhatsApp Chat Button */}
<div className="fixed bottom-6 right-6 z-50">
  <button className="bg-[#25D366] text-white rounded-full p-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-circle"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
    <span className="font-medium">Chat With Us</span>
  </button>
</div>

</div></div>
  )
}

