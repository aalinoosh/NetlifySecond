import React, { useEffect, useRef, useState } from "react"
import { arrowDropdown, arrow } from "./Svg"
import Appear from "./Appear"

interface IProps {
  open?: boolean
  className?: string
  isSubmenu?: boolean
  header: string | React.ReactNode
}

const MobileDropDown: React.FC<IProps> = ({
  open,
  className = "",
  children,
  header,
  isSubmenu,
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0)
  const ref = useRef(null)
  const handleFilterOpening = () => {
    setIsOpen(prev => !prev)
  }
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined
    // @ts-ignore
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
      <div className={` ${className}`}>
        <div>
          <div className="flex justify-between pt-8">
            <div onClick={handleFilterOpening}>
              <Appear>{header}</Appear>
            </div>
            <button
              type="button"
              className={`cursor-pointer bg-transparent  bg-no-repeat  border-none  focus:outline-none ${className}`}
              onClick={handleFilterOpening}
            >
              {/* <span
                className={`fas-edonec text-big1 fa-chevron-down-edonec 
                ${
                  isOpen
                    ? `down rotate-center-edonec down`
                    : `up rotate-center-edonec up`
                }`}
              /> */}
              <span className={`${isSubmenu ? "hidden" : ""}`}>
                {isOpen ? arrowDropdown : arrow}
              </span>
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden collapsible-content-edonec`}
          style={{ height }}
        >
          <div ref={ref}>
            <Appear>
              <div className={`${className}`}>{children}</div>
            </Appear>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileDropDown
