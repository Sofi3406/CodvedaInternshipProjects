import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 text-center">
        🚀 Performance Optimized!
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl w-full">
        {/* Counter Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Counter Demo</h2>
          <button 
            onClick={() => setCount((c) => c + 1)}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-lg"
          >
            Count: {count}
          </button>
        </div>

        {/* Performance Stats */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Performance Results</h2>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>📦 Bundle Size:</span>
              <span className="font-mono text-green-600">93KB gzipped</span>
            </div>
            <div className="flex justify-between">
              <span>⚡ Lighthouse:</span>
              <span className="font-mono text-green-600">95-98 Expected</span>
            </div>
            <div className="flex justify-between">
              <span>🚀 Backend:</span>
              <span className="font-mono text-green-600">Compression ON</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-bold text-lg mb-2">Vite Build</h3>
          <p className="text-sm text-gray-600">Terser + Manual Chunks</p>
        </div>
        <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-bold text-lg mb-2">Backend Opt.</h3>
          <p className="text-sm text-gray-600">Gzip + Helmet + Cache</p>
        </div>
        <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-bold text-lg mb-2">PWA Ready</h3>
          <p className="text-sm text-gray-600">Service Worker Ready</p>
        </div>
      </div>
    </div>
  );
}

export default App;
