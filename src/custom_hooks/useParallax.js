import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function useParallax (isVisible) {
    const [initPos, setInitPos] = useState(null);
    const [parallaxIndex, setParallaxIndex] = useState(0);
    const prog = useSelector((state) => state.scroll.counterY);
  
    useEffect(() => {
      if (isVisible) {
        if (!initPos) {
          setInitPos(prog);
        } else {
          if (prog < initPos) {
            setInitPos(null);
          } else {
            setParallaxIndex(prog - initPos);
          }
        }
      }
    }, [isVisible, prog]);

    return parallaxIndex;
}