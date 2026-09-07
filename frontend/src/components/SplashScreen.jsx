import { useEffect, useState } from "react";

function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      
      <div className="flex flex-col items-center">

        {/* Loading Logo */}
        <div className="relative flex h-24 w-24 items-center justify-center">

          {/* Spinning Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-100 border-t-blue-600"></div>

          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">

            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
              <path d="M9 21v-6h6v6" />
            </svg>

          </div>
        </div>

        {/* Brand Name */}
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-800">
          Home<span className="text-blue-600">Help</span>
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Services at your doorstep
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-48">

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-2 text-center text-xs font-medium text-slate-400">
            Loading {progress}%
          </p>

        </div>

        {/* Loading Dots */}
        <div className="mt-4 flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]"></span>

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]"></span>

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500"></span>
        </div>

      </div>
    </div>
  );
}

export default SplashScreen;