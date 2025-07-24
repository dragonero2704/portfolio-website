"use client";
import { useRouter } from "next/navigation";
import defaultCss from "./hamburger.module.scss";
import { MouseEvent, useState } from "react";

interface HamburgerArgs {
  callable?: Function;
  /**
   * Custom css is an object that must have defined the following css classes
   * - .hamburger 
   * - .clicked gets added at a click event to handle css animation
   */
  customCss?:{readonly [key:string]:string};
}
/**
 * 
 * @param callable
 * @param customCss 
 * Custom css is an object that must have defined the following css classes
 * - .hamburger 
 * - .clicked gets added at a click event to handle css animation
 * @returns 
 */
export default function Hamburger({ callable, customCss }: HamburgerArgs) {
  const [isOpen, setOpen] = useState(false)
  
  const click = (event: MouseEvent) => {
    const ham = document.querySelector(customCss ? `.${customCss.hamburger}` : `.${defaultCss.hamburger}`);
    if (ham) ham.classList.toggle(customCss ? customCss.clicked : defaultCss.clicked);
    if (callable) callable.call(null)
      setOpen(!isOpen)
  };

  return (
    <div
      className={customCss ? customCss.hamburger : defaultCss.hamburger}
      onClick={(event)=>{click(event)}}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
