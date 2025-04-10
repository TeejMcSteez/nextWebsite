/**
 * Credit:
 * https://thibault.sh/react-hooks/use-key-press
 * 
 * This would have been a pain to figure out otherwise thank you!
 */

import { useState, useEffect } from "react";

interface KeyEvent {
  key: string;
}

export function useKeyPress(targetKey: string): boolean {
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyEvent): void => {
    if (event.key === targetKey) {
      setIsKeyPressed(true);
    }
    };
  
    const handleKeyUp = (event: KeyEvent): void => {
    if (event.key === targetKey) {
      setIsKeyPressed(false);
    }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  
    return (): void => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);
  
  return isKeyPressed;
}