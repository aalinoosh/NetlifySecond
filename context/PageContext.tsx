import { createContext, useState } from "react"
import tailwindConfig from "../tailwind.config"
import useBreakpoint from "../hooks/useBreakpoint"

export interface PageContextType {
  coverVisible: boolean
  setCoverVisible: React.Dispatch<React.SetStateAction<boolean>>
  footerVisible: boolean
  setFooterVisible: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
  isTablet: boolean
}

export function usePageContext(): PageContextType {
  const [coverVisible, setCoverVisible] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  const isMobile = useBreakpoint(
    `(max-width: ${tailwindConfig.theme.screens.sm})`
  )
  const isTablet = useBreakpoint(
    `(min-width: ${tailwindConfig.theme.screens.sm}) and (max-width: ${tailwindConfig.theme.screens.lg})`
  )

  return {
    coverVisible,
    setCoverVisible,
    footerVisible,
    setFooterVisible,
    isMobile,
    isTablet,
  }
}

const pageContextValue: PageContextType = {
  coverVisible: false,
  setCoverVisible: () => undefined,
  footerVisible: false,
  setFooterVisible: () => undefined,
  isMobile: false,
  isTablet: false,
}

export const PageContext = createContext<PageContextType>(pageContextValue)
