import React, { useEffect, useRef, useState } from 'react';
import { inrange } from '../utils';
import registerDragEvent from '../utils/registerDragEvent';
import Boundary from './Boundary';
import Box from './Box';

const BOUNDARY_MARGIN = 4;
const DEFAULT_W = 40;
const DEFAULT_H = 40;

export default function DragTouchable() {
  const boundaryRef = useRef<HTMLDivElement>(null);

  const [{ x, y }, setConfig] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const boundary = boundaryRef.current?.getBoundingClientRect();

    if (boundary) {
      setConfig({
        x: Math.floor(boundary.width / 2 - DEFAULT_W / 2),
        y: Math.floor(boundary.height / 2 - DEFAULT_H / 2),
      });
    }
  }, []);

  return (
    <div>
      <div className="space-y-2 mb-8 select-none">
        <h1 className="font-bold text-2xl">Touch Drag</h1>
        <p>Mouse & Touch Event</p>
        <p>
          x : {x}, y : {y}
        </p>
      </div>

      <Boundary ref={boundaryRef}>
        <div
          style={{ left: x, top: y, width: DEFAULT_W, height: DEFAULT_H }}
          className="relative"
          {...registerDragEvent({
            onDragChange: (deltaX, deltaY) => {
              if (!boundaryRef.current) return;

              const boundary = boundaryRef.current.getBoundingClientRect();

              setConfig({
                x: inrange(
                  x + deltaX,
                  BOUNDARY_MARGIN,
                  boundary.width - DEFAULT_W - BOUNDARY_MARGIN,
                ),
                y: inrange(
                  y + deltaY,
                  BOUNDARY_MARGIN,
                  boundary.height - DEFAULT_H - BOUNDARY_MARGIN,
                ),
              });
            },
          })}
        >
          <Box />
        </div>
      </Boundary>
    </div>
  );
}
