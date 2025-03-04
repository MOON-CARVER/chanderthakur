'use client';

import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import animationData1 from '@/public/animations/python.json';
import animationData2 from '@/public/animations/django.json';
import animationData3 from '@/public/animations/sqlite.json';
import animationData4 from '@/public/animations/Aws.json';
import animationData5 from '@/public/animations/api.json';
import animationData6 from '@/public/animations/react.json';
import animationData7 from '@/public/animations/Ae.json';
import animationData8 from '@/public/animations/flutter.json';

import { cn } from '@/lib/utils';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// LottiePlayer Component
interface AnimationProps {
  animationData: object;
  loop?: boolean;
  style?: CSSProperties;
}

interface LottiePlayerProps {
  animationIndex: number; // Index to select a specific animation
  className?: string; // Optional className for additional styling
  scale?: number; // Optional scale factor for the animation
}

function LottiePlayer({ animationIndex, className, scale = 1 }: LottiePlayerProps) {
  const animations: AnimationProps[] = [
    {
      animationData: animationData1,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData2,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData3,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData4,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData5,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData6,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData7,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
    {
      animationData: animationData8,
      loop: true,
      style: { width: 200, height: 200, transform: `scale(${scale})` }, // Apply scaling
    },
  ];

  const animation = animations[animationIndex];

  return (
    <div className={cn('flex items-center justify-center w-full h-full', className)}>
      <Lottie
        animationData={animation.animationData}
        loop={animation.loop}
        style={animation.style}
      />
    </div>
  );
}

// BentoGrid Component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// BentoGridSecondDemo Component
export function BentoGridSecondDemo() {
  return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {/* Horizontally long box with 3 animations */}
      <BentoGridItem
        title="Backend and Database"
        description="Skilled in backend development with Django and Python, and managing databases with SQLite"
        header={
          <div className="flex w-full h-full overflow-hidden">
            <LottiePlayer animationIndex={0} scale={1.3} />
            <LottiePlayer animationIndex={1} scale={1.3} />
            <LottiePlayer animationIndex={2} scale={1.3} />
          </div>
        }
        className="md:col-span-2"
      />
    
      {/* Smaller box with 1 animation */}
            <BentoGridItem
        title="Cloud Computing"
        description="Dive into the transformative power of technology."
        header={
          <div className="flex w-full h-full overflow-hidden">
            <LottiePlayer animationIndex={3} scale={1.3} />
          </div>
        }
        className="md:col-span-1"
      />
      
      {/* Smaller box with 1 animation */}
      <BentoGridItem
        title="Android Development"
        description="Discover the beauty of thoughtful and functional design."
        header={
          <div className="flex w-full h-full overflow-hidden">
            <LottiePlayer animationIndex={4} scale={1.3} />
          </div>
        }
        className="md:col-span-1"
      />
    
      {/* Horizontally long box with 2 animations */}
      <BentoGridItem
        title="Frontend and Animation"
        description="Experienced in building UIs with React and Flutter, and creating animations using After Effects."
        header={
          <div className="flex  w-full h-full overflow-hidden">
            <LottiePlayer animationIndex={5} scale={1.3} />
            <LottiePlayer animationIndex={6} scale={1.3} />
            <LottiePlayer animationIndex={7} scale={1.3} />
          </div>
        }
        className="md:col-span-2"
      />
    </BentoGrid>
  )
}