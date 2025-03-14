'use client';
import Link from 'next/link';

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  link: string;
}

const VideoCard = ({ title, description, videoUrl, link }: VideoCardProps) => {
    return (
      <Link href={link} target="_blank" className="block w-full">
        <div className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl bg-black/5 aspect-video">
          <video
            src={videoUrl+'?tr=w-600'}
            autoPlay
            loop
            muted
            playsInline
            
            className="w-full h-[300px] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="mt-1 text-sm text-gray-200 line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>
    );
  };
export function VideoGrid() {
  const videos = [
    {
      title: "3D portfolio",
      description: "A 3D portfolio made with react and nextjs",
      videoUrl: "https://ik.imagekit.io/0uakj7rmh/portfolio.webm/ik-video.mp4?updatedAt=1741111269487",
      link: "https://chander-thakur-portfolio.vercel.app/"
    },
    {
      title: "InFoodSys",
      description: "Internship Project",
      videoUrl: "https://ik.imagekit.io/0uakj7rmh/infoodsys.webm/ik-video.mp4?updatedAt=1741111269534",
      link: "https://github.com/pythonandspring/Food-ordering"
    },
    {
      title: "Game Development",
      description: "Developed a 3D shooter game for school Project",
      videoUrl: "https://ik.imagekit.io/0uakj7rmh/Deadzone%20X-(1080P60)2.webm/ik-video.mp4?updatedAt=1741117871480",
      link: "https://github.com/AnujRane29/DEAD"
    },
    {
      title: "Editing",
      description: "Instagram edits made with After effects",
      videoUrl: "https://ik.imagekit.io/0uakj7rmh/Ayaka%20-%20The%20Reality-(1080P60).mp4?updatedAt=1741118880870",
      link: "https://www.instagram.com/i_tsuk_ii/"
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
}