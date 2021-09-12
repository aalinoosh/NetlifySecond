import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { throttle } from "lodash"
import useOnIntersection from "../hooks/useOnIntersection"

type Props = {
  children: React.ReactNode
  active?: boolean
  keyboardActive?: boolean
}

const CustomCursor: React.FC<Props> = ({
  children,
  active,
}): React.ReactElement => {
  const wrapperEl = useRef<HTMLDivElement>(null)
  const cursorEl = useRef<HTMLDivElement>(null)
  const [renderCursor, setRenderCursor] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 })

  async function handleMouseMove(event: MouseEvent): Promise<void> {
    if (cursorEl.current === null) return
    const { width, height } = cursorEl.current.getBoundingClientRect()
    const { pageX, pageY } = event
    setDisplacement({
      x: pageX - width / 2,
      y: pageY - height / 2,
    })
  }

  const throttleMouseMove = throttle(handleMouseMove, 30)

  const intersecting = useOnIntersection(
    wrapperEl,
    ({ isIntersecting }) => setRenderCursor(isIntersecting),
    { rootMargin: "50%" }
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    if (intersecting) window.addEventListener("mousemove", throttleMouseMove)
    return () => window.addEventListener("mousemove", throttleMouseMove)
  }, [intersecting])

  return (
    <>
      <motion.div
        ref={wrapperEl}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
      >
        {children}
      </motion.div>
      <AnimatePresence initial={false}>
        {renderCursor && (
          <motion.div
            ref={cursorEl}
            aria-hidden
            className="absolute top-0 left-0 items-center justify-center hidden w-24 h-24 pointer-events-none select-none md:flex text-like"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hovering ? 1 : 0,
              x: displacement.x,
              y: displacement.y,
            }}
            transition={{
              type: "spring",
              damping: 20,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              xmlns="http://www.w3.org/2000/svg"
              variants={{
                active: { scale: 0.75 },
                resting: { scale: 1 },
              }}
              animate={active ? "active" : "resting"}
              transition={{ type: "spring", damping: 10, mass: 0.25 }}
            >
              <g fill="none" fillRule="evenodd">
                <circle stroke="#12CAA0" cx="44" cy="44" r="43.5" />
                <path
                  d="M61.584 50.5a.582.582 0 01-.413-.173.598.598 0 010-.836L66.59 44l-5.42-5.491a.598.598 0 010-.837.58.58 0 01.826 0l5.832 5.909a.598.598 0 010 .837l-5.832 5.908a.582.582 0 01-.413.173M26.416 50.5c.15 0 .3-.058.413-.173a.598.598 0 000-.836L21.41 44l5.42-5.491a.598.598 0 000-.837.58.58 0 00-.826 0l-5.832 5.909a.598.598 0 000 .837l5.832 5.908a.582.582 0 00.413.173"
                  fill="#12CAA0"
                />
              </g>
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CustomCursor
