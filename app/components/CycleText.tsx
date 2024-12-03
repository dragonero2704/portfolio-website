"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react"

interface CycleArgs{
    children: Array<any>, 
    cycleTime?:number
}

export default function Cycle({children, cycleTime = 5000} : CycleArgs)
{
    children = Array.isArray(children) ? children : [children]
    const [selected, setSelected] = useState(children[0])
    const intervalRef = useRef<NodeJS.Timeout>()
    const cycle = (children)=>{
        let count = 0;
        return setInterval(()=>{
            count = (count + 1) % children.length
            setSelected(children[count])
        }, cycleTime)
    }
    const stopCycle = (intervalId)=>{
        clearInterval(intervalId as NodeJS.Timeout)
    }
    useEffect(()=>{
        intervalRef.current = cycle(children)
        return stopCycle.bind(null, intervalRef.current)
    }, [children])
    return <>{selected}</>
}