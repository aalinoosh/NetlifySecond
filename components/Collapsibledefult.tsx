import React, { useEffect, useRef, useState } from "react"
import Grid from "./Grid"

interface IProps {
  open?: boolean
  className?: string
  header: string | React.ReactNode
  // headerClassName?: string
  // titleClassName?: string
  // iconButtonClassName?: string
  // contentClassName?: string
  // contentContainerClassName?: string
  // collapsibleClassName?: string
}

const Collapsible: React.FC<IProps> = ({
  open,
  className = "",

  // collapsibleClassName = "collapsible-card-edonec",
  // headerClassName = "collapsible-header-edonec",
  // titleClassName = "title-text-edonec",
  // iconButtonClassName = "collapsible-icon-button-edonec",
  // contentClassName = "collapsible-content-edonec",
  // contentContainerClassName = "collapsible-content-padding-edonec",
  children,
  header,
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0)
  const ref = useRef<HTMLDivElement>(null)
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
      <div className={`col-span-4   md:col-span-12 ${className}`}>
        <Grid>
          <div className="col-span-4 md:col-span-12  border-2   border-blue-400 ">
            <Grid>
              <div
                className={`col-span-4  md:col-span-4 mb-8  border-2  border-red-400   flex  justify-between	p-5 ${className}`}
              >
                <div className={`block  ${className}`}>{header}</div>
                <button
                  type="button"
                  className={`cursor-pointer bg-transparent  bg-no-repeat  border-none   overflow-hidden   focus:outline-none ${className}`}
                  onClick={handleFilterOpening}
                >
                  <span
                    className={`fas-edonec fa-chevron-down-edonec ${
                      isOpen
                        ? "down rotate-center-edonec down"
                        : "up rotate-center-edonec up"
                    }`}
                  />
                </button>
              </div>
              <div className="col-span-4  md:col-span-8 md:col-start-5">
                <div
                  className={`overflow-hidden  border-b-2  collapsible-content-edonec`}
                  style={{ height }}
                >
                  <div ref={ref}>
                    <div className={`p-4 md:p-8 ${className}`}>{children}</div>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  )
}

export default Collapsible
