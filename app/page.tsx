
import Example from "@/components/ui/hero";
import { TimelineDemo } from "@/components/data/timelineData";
import { DATA } from "@/components/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { BentoGridSecondDemo } from "@/components/data/grid";
import Instagram from "@/components/ui/Instagram";


export default function Home() {
  return (
    <>
      <Example />
      <TimelineDemo />
      <BentoGridSecondDemo/>
      <Instagram />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {DATA.projects.map((project) => (
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