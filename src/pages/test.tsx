import React, { useState } from 'react';
import Boundary from '../components/Boundary';
import Box from '../components/Box';
import registMouseDownDrag from '../utils';

export default function TestPage() {
  const [{ x, y }, setPosition] = useState({
    x: 100,
    y: 100,
  });

  return (
    <div>
      TestPage
      <Boundary>
        <div
          style={{ left: x, top: y }}
          className="absolute h-12 w-12"
          {...registMouseDownDrag((deltaX, deltaY) => {
            setPosition({
              x: x + deltaX,
              y: y + deltaY,
            });
          })}
        >
          <Box />
        </div>
      </Boundary>
    </div>
  );
}
