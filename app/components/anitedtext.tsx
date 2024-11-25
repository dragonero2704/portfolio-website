"use client"
import { MutableRefObject, useState } from "react"

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


  
const animate = (target:string, setter:CallableFunction)=>{
    const frame = (timestamp)=>
    {
        setter(randomWord(target.length))
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame)
}

export default function AnimatedText ({content})
{
    const [genText, genTextSet] = useState(content);
    animate(content, genTextSet)
    return <span>{genText}</span>
}