import React, { useState } from 'react';
import Boundary from './Boundary';

export default function Touch() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">DOM Event</h1>
        <span className="">
          x : {x} y : {y}
        </span>
      </div>

      <Boundary
        onTouchStart={(touchEvent) => {
          const mouseMoveHandler = (moveEvent: TouchEvent) => {
            setPosition({
              x: moveEvent.touches[0].pageX - touchEvent.touches[0].pageX,
              y: moveEvent.touches[0].pageY - touchEvent.touches[0].pageY,
            });
          };
          const touchEndHandler = () => {
            document.removeEventListener('touchmove', mouseMoveHandler);
          };

          document.addEventListener('touchmove', mouseMoveHandler);
          document.addEventListener('touchend', touchEndHandler, {
            once: true,
          });
        }}
      />
    </div>
  );
}
