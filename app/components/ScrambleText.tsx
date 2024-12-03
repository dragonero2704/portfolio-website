"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "!@#$%^&*():{};|,.<>/?";

interface ScrambleProps {
  multiText: boolean;
}

export default function ScrambleText({ children }) {
  // hooks
  console.log(children);
  const intervalRef = useRef<NodeJS.Timeout>();
  const [text, setText] = useState(children);

  const TARGET = children as string;
  // scramble function
  useEffect(() => {
    const scramble = (
      word: string,
      cycles: number = 2,
      scrambleInterval: number = 30
    ) => {
      let counter = 0;
      intervalRef.current = setInterval(() => {
        // scramble logic
        let scrambledText = TARGET.split("")
          .map((char, index) => {
            return counter / cycles > index
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        counter++;
        setText(scrambledText);
      }, scrambleInterval);
    };

    const stopScramble = () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };

    scramble(TARGET);
    return stopScramble;
  }, [TARGET, intervalRef]);

  return <>{text}</>;
}
