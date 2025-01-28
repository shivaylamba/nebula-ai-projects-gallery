import { useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  
  const allTechStacks = Array.from(
    new Set(projects.flatMap((project) => project.techStack))
  );

  const VISIBLE_TAGS = 5;
  const visibleTechStacks = showAllTags ? allTechStacks : allTechStacks.slice(0, VISIBLE_TAGS);
  
  const filteredProjects = selectedTech
    ? projects.filter((project) => project.techStack.includes(selectedTech))
    : projects;

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        <Button
          variant={selectedTech === null ? "default" : "outline"}
          onClick={() => setSelectedTech(null)}
          className="text-sm"
        >
          All
        </Button>
        {visibleTechStacks.map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            onClick={() => setSelectedTech(tech)}
            className="text-sm"
          >
            {tech}
          </Button>
        ))}
        {allTechStacks.length > VISIBLE_TAGS && (
          <Button
            variant="outline"
            onClick={() => setShowAllTags(!showAllTags)}
            className="text-sm gap-1"
          >
            {showAllTags ? "Show Less" : `+${allTechStacks.length - VISIBLE_TAGS} More`}
            <ChevronDown className={`h-4 w-4 transition-transform ${showAllTags ? 'rotate-180' : ''}`} />
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};