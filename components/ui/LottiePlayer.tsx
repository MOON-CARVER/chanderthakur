'use client';

import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import animationData1 from '@/public/animations/python.json';
import animationData2 from '@/public/animations/Ae.json';
import animationData3 from '@/public/animations/Aws.json';
import animationData4 from '@/public/animations/django.json';
import animationData5 from '@/public/animations/flutter.json';
import animationData6 from '@/public/animations/react.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimationProps {
  animationData: object;
  loop?: boolean;
  style?: CSSProperties;
}

interface LottiePlayerProps {
  containerStyle?: CSSProperties; // Optional container styling
  animationIndex?: number; // Optional index to select a specific animation
  className?: string; // Optional className for additional styling
}

export default function LottiePlayer({ containerStyle, animationIndex, className }: LottiePlayerProps) {
  const animations: AnimationProps[] = [
    {
      animationData: animationData1,
      loop: true,
      style: { width: '10%', height: '10%' }, // Make the animation responsive
    },
    {
      animationData: animationData2,
      loop: true,
      style: { width: '10%', height: '10%' }, // Make the animation responsive
    },
    {
      animationData: animationData3,
      loop: true,
      style: { width: '10%', height: '10%' }, // Make the animation responsive
    },
    {
      animationData: animationData4,
      loop: true,
      style: { width: '10%', height: '10%' }, // Make the animation responsive
    },
    {
      animationData: animationData5,
      loop: true,
      style: { width: '10%', height: '10%' }, // Make the animation responsive
    },
    {
      animationData: animationData6,
      loop: true,
      style: { width: '10%', height: '10%' }, // Make the animation responsive
    },
  ];

  // If animationIndex is provided, render only that animation
  const selectedAnimation = animationIndex !== undefined ? [animations[animationIndex]] : animations;

  return (
    <div style={containerStyle} className={className}>
      {selectedAnimation.map((animation, index) => (
        <div key={index} className="flex items-center justify-center w-full h-full overflow-hidden">
          <Lottie
            animationData={animation.animationData}
            loop={animation.loop}
            style={animation.style}
          />
        </div>
      ))}
    </div>
  );
}