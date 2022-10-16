export const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(' ');
};

export const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

export default function registMouseDownDrag(
  onDragChange: (deltaX: number, deltaY: number) => void,
  stopPropagation?: boolean,
) {
  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation();

      console.log('as');

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        const deltaY = moveEvent.screenY - clickEvent.screenY;
        onDragChange(deltaX, deltaY);
      };

      const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
  };
}
