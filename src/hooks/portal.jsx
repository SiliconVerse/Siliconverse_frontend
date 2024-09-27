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
        className='overflow-hidden size-full z-[9999] bg-black/50 inset-0 fixed flex justify-center items-center'
        ref={ref}
      >
        {children}
      </div>
    </>,
    wrapperElement
  );
}
