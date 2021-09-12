import { useState, useEffect, MutableRefObject } from "react"

export default function useOnIntersection(
  reference: MutableRefObject<HTMLElement>,
  callback?: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): boolean {
  const [intersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const el = reference.current
    if (el !== null) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
        if (typeof callback === "function") callback(entry)
      }, options)
      observer.observe(el)
      return () => observer.unobserve(el)
    }
  }, [reference, callback, options])

  return intersecting
}
