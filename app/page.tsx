
import Example from "@/components/ui/hero";
import { TimelineDemo } from "@/components/data/timelineData";
import { BentoGridSecondDemo } from "@/components/data/grid";
import { VideoGrid } from "@/components/ui/video-grid";



export default function Home() {
  return (
    <>
    
      <Example />
      <TimelineDemo />
      <h3 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-100 text-center mx-auto max-w-4xl py-6">
        my tech stack with lottie animations i created
      </h3>
              
      <BentoGridSecondDemo/>
      <VideoGrid />
    </>
  );
}