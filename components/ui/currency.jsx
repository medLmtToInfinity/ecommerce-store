"use client"
import { formatter } from "@/lib/utils"
import { useEffect, useState } from "react"
import bigDecimal from "js-big-decimal";

function Currency( { value } ) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, []);
    if(!isMounted) return null;
  return (
    <span className="inline-block font-semibold">
        {formatter.format(new bigDecimal(value).getValue())}
    </span>
  )
}

export default Currency