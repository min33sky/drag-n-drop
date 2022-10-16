import React from 'react';
import DragTouchable from '../components/DragTouchable';
import Touch from '../components/Touch';

export default function TouchPage() {
  return (
    <div className="flex flex-col items-center px-4 space-y-4">
      <Touch />
      <DragTouchable />
    </div>
  );
}
