import { CarouselDemo } from "@/components/ui/carousel";
import Example from "@/components/ui/hero";
import Image from "next/image";
import LottieAnimation from "@/components/ui/LottiePlayer";
import { AppleCardsCarouselDemo } from "@/components/data/info";
import { TimelineDemo } from "@/components/data/timelineData";
import { MarqueeDemo } from "@/components/data/marquee";


export default function Home() {
  return (
    <>
      <Example />
      <TimelineDemo/>
      <CarouselDemo />
      <MarqueeDemo/>
        <LottieAnimation />
        <AppleCardsCarouselDemo />
        
        
    </>
  );
}