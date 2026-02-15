import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">

      {/* ================= LEFT FLORAL ================= */}
      <Image
        src="/destination-wedding/about-flower-left.png"
        alt="flower decoration"
        width={400}
        height={400}
        className="
          absolute
          -bottom-16
          -left-16
          sm:-left-20
          md:-left-24
          lg:-left-28
          w-32 sm:w-40 md:w-56 lg:w-72
          opacity-60
          pointer-events-none
          select-none
          z-0
        "
        priority
      />

      {/* ================= RIGHT FLORAL ================= */}
      <Image
        src="/destination-wedding/about-flower-right.png"
        alt="flower decoration"
        width={400}
        height={400}
        className="
          absolute
          top-10
          -right-1
          sm:-right-20
          md:-right-24
          lg:right-0
          w-32 sm:w-40 md:w-56 lg:w-72
          opacity-70
          pointer-events-none
          select-none
          z-0
        "
        priority
      />

      {/* ================= CONTENT WRAPPER ================= */}
      <div
        className="
          relative z-10
          mx-auto
          px-5 sm:px-8 md:px-12 lg:px-16
          max-w-7xl
          text-center
        "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
            font-gilroy-bold
            text-[#9B2C5D]
            mb-8 md:mb-10
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
        >
          About Destination Wedding
        </h2>

        {/* ================= PARAGRAPHS ================= */}
        <div
          className="
            space-y-6 md:space-y-7
            text-[#16242A]
            text-[14.5px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[17px]
            leading-[1.85]
            max-w-4xl
            mx-auto
          "
        >
          <p>
            Step into a world of luxury and romance with Phoenix Fly. At Phoenix Fly,
            we specialize in creating your dream destination wedding, infusing each
            element from the heartfelt ceremony to the vibrant reception and every
            moment in between with your unique style and preferences.
          </p>

          <p>
            Our focus on personalization ensures a celebration that truly feels like
            you. Whether you envision an elegant banquet hall, a serene and beautiful
            garden, or a stunning rooftop terrace, we carefully tailor the setting to
            your vision. From intimate moments to grand gestures, your destination
            wedding with us promises an extraordinary fusion of luxurious stays and
            stunning places, creating memories that you will cherish forever.
          </p>

          <p>
            Our goal is to create weddings that go beyond imagination, where luxury
            and love converge in stunning destinations, forming an ambiance that truly
            reflects your dreams. Enter a world where lavish accommodations seamlessly
            merge with spacious venues, forming the backdrop for an exceptional
            celebration.
          </p>

          <p>
            Our comprehensive experience includes a range of activities before and
            after the wedding, like mehndi ceremonies, relaxing spa treatments, and
            local tours, to give you a complete experience. Our flexible wedding
            packages are designed to align with your specific vision and budget. Our
            dedicated efforts ensure everything is tailored to your satisfaction.
          </p>

          <p>
            We are committed to crafting an unforgettable day, understanding the
            significance of each detail. From the excitement of pre wedding moments to
            the careful planning that brings your dream to life, we ensure that your
            journey towards your happily ever after is marked by joy and elegance.
          </p>
        </div>
      </div>
    </section>
  );
}
