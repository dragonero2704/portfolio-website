"use client"
import { MutableRefObject, useRef } from "react"
import dynamic from "next/dynamic";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const randomChar = () => {
    return chars.charAt(Math.floor(Math.random()*chars.length))
}

const randomWord = (length:number)=>
{
    let res = "";
    for(let i = 0; i < length; i++)
    {
        res+=randomChar()
    }
    return res
}
  
const animate = (target:string, ref:MutableRefObject<any>)=>{
    ref.current = randomWord(target.length)
    console.log(ref.current)
}

export default function AnimatedText ({content})
{
    const genTextRef = useRef(content);
    animate(content, genTextRef)
    return <span>{genTextRef.current}</span>
}