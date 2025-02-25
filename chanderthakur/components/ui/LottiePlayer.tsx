'use client';

import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import animationData1 from '@/public/animations/python.json';
import animationData2 from '@/public/animations/Ae.json';
import animationData3 from '@/public/animations/android.json' ;
import animationData4 from '@/public/animations/django.json' ;
import animationData5 from '@/public/animations/flutter.json' ;
import animationData6 from '@/public/animations/react.json' ;

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimationProps {
  animationData: object;
  loop?: boolean;
   style?: CSSProperties;
}

const animations: AnimationProps[] = [
  {
    animationData: animationData1,
    loop: true,
    style: { width: 400, height: 400 },
  },
  {
    animationData: animationData2,
    loop: true,
  
    style: { width: 400, height: 400,overflow : 'hidden', position: 'relative', top: '10px', left: '10px' },
  },
  // {
  //   animationData: animationData3,
  //   loop: true,
  //   style: { width: 400, height: 400 },
  // },
  {
    animationData: animationData4,
    loop: true,
    style: { width: 400, height: 400 },
  },
  {
    animationData: animationData5,
    loop: true,
    style: { width: 400, height: 400 },
  },
  {
    animationData: animationData6,
    loop: true,
    style: { width: 400, height: 400 },
  },
];

export default function LottiePlayer() {
  return (
    <div>
      {animations.map((animation, index) => (
        <Lottie
          key={index}
          animationData={animation.animationData}
          loop={animation.loop}
          style={animation.style}
          
        />
      ))}
    </div>
  );
}