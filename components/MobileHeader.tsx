import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, MotionProps } from "framer-motion"
import MobileDropDown from "./MobileDropDown"
import { arrow, arrowDiagonal } from "./Svg"
import Grid from "./Grid"

const MobileHeader: React.FC<Props> = ({ items, logo }): React.ReactElement => {
  const [opened, setOpened] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function closeMenuCallback(): void {
    setOpened(false)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    document.querySelector("body").style.overflow = opened
      ? "hidden"
      : "visible"
  }, [opened])

  const menuButtonIconVariants = {
    normal: ({ position }: { position: "top" | "bottom" }) => ({
      backgroundColor: "#17224D",
      rotate: 0,
      width: "1.60rem",
      y: position === "top" ? "-0.25rem" : "0.25rem",
    }),
    close: ({
      position,
    }: {
      position: "top" | "bottom"
      animateColor: boolean
    }) => ({
      rotate: 45 * (position === "top" ? 1 : -1),
      width: "1.75rem",
      y: "-0.016rem",
    }),
  }

  const easeInOutExpoTransition = {
    type: "tween",
    duration: 0.4,
    ease: [0.87, 0, 0.13, 1],
  }

  const navbarStyles =
    "fixed inset-x-0 top-0 h-18 px-4 lg:px-8 xl:px-8 md:px-6 "

  const navbarHideAnimationProps: MotionProps = {
    initial: false,
    // animate: headerHidden ? "hideHeader" : "showHeader",
    // variants: {
    //   hideHeader: { y: "-100%" },
    //   showHeader: { y: "0%" },
    // },
    transition: {
      type: "spring",
      mass: 0.1,
    },
  }

  return (
    <div className="pointer-events-none">
      <motion.div
        className={`z-40 flex items-center justify-end ${navbarStyles}`}
        {...navbarHideAnimationProps}
      >
        <div>
          <button
            type="button"
            className={`
                flex items-center justify-start h-full font-light focus:outline-none text-bigger2 pointer-events-auto  
              `}
            onClick={() => {
              return setOpened(v => !v)
            }}
          >
            <motion.div
              aria-hidden
              className="flex flex-col items-start justify-center  h-7 "
            >
              <motion.div
                custom={{
                  position: "top",
                  animateColor: opened,
                }}
                initial={false}
                animate={opened ? "close" : "normal"}
                variants={menuButtonIconVariants}
                transition={easeInOutExpoTransition}
                className="h-px origin-center transform -translate-y-1 w-1"
              />
              <motion.div
                custom={{
                  position: "bottom",
                  animateColor: opened,
                }}
                initial={false}
                animate={opened ? "close" : "normal"}
                variants={menuButtonIconVariants}
                transition={easeInOutExpoTransition}
                className="h-px origin-center transform translate-y-1  "
              />
            </motion.div>
          </button>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {opened && (
          <div className="fixed inset-0 z-30 w-screen h-screen px-4 text-base pointer-events-auto pb-9 md:pb-24 font-primary md:text-bigger1 text-light lg:px-8 xl:px-8 md:px-6 pt-18">
            <motion.div
              aria-hidden
              className="absolute inset-0 origin-top bg-indigo"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.87, 0, 0.13, 1],
              }}
            />
            <motion.div
              className="relative flex flex-col items-stretch h-full overflow-scroll	 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0 }}
            >
              <div className="md:flex-1">
                <Grid>
                  <div className=" col-span-4 bg-indigo  text-primary">
                    {items.map((categories, index) => (
                      <React.Fragment key={index}>
                        {categories.name == "MenuItemSubmenu" ? (
                          <div className="bg-indigo  border-b-1 border-primary pb-4">
                            <div className="col-span-4">
                              <MobileDropDown
                                key={index}
                                close
                                className=""
                                header={categories.props.title}
                              >
                                <div>
                                  <div>
                                    {categories.props.items && (
                                      <div>
                                        {categories.props.items.map(
                                          (submenu, index) => (
                                            <MobileDropDown
                                              key={submenu.key}
                                              close
                                              isSubmenu
                                              header={submenu.props.title}
                                            >
                                              <div>
                                                {submenu.props.items && (
                                                  <div>
                                                    {submenu.props.items.map(
                                                      (lastchild, index) => (
                                                        <a
                                                          className="py-2 pt-4 font-primaryLight text-small2 block"
                                                          key={lastchild.key}
                                                          href={
                                                            lastchild.props
                                                              .ctaLink
                                                          }
                                                        >
                                                          <span
                                                            key={lastchild.key}
                                                          >
                                                            {
                                                              lastchild.props
                                                                .ctaLabel
                                                            }
                                                          </span>
                                                        </a>
                                                      )
                                                    )}
                                                  </div>
                                                )}
                                              </div>
                                            </MobileDropDown>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </MobileDropDown>
                            </div>
                          </div>
                        ) : (
                          <div className=" border-b-1 border-primary pb-4 text-primary pt-8">
                            <div className=" ">
                              <a
                                key={index}
                                id={categories.key}
                                className=" flex justify-between text-sm  z-40  bg-transparent  md:ml-2  md:mt-0  "
                                href={categories.props.ctaLink}
                              >
                                {categories.props.ctaLabel}
                                <span>{arrow}</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                    <div className=" relative">
                      <a
                        href="#"
                        className="flex w-full text-light justify-center  px-4 py-2 mt-12 bg-secondary rounded-lg   focus:outline-none focus:shadow-outline"
                      >
                        <span className="text-center mr-3">Soy admin</span>
                        <span className="mt-0.5">{arrowDiagonal}</span>
                      </a>
                    </div>
                  </div>
                </Grid>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileHeader
