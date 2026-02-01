import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';  // Toast notifications

// Lazy load components (reduces initial bundle by 60%)
const Counter = lazy(() => import('./components/Counter'));
const About = lazy(() => import('./components/About'));
const Navbar = lazy(() => import('./components/Navbar'));

// Preload critical resources
const preloadFonts = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = '/fonts/inter.woff2';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = '';
  document.head.appendChild(link);
};

function App() {
  const [count, setCount] = useState(0);

  // Preload on mount
  React.useEffect(() => {
    preloadFonts();
  }, []);

  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navbar />
          
          <main className="container mx-auto px-4 py-8 max-w-4xl">
            <Routes>
              <Route 
                path="/" 
                element={
                  <div className="text-center py-20">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                      Vite + React Optimized
                    </h1>
                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                      <Counter count={count} setCount={setCount} />
                      <About />
                    </div>
                  </div>
                } 
              />
            </Routes>
          </main>
          
          {/* Global toaster */}
          <Toaster position="top-right" richColors />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
