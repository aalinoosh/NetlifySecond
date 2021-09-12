import React, { useEffect, useRef, useState } from "react"
import Grid from "./Grid"
import { subtract, add } from "./Svg"

interface IProps {
  open?: boolean
  className?: string
  header: string | React.ReactNode
  children: React.ReactNode
  idNumber2: string
}

const Collapsible: React.FC<IProps> = ({
  open,
  className = "",
  children,
  header,
  idNumber2,
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const [idn, setIdn] = useState<number>(idNumber2 ? idNumber2 : 0)
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
      <div className={` ${className}`}>
        <div>
          <div 
            onClick={handleFilterOpening}
            className="col-span-4 md:col-span-12 flex justify-between   cursor-pointer"
          >
            <Grid>
              <div className="col-span-4 md:col-span-1 md:pb-8 md:my-4   cursor-pointer">
                {idn < 10 ? `0${idn}` : idn}
              </div>
              <div
                className={`col-span-10 col-start-1 md:col-span-10 md:col-start-2 block  font-primary pb-8 md:my-4 ${className}`}
              >
                {header}
              </div>
              <button
                type="button"
                className={` flex items-center col-span-1  col-start-12 align-top justify-end cursor-pointer bg-transparent  bg-no-repeat focus:outline-none ${className}`}
              >
                {isOpen ? subtract : add}
              </button>
            </Grid>
          </div>
        </div>

        <div
          className={` overflow-hidden  border-b-1 collapsible-content-edonec`}
          style={{ height }}
        >
          <div ref={ref}>
            <Grid>
              <div className=" hidden md:col-span-1 md:block "></div>
              <div
                className={`col-span-4 font-primaryLight  md:col-span-10 md:col-start-2 pb-8  ${className}`}
              >
                {children}
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collapsible
