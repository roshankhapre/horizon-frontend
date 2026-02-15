"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ItemType {
  img: string;
  title: string;
  desc: string;
}

export default function WhyChoose() {
  const items: ItemType[] = [
    {
      img: "/destination-wedding/birthday.png",
      title: "Exclusive Deals",
      desc: "Handpicked deals curated just for your wedding which should feel uniquely yours.",
    },
    {
      img: "/destination-wedding/expert.png",
      title: "Expert Insights",
      desc: "Our experts bring ideas to life and turn into an experience that’s flawless and personal.",
    },
    {
      img: "/destination-wedding/care.png",
      title: "Care",
      desc: "Every detail handled with heart – so you feel calm, confident, and completely cared for.",
    },
    {
      img: "/destination-wedding/stress.png",
      title: "Stress-free Experience",
      desc: "We’re with you at every step – so you can breathe, smile, and soak in the joy.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* ================= CONTAINER ================= */}
      <div className="max-w-[1250px] mx-auto px-5">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-12">
          <h2 className="font-gilroy-bold text-[#9B2C5D] text-2xl sm:text-3xl lg:text-[42px]">
            Why Choose Us?
          </h2>

          <p className="text-sm lg:text-[17px] text-[#16242A] max-w-[720px] mx-auto mt-3 leading-[1.8]">
            Because Every Dream Wedding Deserves Expertise, Ease, And A Little
            Extra Magic.
          </p>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-4 gap-12">
          {items.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden pl-5">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.3} // half cut effect
          spaceBetween={16}
          pagination={{
            el: ".progress-pagination",
            clickable: true,
          }}
          className="!overflow-visible"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Indicator */}
        <div className="progress-pagination flex justify-center mt-8 gap-2" />
      </div>

      {/* ================= CUSTOM PAGINATION STYLE ================= */}
      <style jsx global>{`
        .progress-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          background: #dcdcdc;
          border-radius: 999px;
          opacity: 1;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }

        .progress-pagination .swiper-pagination-bullet-active {
          background: #9b2c5d;
          width: 50px;
        }
      `}</style>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function Card({ item }: { item: ItemType }) {
  return (
    <div className="text-center">
      {/* IMAGE */}
      <div className="flex justify-center mb-6">
        <Image
          src={item.img}
          alt={item.title}
          width={150}
          height={150}
          className="h-[130px] object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="font-gilroy-semibold text-[18px] lg:text-[22px] text-[#16242A] mb-2">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#475467] text-[14px] lg:text-[16px] leading-[1.8] max-w-[280px] mx-auto">
        {item.desc}
      </p>
    </div>
  );
}
