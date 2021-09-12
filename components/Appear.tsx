import { useRef, useState, useEffect } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  callback?: () => void
  onTransitionEnd?: () => void
  direction?: string
}

let observer = undefined

const Appear: React.FC<Props> = ({
  className = "",
  children,
  callback,
  onTransitionEnd,
  direction,
}: Props): React.ReactElement => {
  const [show, setShow] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (show && mainRef.current && observer) {
      observer.unobserve(mainRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, mainRef, observer])
  useEffect(() => {
    if (mainRef.current == null) {
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (callback) {
            callback()
          }
          setShow(true)
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    )
    if (mainRef.current) {
      observer.observe(mainRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef])

  if (direction === "toLeft") {
    return (
      <div
        ref={mainRef}
        onTransitionEnd={onTransitionEnd || undefined}
        className={`${className} overflow-visible transition transform duration-700 ${
          show
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 translate-x-8 translate-y-0"
        }`}
      >
        {children}
      </div>
    )
  }

  if (direction === "toRight") {
    return (
      <div
        ref={mainRef}
        onTransitionEnd={onTransitionEnd || undefined}
        className={`${className} overflow-visible transition transform duration-700 ${
          show
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 -translate-x-8 translate-y-0"
        }`}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      ref={mainRef}
      onTransitionEnd={onTransitionEnd || undefined}
      className={`${className} overflow-visible transition transform duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
      }`}
    >
      {children}
    </div>
  )
}

export default Appear
