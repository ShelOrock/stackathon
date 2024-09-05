import React, { useEffect, useRef } from "react";

const Cursor = ({ children }) => {

  const element = useRef(null);

  useEffect(() => {
    const handleCursor = e => {
      if(element.current) {
        const x = Math.round((e.clientX) / 25) * 25;
        const y = Math.round((e.clientY) / 25) * 25;

        element.current.style.position = "absolute"
        element.current.style.left = `${ x }px`;
        element.current.style.top = `${ y }px`;
        element.current.style.visibility = "visible";
      };
    }; 

    document.addEventListener("mousemove", handleCursor);
    return () => document.removeEventListener("mousemove", handleCursor);
  }, []);

  return <div ref={ element }>{ children }</div>
};

export default Cursor;
