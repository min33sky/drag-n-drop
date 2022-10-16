import React from 'react';

export default React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  function Boundary(props, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className={
          'relative w-96 h-64 overflow-hidden rounded-xl bg-gray-200 dark:bg-slate-600 ' +
          props.className
        }
      />
    );
  },
);
