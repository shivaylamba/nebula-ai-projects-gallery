export const Footer = () => {
  return (
    <footer className="w-full py-6 border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Crafted with{" "}
          <span className="text-red-500 animate-pulse" aria-label="love">❤️</span>
          {" "}and{" "}
          <span className="animate-bounce" aria-label="coffee">☕</span>
          {" "}by our amazing community
        </p>
      </div>
    </footer>
  );
};
