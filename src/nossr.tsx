"use client"
import dynamic from "next/dynamic";

export default dynamic(()=>Promise.resolve(NOSSR), {ssr:false})

function NOSSR({children})
{
    return children
}