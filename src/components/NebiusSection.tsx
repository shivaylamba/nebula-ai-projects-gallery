export const NebiusSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          What is Nebius AI Studio?
        </h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Nebius AI Studio is a powerful platform that enables developers to build, test, and deploy AI-powered applications with ease. It provides a comprehensive suite of tools and services for machine learning, natural language processing, and computer vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Build</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create AI applications using our intuitive interface and pre-built components
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Train</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Train your models with high-performance computing resources
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Deploy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deploy your AI solutions seamlessly to production
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};