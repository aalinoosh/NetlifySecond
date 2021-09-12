import { FC, ReactElement, useRef, useState } from "react"
import { motion } from "framer-motion"
import useOnResize from "../hooks/useOnResize"
import Appear from "./Appear"
import CustomCursor from "./CustomCursor"

type Props = {
  children?: Array<ReactElement>
  className?: string
  slideClassName?: string
  customCursorColor: "secondary"
}

const FramerMotionSlider: FC<Props> = ({
  children,
  className = "",
  slideClassName = "",
  customCursorColor,
}): ReactElement => {
  const [maxDragConstraint, setMaxDragConstraint] = useState(0)
  const ref = useRef(null)

  useOnResize(ref, entry => {
    const target = entry.target as HTMLSpanElement
    setMaxDragConstraint(target.offsetWidth - target.scrollWidth)
  })

  return (
    <CustomCursor color={customCursorColor}>
      <div ref={ref} className={`w-full slider ${className}`}>
        <motion.div
          className={`flex items-stretch justify-start space-x-4 lg:space-x-8 ${slideClassName}`}
          drag="x"
          dragElastic={0.5}
          dragConstraints={{ left: maxDragConstraint, right: 0 }}
        >
          {children.map((child, index) => (
            <Appear
              key={index}
              rootMargin="0% 25% 25% 0%"
              className="flex items-stretch"
            >
              {child}
            </Appear>
          ))}
        </motion.div>
      </div>
    </CustomCursor>
  )
}

export default FramerMotionSlider
