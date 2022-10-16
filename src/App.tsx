import Carousel from './components/Carousel';
import { Routes, Route } from 'react-router-dom';
import Drag from './pages/drag';
import HomePage from './pages/home';
import Header from './components/Header';
import TestPage from './pages/test';
import TouchPage from './pages/touch';
import ResizePage from './pages/resize';
import CarouselPage from './pages/carousel';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-700 text-white">
      <Header />
      <Routes>
        <Route path="/drag" element={<Drag />} />
        <Route path="/touch" element={<TouchPage />} />
        <Route path="/resize" element={<ResizePage />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
