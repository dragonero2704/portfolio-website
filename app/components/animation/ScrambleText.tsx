"use client";
import { useEffect, useRef, useState } from "react";

// const CHARS = "!@#$%^&*():{};|,.<>/?";
const CHARS = "abcdefghijklmnopqrstuvwxyz!#$%^&*():{};|,.<>/?";

interface ScrambleArgs {
  children: Array<any> | string;
  interval?: number;
  cycles?: number;
}

export default function ScrambleText({
  children,
  interval = 30,
  cycles = 2,
}: ScrambleArgs) {
  // convert children prop to string
  children = Array.isArray(children)
    ? children.join("")
    : (children as string);
  const TARGET = children as string;
  // hooks
  const intervalRef = useRef<NodeJS.Timeout>();
  const [text, setText] = useState(children);

  // useEffect
  useEffect(() => {
    const scramble = (word: string, cycles: number, interval: number) => {
      let counter = 0;
      return setInterval(() => {
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
      }, interval);
    };

    intervalRef.current = scramble(TARGET, cycles, interval);
    return clearInterval.bind(null, intervalRef.current as NodeJS.Timeout);
  }, [TARGET, intervalRef, interval, cycles]);

  return <>{text}</>;
}
