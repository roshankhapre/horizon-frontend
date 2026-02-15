"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Users, Building2, IndianRupee } from "lucide-react";

import "swiper/css";

const resorts = [
  {
    name: "Justa Ssatva Resort",
    location: "Udaipur, Rajasthan",
    img: "/destination-wedding/destination1.png",
  },
  {
    name: "jüSTa Birding Resort & Spa",
    location: "Dharamshala, Himachal Pradesh",
    img: "/destination-wedding/destination2.png",
  },
  {
    name: "jüSTa Brij Bhoomi Resort",
    location: "Nathdwara, Rajasthan",
    img: "/destination-wedding/destination3.png",
  },
  {
    name: "Royal Palace Resort",
    location: "Jaipur, Rajasthan",
    img: "/destination-wedding/destination3.png",
  },
];

export default function Destinations() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ FIXED: prevent TypeScript error
  const swiperRef = useRef<any>(null);

  const TOTAL_DOTS = 4;

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* LEFT FLOWER */}
      <img
        src="/destination-wedding/about-flower-left.png"
        className="
          absolute
          bottom-0
          left-0
          w-[300px]
          opacity-40
          pointer-events-none
          select-none
          hidden md:block
        "
      />

      {/* RIGHT FLOWER */}
      <img
        src="/destination-wedding/flower.svg"
        className="
          absolute
          right-0
          top-0
          w-[420px]
          opacity-[0.05]
          scale-x-[-1]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          Discover Your Dream Wedding Destinations
        </h2>

        <p className="text-center text-[#16242A] mb-16">
          Find Your Perfect Wedding Spot
        </p>

        {/* SWIPER */}
        <Swiper
          spaceBetween={32}
          slidesPerView={1.15}
          centeredSlides={true}
          loop={true}
          speed={800}
          grabCursor={true}
          watchSlidesProgress={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % resorts.length)
          }
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 3.4,
              centeredSlides: false,
            },
          }}
        >
          {resorts.map((r, i) => (
            <SwiperSlide key={i} className="!flex justify-center">
              <ResortCard r={r} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLS */}
        <div className="flex justify-center items-center gap-12 mt-14">
          {/* LEFT */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
      w-16 h-16
      rounded-full
      bg-[#FFFFFF]
      flex items-center justify-center
      text-black
      shadow-md
      hover:bg-[#E4E7EC]
      transition
      duration-300
    "
          >
            ←
          </button>

          {/* DOTS */}
          <div className="flex items-center gap-4">
            {resorts.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`
          w-3 h-3
          rounded-full
          transition-all duration-300
          ${activeIndex === i ? "bg-[#F97316] scale-110" : "bg-[#D0D5DD]"}
        `}
              />
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
      w-16 h-16
      rounded-full
      bg-[#FFFFFF]
      flex items-center justify-center
      text-black
      shadow-md
      hover:bg-[#E4E7EC]
      transition
      duration-300
    "
          >
            →
          </button>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-14">
          <button
            className="
              bg-[#9B2C5D]
              text-white
              px-10 py-4
              rounded-xl
              font-medium
              hover:bg-[#7c224b]
              transition
            "
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

// ✅ FIXED typing (prevents next error)
function ResortCard({ r }: any) {
  return (
    <div
      className="
        bg-[#FFF4F9]
        rounded-[24px]
        p-4
        shadow-[0_8px_24px_rgba(0,0,0,0.06)]
      "
    >
      <img
        src={r.img}
        className="w-full h-[220px] object-cover rounded-[18px]"
      />

      <div className="p-4">
        <h3 className="font-gilroy-semibold text-[18px] text-[#16242A]">
          {r.name}
        </h3>

        <p className="text-sm text-[#667085] mt-1">{r.location}</p>

        <div className="flex items-center gap-6 mt-4 text-sm text-[#475467]">
          <div className="flex items-center gap-2">
            <Users size={16} strokeWidth={1.5} />
            <span>Upto 150</span>
          </div>

          <div className="flex items-center gap-2">
            <Building2 size={16} strokeWidth={1.5} />
            <span>30 Rooms</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="text-[#9D255A] text-sm flex items-center gap-1">
            <IndianRupee size={18} />0 Booking Fees
          </span>

          <button
            className="
              bg-[#9B2C5D]
              text-white
              px-5 py-2
              rounded-lg
              text-sm
              hover:bg-[#7c224b]
              transition
            "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
