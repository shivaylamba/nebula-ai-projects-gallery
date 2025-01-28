import projectsData from "../data/projects.json";
import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NebiusSection } from "@/components/NebiusSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ALLOWED_TECH_STACKS = [
  "All",
  "NextJS",
  "TypeScript",
  "Python",
  "React",
  "Java",
  "C#",
  "Svelte",
];

const Index = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech && selectedTech !== "All"
    ? projectsData.projects.filter((project) =>
        project.techStack.includes(selectedTech)
      )
    : projectsData.projects;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Hero />
      <NebiusSection />
      <main className="py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {ALLOWED_TECH_STACKS.map((tech) => (
              <Button
                key={tech}
                variant={
                  selectedTech === tech || (tech === "All" && !selectedTech)
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedTech(tech === "All" ? null : tech)}
                className="text-sm"
              >
                {tech}
              </Button>
            ))}
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Index;