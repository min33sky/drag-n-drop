import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full py-6">
      <nav className="flex justify-center text-lg font-bold max-w-xl space-x-5 mx-auto">
        <Link to="/">Home</Link>
        <Link to="/drag">Drag</Link>
        <Link to="/touch">Touch</Link>
        <Link to="/resize">Resize</Link>
        <Link to="/test">Test</Link>
      </nav>
    </header>
  );
}
