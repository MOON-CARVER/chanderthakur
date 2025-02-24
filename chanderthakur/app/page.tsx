import { CarouselDemo } from "@/components/ui/carousel";
import Example from "@/components/ui/hero";
import Image from "next/image";
import LottieAnimation from "@/components/ui/LottiePlayer";

export default function Home() {
  return (
    <div>
      <Example />
      <CarouselDemo />
      <div>
        <LottieAnimation />
        
      </div>
    </div>
  );
}