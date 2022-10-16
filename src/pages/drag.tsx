import React, { useRef, useState } from 'react';
import Boundary from '../components/Boundary';
import Box from '../components/Box';
import registMouseDownDrag, { inrange } from '../utils';

export default function DragPage() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const boundaryRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col flex-1 items-center">
      <h1 className="text-lg font-semibold mb-4">Drag Practice</h1>

      <div className="flex space-x-4 mb-12 select-none">
        <p>x : {x}</p>
        <p>y : {y}</p>
      </div>

      <Boundary ref={boundaryRef} className="grid items-center justify-center">
        <div
          className="h-12 w-12"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          onMouseDown={(e) => {
            const initX = e.pageX;
            const initY = e.pageY;

            const mouseMoveHandler = (e: MouseEvent) => {
              if (boundaryRef.current && boxRef.current) {
                const boundary = boundaryRef.current.getBoundingClientRect();
                const box = boxRef.current.getBoundingClientRect();
                const BOUNDARY_MARGIN = 4;

                const deltaX = e.pageX - initX;
                const deltaY = e.pageY - initY;

                setPosition({
                  x: inrange(
                    x + deltaX,
                    Math.floor(
                      -boundary.width / 2 + box.width / 2 + BOUNDARY_MARGIN,
                    ),
                    Math.floor(
                      boundary.width / 2 - box.width / 2 - BOUNDARY_MARGIN,
                    ),
                  ),
                  y: inrange(
                    y + deltaY,
                    Math.floor(
                      -boundary.height / 2 + box.height / 2 + BOUNDARY_MARGIN,
                    ),
                    Math.floor(
                      boundary.height / 2 - box.height / 2 - BOUNDARY_MARGIN,
                    ),
                  ),
                });
              }
            };
            const mouseUpHandler = (e: MouseEvent) => {
              document.removeEventListener('mousemove', mouseMoveHandler);
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler, {
              once: true,
            });
          }}
        >
          <Box ref={boxRef} />
        </div>
      </Boundary>
    </div>
  );
}
