"use client"
import React, { useState , useEffect} from 'react'

const useMounted = () => {
    const [mounted, setMounted] = useState(false)
     useEffect(() => {
        setMounted(true)
      }, [])
  return mounted
}

export default useMounted
