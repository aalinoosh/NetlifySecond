/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { FC, useRef, useState, ReactElement } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Appear from "./Appear"

type Props = {
  href?: string
  onClick?: () => unknown
  children: string
  className?: string
}

const Cta: FC<Props> = ({
  href,
  onClick,
  children,
  className = "",
}): ReactElement => {
  const wrapper = useRef<HTMLSpanElement>(null)
  const [mouseOver, setMouseOver] = useState(false)

  if (
    (typeof href === "undefined" && typeof onClick === "undefined") ||
    (typeof href !== "undefined" && typeof onClick !== "undefined")
  ) {
    throw Error(`invalid props on Cta component: pass either href or onClick`)
  }

  const containerClassname = `border-link  pb-2 mb-2 text-secondary  cursor-pointer hover: focus:outline-none text-center ${className}`

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const content = (
    <motion.span
      ref={wrapper}
      className="relative inline-block py-4 pr-5 text-2xl uppercase rounded-full lg:text-4xl pl-7 font-druk ring-3 ring-current"
    >
      <Appear>
        <span className="pointer-events-none">{children}</span>
      </Appear>
      <motion.span
        aria-hidden
        className="absolute flex items-center justify-center overflow-hidden bg-current rounded-full pointer-events-none select-none -inset-3px"
        // style={{ clipPath: motionTemplate }}
      >
        {children}
      </motion.span>
    </motion.span>
  )

  if (typeof onClick !== "undefined") {
    return (
      <Appear>
        <button
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
          className={containerClassname}
        >
          <span className={mouseOver ? "customLinkHover" : "customLink"}>
            {children}
          </span>
        </button>
      </Appear>
    )
  }

  if (href.charAt(0) === "/") {
    return (
      <Appear>
        <Link href={href}>
          <a className={`border-link text-secondary pb-2 mb-2 `}>{children}</a>
        </Link>
      </Appear>
    )
  }

  return (
    <Appear>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClassname}
      >
        {children}
      </a>
    </Appear>
  )
}

export default Cta
