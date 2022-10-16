import Carousel from './components/Carousel';
import { Routes, Route } from 'react-router-dom';
import Drag from './pages/drag';
import HomePage from './pages/home';
import Header from './components/Header';
import TestPage from './pages/test';

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-slate-700 text-white">
      <Header />
      <Routes>
        <Route path="/drag" element={<Drag />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
