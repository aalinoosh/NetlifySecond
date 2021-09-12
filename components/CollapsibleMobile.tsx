/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from "react"
import { arrowDropdown, arrowUp } from "./Svg"

interface IProps {
  open?: boolean
  className?: string
  header: string | React.ReactNode
  headerindex?: string
}

const Collapsible: React.FC<IProps> = ({
  open,
  className = "",
  children,
  header,
  headerindex,
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0)
  const ref = useRef<HTMLDivElement>(null)
  const handleFilterOpening = () => {
    setIsOpen(prev => !prev)
  }
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined
    const resizeObserver = new ResizeObserver(el => {
      setHeight(el[0].contentRect.height)
    })
    resizeObserver.observe(ref.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [height, isOpen])
  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height)
    else setHeight(0)
  }, [isOpen])
  return (
    <>
      <div className={`${className}`}>
        <div>
          <div
            onClick={handleFilterOpening}
            className="flex justify-between  py-6 cursor-pointer"
          >
            <div className={` flex flex-row  mr-12 ${className}`}>
              {headerindex && <span className="mr-4">{headerindex}</span>}

              {header}
            </div>
            <button
              type="button"
              className={`cursor-pointer bg-transparent  ml-4 bg-no-repeat  border-none  focus:outline-none ${className}`}
            >
              <span className="fas-edonec text-big1 px-2 fa-chevron-down-edonec rotate-center-edonec">
                {" "}
                {isOpen ? arrowDropdown : arrowUp}
              </span>
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden border-b-1 collapsible-content-edonec`}
          style={{ height }}
        >
          <div ref={ref}>
            <div className={`p-4 ${className}`}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collapsible
