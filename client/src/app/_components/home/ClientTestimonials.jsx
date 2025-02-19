"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    text: "Welcome to our platform! Experience the best services.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    icon: "https://www.hindustantimes.com/ht-img/img/2024/02/23/1600x900/avatar-animated_1708687340749_1708687354971.jpg",
    name: "Harsh Sharma",
    designation: "CEO, Astral Munch",
  },
  {
    text: "Explore new opportunities with us. Stay ahead in the game!",
    video: "https://www.w3schools.com/html/movie.mp4",
    icon: "https://www.hindustantimes.com/ht-img/img/2024/02/23/1600x900/avatar-animated_1708687340749_1708687354971.jpg",
    name: "Puneet Sharma",
    designation: "Founder, WOLF-DART",
  },
];

const ClientTestimonials = () => {
  return (
    <div className="w-full min-h-screen mx-auto py-10 bg-orange-500">
      <h1 className="text-4xl mx-16 text-white font-bold">
        {" "}
        Client Testimonials{" "}
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="p-10">
            <div className="grid grid-cols-2 gap-10 items-start  text-white  rounded-lg">
              {/* Text Section */}

              <div className=" flex flex-col justify-between mx-8">
                <div className="w-[80%]">
                  <h1 className="text-4xl font-semibold">
                    <span className="text-5xl text-gray-700">"</span>
                    {slide.text}
                    <span className="text-5xl text-gray-700">"</span>
                  </h1>
                </div>

                <div className="mt-56 flex flex-row gap-3">
                  <img src={slide.icon} className="w-12 h-12 rounded-full" />

                  <div className="flex flex-col gap-3">
                    <h1>{slide.name}</h1>
                    <h1> {slide.designation}</h1>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="flex justify-center">
                <video controls className="w-full h-auto max-h-96 rounded-lg">
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientTestimonials;
