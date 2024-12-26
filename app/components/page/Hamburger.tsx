"use client";
import defaultCss from "./hamburger.module.scss";
import { MouseEvent } from "react";

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
 * @returns 
 */
export default function Hamburger({ callable, customCss }: HamburgerArgs) {
  const click = (event: MouseEvent) => {
    const ham = event.target
    if (ham) ham.classList.toggle(customCss ? customCss.clicked : defaultCss.clicked);
  };
  return (
    <div
      className={customCss ? customCss.hamburger : defaultCss.hamburger}
      onClick={(event) => {
        // first handle click event on the hamburger
        click(event);
        // then handle callable function supplied by parameter
        if (callable) callable.call(null)
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
