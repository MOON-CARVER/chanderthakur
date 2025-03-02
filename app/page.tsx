
import Example from "@/components/ui/hero";
import { TimelineDemo } from "@/components/data/timelineData";
import { DATA } from "@/components/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import LottiePlayer from "@/components/ui/LottiePlayer";
import Instagram from "@/components/ui/Instagram";
import { BentoGridSecondDemo } from "@/components/data/grid";


export default function Home() {
  return (
    <>
      <Example />
      <TimelineDemo />
      <BentoGridSecondDemo/>
      <Instagram />
      <div className="max-w-[800px] mx-auto" > <LottiePlayer/> </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
      <h1>Instagram Video</h1>
      <Instagram containerStyle={{ width: '500px', height: '500px', border: '1px solid black' }} />
        {DATA.projects.map((project, id) => (
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            image={project.image}
            video={project.video}
          />
        ))}
      </div>
    </>
  );
}