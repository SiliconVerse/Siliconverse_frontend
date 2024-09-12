/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export function ReactPortal({ children, setState }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  const ref = useRef();

  function handleVisibility(event) {
    if (typeof setState !== 'function' || event.target !== ref.current) {
      return;
    }

    setState(false);
  }

  useLayoutEffect(() => {
    let element = document.getElementById('modal_id');
    if (element) {
      setWrapperElement(element);
    }
  }, []);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(
    <>
      <div
        onClick={handleVisibility}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999, // Ensure it's on top of other content
        }}
        ref={ref}
      >
        {children}
      </div>
    </>,
    wrapperElement
  );
}
