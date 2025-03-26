"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

interface CycleArgs {
  children: Array<ReactNode>;
  interval?: number;
}

export default function Cycle({ children, interval = 5000 }: CycleArgs) {
  children = Array.isArray(children) ? children : [children];
  const [selected, setSelected] = useState(children[0]);
  const intervalRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const cycle = (children) => {
      let count = 0;
      return setInterval(() => {
        count = (count + 1) % children.length;
        setSelected(children[count]);
      }, interval);
    };
    intervalRef.current = cycle(children);
    return clearInterval.bind(null, intervalRef.current as NodeJS.Timeout);
  }, [children, intervalRef, interval]);
  return <>{selected}</>;
}
