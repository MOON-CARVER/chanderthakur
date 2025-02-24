'use client';

import dynamic from 'next/dynamic';
import animationData from '@/public/animations/python.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieAnimation() {
  return <Lottie animationData={animationData} />;
}