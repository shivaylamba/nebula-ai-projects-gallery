import projectsData from "../data/projects.json";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <main className="py-16">
        <ProjectGrid projects={projectsData.projects} />
      </main>
    </div>
  );
};

export default Index;