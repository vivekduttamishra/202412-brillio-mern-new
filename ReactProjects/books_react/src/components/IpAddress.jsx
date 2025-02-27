import { useState,useEffect } from "react"
import { getPublicIp } from "../utils/public-ip";

const IpAddress= ()=>{
    
    const [ip,setIp]=useState(null);

    useEffect(()=>{
        getPublicIp().then(ip=>setIp(ip))
    },[])
    
    return (
        <span>{ip}</span>
    )
}

export default IpAddress;