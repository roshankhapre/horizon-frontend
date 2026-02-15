"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

type StyleItem = {
  title: string;
  img: string;
};

const styles: StyleItem[] = [
  { title: "Villa Retreats", img: "/destination-wedding/style/style1.png" },
  { title: "Vineyard Dreams", img: "/destination-wedding/style/style2.png" },
  { title: "Terrace Views", img: "/destination-wedding/style/style3.png" },
  { title: "Island Escapes", img: "/destination-wedding/style/style4.png" },
  { title: "Beach Bliss", img: "/destination-wedding/style/style5.png" },
  { title: "Sea View Stays", img: "/destination-wedding/style/style6.png" },
  { title: "French Chateau Charm", img: "/destination-wedding/style/style7.png" },
  { title: "Authentic Touches", img: "/destination-wedding/style/style8.png" },
  { title: "Countryside Calm", img: "/destination-wedding/style/style9.png" },
  { title: "Castle Romance", img: "/destination-wedding/style/style10.png" },
  { title: "Resort Lux", img: "/destination-wedding/style/style11.png" },
  { title: "Urban Style", img: "/destination-wedding/style/style12.png" },
];

export default function StyleSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      <img
        src="/destination-wedding/style/style-flower.svg"
        className="absolute right-0 top-[-10px] w-[420px] md:w-[180px] lg:w-[520px] opacity-90 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          What’s Your Style?
        </h2>

        <p className="text-center text-gray-900 mb-16 max-w-[700px] mx-auto">
          Explore Curated Venue Styles Tailored To Your Dream Day.
        </p>

        {/* ===== SLIDER ===== */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1.15}
          loop={true}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.6 },
          }}
        >
          {styles.map((item, i) => (
            <SwiperSlide key={i}>
              <StyleCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== CONTROLS ===== */}
        <div className="flex justify-center items-center gap-12 mt-14">

          {/* LEFT */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              w-16 h-16
              rounded-full
              bg-white
              flex items-center justify-center
              text-black
              shadow-md
              hover:bg-[#E4E7EC]
              transition duration-300
            "
          >
            ←
          </button>

          {/* DOTS (One Per Slide) */}
          <div className="flex items-center gap-3 flex-wrap max-w-[300px] justify-center">
            {styles.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  swiperRef.current?.slideToLoop(i)
                }
                className={`
                  w-2.5 h-2.5
                  rounded-full
                  transition-all duration-300
                  ${
                    activeIndex === i
                      ? "bg-[#F97316] scale-125"
                      : "bg-[#D0D5DD]"
                  }
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
              bg-white
              flex items-center justify-center
              text-black
              shadow-md
              hover:bg-[#E4E7EC]
              transition duration-300
            "
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

type StyleCardProps = {
  item: StyleItem;
};

function StyleCard({ item }: StyleCardProps) {
  return (
    <div className="relative h-[340px] rounded-[30px] overflow-hidden group">

      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="font-gilroy-semibold text-[20px]">
          {item.title}
        </h3>
      </div>

    </div>
  );
}
