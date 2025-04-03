/**
 * Credit:
 * https://thibault.sh/react-hooks/use-key-press
 * 
 * This would have been a pain to figure out otherwise thank you!
 */

import { useState, useEffect } from "react";

export function useKeyPress(targetKey) {
    const [isKeyPressed, setIsKeyPressed] = useState(false);
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === targetKey) {
          setIsKeyPressed(true);
        }
      };
  
      const handleKeyUp = (event) => {
        if (event.key === targetKey) {
          setIsKeyPressed(false);
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [targetKey]);
  
    return isKeyPressed;
  }