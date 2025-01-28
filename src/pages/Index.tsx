import projectsData from "../data/projects.json";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <main className="flex-1 py-16">
        <ProjectGrid projects={projectsData.projects} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;