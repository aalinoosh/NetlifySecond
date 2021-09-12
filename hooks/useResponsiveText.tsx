import { useState, MutableRefObject, useContext } from "react"
import { PageContext } from "../context/PageContext"
import useOnResize from "./useOnResize"

export default function useResponsiveText(
  reference: MutableRefObject<HTMLElement>,
  mobile: {
    screenWidth: number
    remFontSize: number
  },
  desktop: {
    screenWidth: number
    remFontSize: number
  }
): number {
  const { screenWidth: screenWidthMobile, remFontSize: remFontSizeMobile } =
    mobile
  const { screenWidth: screenWidthDesktop, remFontSize: remFontSizeDesktop } =
    desktop

  const { isMobile, isTablet } = useContext(PageContext)
  const [fontSize, setFontSize] = useState(0)

  useOnResize(reference, entry => {
    const target = entry.target as HTMLDivElement
    const newFontSize =
      isMobile || isTablet
        ? (target.offsetWidth * remFontSizeMobile) / screenWidthMobile
        : (target.offsetWidth * remFontSizeDesktop) / screenWidthDesktop
    setFontSize(newFontSize)
  })

  return fontSize
}
