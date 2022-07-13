import { useEffect, useRef } from "react";

function Preloader() {
  const targetRef = useRef(null);
    useEffect(() => {
      const current = targetRef.current;
      return () => {current.style.opacity = 0};
    }, []);

  return (
    <div className="preloader" ref={targetRef}>
      <div className="progress_bar">
        <div className="progress_bar_colored"></div>
      </div>
    </div>
  );
}

export default Preloader;
