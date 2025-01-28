import { useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

interface ProjectGridProps {
  projects: Project[];
}

const ALLOWED_TECH_STACKS = ["All", "NextJS", "TypeScript", "Python", "React", "Java", "C#", "Svelte"];

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  
  const filteredProjects = selectedTech && selectedTech !== "All"
    ? projects.filter((project) => project.techStack.includes(selectedTech))
    : projects;

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {ALLOWED_TECH_STACKS.map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech || (tech === "All" && !selectedTech) ? "default" : "outline"}
            onClick={() => setSelectedTech(tech === "All" ? null : tech)}
            className="text-sm"
          >
            {tech}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};