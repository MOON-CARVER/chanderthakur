"use client";

import { Marquee } from "@/components/magicui/marquee";
import dynamic from "next/dynamic";
import animationData1 from "@/public/animations/python.json";
import animationData2 from "@/public/animations/Ae.json";
import animationData3 from "@/public/animations/android.json";
import animationData4 from "@/public/animations/django.json";
import animationData5 from "@/public/animations/flutter.json";
import animationData6 from "@/public/animations/react.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const reviews = [
  {
    animationData: animationData1,
  },
  {
    animationData: animationData2,
  },
  
  {
    animationData: animationData4,
  },
  {
    animationData: animationData5,
  },
  {
    animationData: animationData6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  animationData: object;
}

const ReviewCard = ({ animationData }: ReviewCardProps) => {
  return (
    <div className="flex items-center justify-center scale-140 ">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 500, height: 150 }} // Adjust size as needed
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-gray-900"></div>
    </div>
  );
}