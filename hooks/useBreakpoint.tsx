import { useState, useEffect } from "react"

export default function useBreakpoint(mediaQuery: string): boolean | undefined {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  function handleChange(event: MediaQueryListEvent): void {
    setIsMobile(event.matches)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia(mediaQuery)
    setIsMobile(mq.matches)
    mq.addEventListener("change", handleChange)
    return () => mq.removeEventListener("change", handleChange)
  }, [mediaQuery])

  return isMobile
}
