import About from "./components/About";
import BlogIdeas from "./components/BlogIdeas";
import CraftedGrid from "./components/CraftedGrid";
import CustomizeCTA from "./components/CustomizeCTA";
import Destinations from "./components/Destinations";
import DreamPlaces from "./components/DreamPlaces";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Hero from "./components/HeroDestination";
import StyleSlider from "./components/StyleSlider";

import WhyChoose from "./components/WhyChoose";

export default function DestinationWeddingPage() {
  return (
    <main className="bg-[#f6f7f9]">
      <Hero />
      <About />
     <Experience />
       <Destinations />
     <WhyChoose />
   <Gallery />
           <CraftedGrid />
      <StyleSlider />
      <DreamPlaces />
      <BlogIdeas />
     <CustomizeCTA /> 
    </main>
  )
}
