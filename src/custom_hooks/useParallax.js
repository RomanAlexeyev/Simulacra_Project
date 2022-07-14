import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useWindowDimensions from "./useWindowDimensions";

export default function useParallax (isVisible) {
    const [initPos, setInitPos] = useState(null);
    const [parallaxIndex, setParallaxIndex] = useState(0);
    const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);
    const prog = useSelector((state) => isTouchDevice ? state.scroll.scrollTop : state.scroll.counterY);
    const { height } = useWindowDimensions();
    const third = Math.round(height/3.5);
  
    useEffect(() => {
      if (isVisible) {
        if (!initPos) {
          setInitPos(prog);
        } else {
          if (prog < initPos) {
            setInitPos(null);
          } else {
            let calced = prog - initPos;
            setParallaxIndex(isTouchDevice ? (calced/third + 1) : calced);
          }
        }
      }
      if (prog === 0) {
        setInitPos(null);
        setParallaxIndex(0);
      }
    }, [isVisible, prog]);

    return parallaxIndex;
}