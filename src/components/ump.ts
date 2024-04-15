import React from 'react';

interface MousePosition {
  x: number,
  y: number,
}

/**
 * Capture current mouse position under an element
 * @returns {state} current mouse position
 */
export default function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

 interface EventPosition {
   clientX: number,
   clientY: number,
 }

  React.useEffect(() => {
    function handleMouseMove(event: EventPosition) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

