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
}

export default function LottiePlayer({ containerStyle }: LottiePlayerProps) {
  const animations: AnimationProps[] = [
    {
      animationData: animationData1,
      loop: true,
      style: { width: 200, height: 200,  }, // Apply scale transform
    },
    {
      animationData: animationData2,
      loop: true,
      style: { width: 200, height: 200,  }, // Apply scale transform
    },

    {
      animationData: animationData3,
      loop: true,
      style: { width: 200, height: 200,  }, // Apply scale transform
    },
  
    {
      animationData: animationData4,
      loop: true,
      style: { width: 200, height: 200, }, // Apply scale transform
    },
    {
      animationData: animationData5,
      loop: true,
      style: { width: 200, height: 200,  }, // Apply scale transform
    },
    {
      animationData: animationData6,
      loop: true,
      style: { width: 200, height: 200, }, // Apply scale transform
    },
  ];

  return (
    <div style={containerStyle} className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 ">
      {animations.map((animation, index) => (
        <div key={index} className="flex items-center justify-center overflow-hidden">
          <div className="transform scale-150">
            <Lottie
              animationData={animation.animationData}
              loop={animation.loop}
              style={animation.style}
            />
          </div>
        </div>
      ))}
    </div>
  );
}