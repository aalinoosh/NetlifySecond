/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from "react"
import { APIAsset } from "../types/common"
import { motion, AnimatePresence } from "framer-motion"
import Image from "./Image"
import Appear from "./Appear"
import Container from "./Container"
import MenuCategory from "./MenuCategory"
import MobileHeader from "./MobileHeader"
import { arrow, arrowDiagonal, riclogo } from "./Svg"
import Grid from "./Grid"

// type MenuCategoryItemProps = {
//   ctaLabel: string
//   ctaLink: string
// }

// type MenuCategoryProps = {
//   index: string
//   title: string
//   ctaLink: string
//   items: Array<MenuCategoryItem>
// }

// type MenuItemSubmenuProps = {
//   title: string
//   items: Array<MenuCategory>
// }

type Props = {
  image: APIAsset
  imageLogo: APIAsset
  logo: string
  items: Array<MenuItemSubmenu>
}

const backMenu: FC<Props> = (parentId, id) => {
  const ele1 = document.getElementById(parentId)
  const ele2 = document.getElementById(id)
  ele1.classList.remove("hidden")
  ele2.classList.add("hidden")
}

const Menu: FC<Props> = ({ image, items, logo }): ReactElement => {
  const [open, setOpen] = useState(false)
  const container = useRef(null)

  const handleClickOutside = event => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  return (
    <div className="min-h-24  z-40 ">
      <div className="position: relative">
        <div className="w-full text-primary ">
          <div className="flex flex-col  md:items-center md:justify-between md:flex-row max-w-screen-xxl px-4 pt-4 lg:px-12 w-full mx-auto">
            <div className="flex flex-row items-center justify-between py-2  z-40  ">
              <a
                href="/"
                className="text-lg font-primary tracking-widest md:mt-4 text-primary  uppercase   focus:outline-none focus:shadow-outline"
              >
                <div className="h-8 w-32 md:h-12 md:w-44">{riclogo}</div>
              </a>
            </div>

            <div className="md:hidden">
              <MobileHeader logo={logo} items={items} />
            </div>
            <div className="w-full px-0 z-40 hidden md:block ">
              <nav className="flex-col z-40 flex-grow  font-primary hidden md:flex md:justify-end md:flex-row ">
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.name == "MenuItemSubmenu" ? (
                      <>
                        <Appear className="py-2 ">
                          <a
                            key={index}
                            onClick={() => setOpen(!open)}
                            className="px-2 pr-6 pt-4 text-sm z-40 bg-transparent  py-2  md:mt-0 pb-4  hover:text-secondary   menumark focus:text-secondary  mx-6"
                            href="#"
                          >
                            {item.props.title}
                          </a>
                        </Appear>
                      </>
                    ) : (
                      <>
                        <Appear className="py-2 ">
                          <a
                            key={index}
                            id={item.key}
                            className="px-2 pr-6 pt-4 text-sm  z-40  bg-transparent  py-2   pb-4  md:ml-2  md:mt-0  hover:text-secondary   menumark focus:text-secondary mx-6"
                            href={item.props.ctaLink}
                          >
                            {item.props.ctaLabel}
                          </a>
                        </Appear>
                      </>
                    )}
                  </React.Fragment>
                ))}

                <div className="relative pl-2">
                  <Appear>
                    <a
                      href=""
                      className="flex  w-full text-light justify-center  px-8 py-2  bg-secondary rounded-md focus:outline-none focus:shadow-outline"
                    >
                      <span className="mr-3">Soy admin</span>
                      <span className="mt-0.5">{arrowDiagonal}</span>
                    </a>
                  </Appear>
                </div>
              </nav>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  when: "beforeChidren",
                  ease: [0.87, 0, 0.13, 1],
                }}
                ref={container}
                className="bg-white  hidden md:block min-h-20  left-0 right-0 top-0 p-4  md:p-8 z-30 absolute inset-x-0"
              >
                <Container className="mt-20 ">
                  <Grid>
                    <div className="col-span-5 my-20 md:col-span-5 ">
                      <Appear>
                        <Image src={image}></Image>
                      </Appear>
                    </div>
                    <div className="col-span-4  w-full  my-20  md:col-span-11 md:col-start-8 ">
                      {items.map((categories, index) => (
                        <React.Fragment key={index}>
                          {categories.props.items && (
                            <React.Fragment key={index}>
                              <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{
                                  type: "tween",
                                  duration: 0.4,
                                  delay: 0.1,
                                  ease: [0.87, 0, 0.13, 1],
                                }}
                                key={index}
                                id={categories.key}
                              >
                                {categories.props.items.map(
                                  (submenu, index) => (
                                    <MenuCategory
                                      key={index}
                                      props={submenu.props}
                                      parentId={categories.key}
                                      id={submenu.key}
                                    />
                                  )
                                )}
                              </motion.div>
                              <div>
                                {categories.props.items.map(
                                  (submenu, index) => (
                                    <React.Fragment key={index}>
                                      {submenu.props.items && (
                                        <div
                                          key={index}
                                          className="hidden  border-black"
                                          id={submenu.key}
                                        >
                                          {submenu.props.items.map(
                                            (item, index) => (
                                              // eslint-disable-next-line react/jsx-key
                                              <div id={item.key} key={index}>
                                                <ul className="subMenu">
                                                  <div className=" flex justify-between my-2  mt-4 border-b-1  hover:text-secondary  hover:border-b-1 hover:border-secondary  focus:outline-none">
                                                    <a
                                                      href={item.props.ctaLink}
                                                    >
                                                      <Appear>
                                                        <li className="py-2">
                                                          {item.props.ctaLabel}
                                                        </li>
                                                      </Appear>
                                                    </a>
                                                    <div>{arrow}</div>
                                                  </div>
                                                </ul>
                                              </div>
                                            )
                                          )}

                                          <div
                                            role="button"
                                            className=" font-primaryBold flex hover:text-secondary w-20 mt-10  pb-2  menumark focus:text-secondary"
                                            onClick={() =>
                                              backMenu(
                                                categories.key,
                                                submenu.key
                                              )
                                            }
                                          >
                                            Go Back
                                          </div>
                                        </div>
                                      )}
                                    </React.Fragment>
                                  )
                                )}
                              </div>
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Grid>
                </Container>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Menu
