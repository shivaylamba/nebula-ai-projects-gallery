import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Nebius AI Community Showcase
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover amazing projects built by the community using Nebius AI. Get inspired and start building your next project today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={() => window.open("https://github.com/shivaylamba/nebula-ai-projects-gallery", "_blank")}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              Add Your Project to the Showcase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
