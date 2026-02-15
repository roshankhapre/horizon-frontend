"use client";

export default function CraftedGrid() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      
      {/* Decorative Flower */}
      <img
        src="/destination-wedding/crafted-flower.svg"
        alt=""
        className="
          absolute
          right-[-40px]
          top-[-120px]

          w-[260px]
          sm:w-[340px]
          md:w-[420px]
          lg:w-[600px]
          xl:w-[900px]
          2xl:w-[1100px]

          opacity-100
          pointer-events-none
          select-none
        "
      />

      {/* Container */}
      <div
        className="
          relative z-10
          mx-auto
          px-5 sm:px-6 md:px-10 lg:px-16
          max-w-[1250px] xl:max-w-[1350px]
        "
      >
        {/* HEADING */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-2xl sm:text-3xl md:text-5xl">
          Crafted For Your Dreams
        </h2>

        <p className="text-center text-[#475467] mt-3 mb-10 sm:mb-14 md:mb-16 max-w-[720px] mx-auto text-sm sm:text-base">
          Best Selling And Trending Wedding Themes That Define Elegance And
          Celebration
        </p>

        {/* ===== DESKTOP / TABLET GRID ===== */}
        <div className="hidden md:grid grid-cols-12 gap-3 lg:gap-4">
          
          {/* LEFT */}
          <div className="col-span-6 grid grid-cols-2 gap-3 lg:gap-4">
            
            {/* Top Wide */}
            <GridImage
              src="/destination-wedding/grid1.png"
              className="col-span-2 aspect-[20/10]"
            />

            {/* Small Images */}
            <GridImage src="/destination-wedding/grid2.png" className="aspect-square" />
            <GridImage src="/destination-wedding/grid3.png" className="aspect-square" />
            <GridImage src="/destination-wedding/grid4.png" className="aspect-square" />
            <GridImage src="/destination-wedding/grid5.png" className="aspect-square" />
          </div>

          {/* MIDDLE (Balanced Height) */}
          <GridImage
            src="/destination-wedding/grid7.png"
            className="col-span-3 h-full min-h-[460px] lg:min-h-[580px]"
          />

          {/* RIGHT */}
          <div className="col-span-3 flex flex-col gap-3 lg:gap-4">
            <GridImage
              src="/destination-wedding/grid6.png"
              className="flex-1 min-h-[220px]"
            />
            <GridImage
              src="/destination-wedding/grid8.png"
              className="flex-1 min-h-[220px]"
            />
          </div>
        </div>

        {/* ===== MOBILE STACK ===== */}
        <div className="md:hidden flex flex-col gap-4">
          
          <GridImage
            src="/destination-wedding/grid1.png"
            className="aspect-[16/10]"
          />

          <div className="grid grid-cols-2 gap-4">
            <GridImage src="/destination-wedding/grid2.png" className="aspect-square" />
            <GridImage src="/destination-wedding/grid3.png" className="aspect-square" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GridImage src="/destination-wedding/grid4.png" className="aspect-square" />
            <GridImage src="/destination-wedding/grid5.png" className="aspect-square" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            
            <GridImage
              src="/destination-wedding/grid7.png"
              className="h-full min-h-[260px]"
            />

            <div className="flex flex-col gap-4">
              <GridImage src="/destination-wedding/grid6.png" className="flex-1" />
              <GridImage src="/destination-wedding/grid8.png" className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type GridImageProps = {
  src: string;
  className?: string;
};

function GridImage({ src, className = "" }: GridImageProps) {
  return (
    <div
      className={`
        relative
        rounded-[20px] sm:rounded-[24px]
        overflow-hidden
        group
        bg-gray-100
        ${className}
      `}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="
          w-full h-full
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />
    </div>
  );
}
