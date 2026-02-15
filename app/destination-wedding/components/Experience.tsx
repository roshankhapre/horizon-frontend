"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

type ExperienceItem = {
  title: string;
  desc: string;
  img: string;
};

const data: ExperienceItem[] = [
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
    title: "End To End Planning",
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
    title: "Ceremony",
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
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-visible">
      {/* Background Flowers */}
      <img
        src="/destination-wedding/flower.svg"
        className="absolute left-0 bottom-0 w-[500px] xl:w-[700px] opacity-[0.06] pointer-events-none"
      />

      <img
        src="/destination-wedding/flower.svg"
        className="absolute right-0 top-0 w-[500px] xl:w-[700px] opacity-[0.06] scale-x-[-1] pointer-events-none"
      />

      {/* Container */}
      <div
        className="
          relative z-10
          w-full
          mx-auto
          px-6
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
          max-w-[1100px]
          md:max-w-[1200px]
          lg:max-w-[1280px]
          xl:max-w-[1380px]
        "
      >
        {/* Heading */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-6">
          Unforgettable Experiences for Your Destination Wedding
        </h2>

        <p className="text-center text-[#16242A] mb-16 md:mb-20">
          Discover a Range of Tailored Options for Your Special Celebration
        </p>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1.15}
          loop={true}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % 4)}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.6 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
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
            {[0, 1, 2, 3].map((i) => (
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
      </div>
    </section>
  );
}

/* Card Component */
function Card({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative h-[300px] md:h-[330px] xl:h-[360px] rounded-[30px] overflow-hidden group">
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="font-gilroy-semibold text-[18px] md:text-[20px] mb-2">
          {item.title}
        </h3>
        <p className="text-[14px] opacity-90 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}
