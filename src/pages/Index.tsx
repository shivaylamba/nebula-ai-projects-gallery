import projectsData from "../data/projects.json";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NebiusSection } from "@/components/NebiusSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />
      <Hero />
      <NebiusSection />
      <main className="py-16">
        <ProjectGrid projects={projectsData.projects} />
      </main>
    </div>
  );
};

export default Index;