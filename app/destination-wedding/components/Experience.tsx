"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const data = [
  {
    title: "Decor",
    desc: "Transforming your spaces into stunning visual experiences.",
    img: "/destination-wedding/decor.png",
  },
  {
    title: "Mehendi",
    desc: "Traditional artistry delivered with elegance and flair.",
    img: "/destination-wedding/mahendi.png",
  },
  {
    title: "Invites & Favours",
    desc: "Thoughtfully crafted keepsakes and beautiful first impressions.",
    img: "/destination-wedding/invites.png",
  },
  {
    title: "Catering",
    desc: "Curated menus to delight every palate and occasion.",
    img: "/destination-wedding/catering.png",
  },
  {
    title: "End To End Planing",
    desc: "From the first idea to the final goodbye — we handle it all.",
    img: "/destination-wedding/end-to-end.png",
  },
  {
    title: "Entertainment",
    desc: "From DJs to dancers — we bring the celebration to life.",
    img: "/destination-wedding/entertainment.png",
  },
  {
    title: "Venue",
    desc: "Handpicked venues that match your vision, perfectly.",
    img: "/destination-wedding/venue.png",
  },
  {
    title: "Pre Wedding",
    desc: "Capturing your unique love story with creative flair.",
    img: "/destination-wedding/pre-wedding.png",
  },
  {
    title: "Ceremany",
    desc: "Orchestrating your sacred vows to perfection.",
    img: "/destination-wedding/ceremony.png",
  },
  {
    title: "Reception",
    desc: "A grand and joyous celebration of your union.",
    img: "/destination-wedding/reception.png",
  },
  {
    title: "Post-Wedding",
    desc: "Intimate gatherings to extend the happiness.",
    img: "/destination-wedding/pre-wedding.png",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ FIXED: Prevent TypeScript error
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* FLOWER BACKGROUND */}
      <img
        src="/destination-wedding/flower.svg"
        className="absolute left-0 bottom-0 w-[700px] opacity-[0.08] pointer-events-none"
      />

      <img
        src="/destination-wedding/flower.svg"
        className="absolute right-0 top-0 w-[700px] opacity-[0.08] scale-x-[-1] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-6">
          Unforgettable Experiences for Your Destination Wedding
        </h2>

        {/* Subtitle */}
        <p className="text-center text-[#16242A] mb-20">
          Discover a Range of Tailored Options for Your Special Celebration
        </p>

        {/* ===== SLIDER ===== */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1.15}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: ".exp-next",
            prevEl: ".exp-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.25 },
            1280: { slidesPerView: 3.6 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== CONTROLS ===== */}
        <div className="flex justify-center items-center gap-10 mt-16">
          {/* LEFT ARROW */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="exp-prev text-[28px] text-[#667085] hover:text-[#9B2C5D] transition"
          >
            ←
          </button>

          {/* DOTS */}
          <div className="flex items-center gap-3">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`
                  w-[6px] h-[6px]
                  rounded-full
                  transition-all duration-300
                  ${
                    i === activeIndex
                      ? "bg-[#F97316] scale-125"
                      : "bg-[#D0D5DD] hover:bg-[#F97316]/60"
                  }
                `}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="exp-next text-[28px] text-[#667085] hover:text-[#9B2C5D] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// ✅ FIXED: Prevent implicit any error
function Card({ item }: any) {
  return (
    <div className="relative h-[360px] rounded-[30px] overflow-hidden group">
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="font-gilroy-semibold text-[20px] mb-2">
          {item.title}
        </h3>
        <p className="text-[14px] opacity-90 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
