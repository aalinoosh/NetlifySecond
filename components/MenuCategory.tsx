import React from "react"
import { arrow } from "./Svg"
import Appear from "./Appear"

// type MenuCategoryItemProps = {
//   ctaLabel: string
//   ctaLink: string
// }

// type MenuCategoryProps = {
//   title: string
//   ctaLink: string
//   items: Array<MenuCategoryItem>
// }
type Props = {
  id: string
  parentId: string
  props: Array<StepsWrapperProps>
}

const toggleMenu: FC<Props> = (parentId, id) => {
  const ele1 = document.getElementById(parentId)
  const ele2 = document.getElementById(id)
  ele1.classList.add("hidden")
  ele2.classList.remove("hidden")
}

const MenuCategory: FC<Props> = ({ props, id, parentId }): ReactElement => {
  return (
    <div>
      <ul>
        {props.items != null ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            onClick={() => toggleMenu(parentId, id)}
            // onKeyPress={toggleMenu(parentId, id)}
            role="button"
            tabIndex={0}
            className=" flex justify-between my-2  mt-4 border-b-1  hover:text-secondary  hover:border-b-1 hover:border-secondary  focus:outline-none "
          >
            <Appear>
              <li className="py-2">{props.title}</li>
            </Appear>
            <div> {arrow} </div>
          </div>
        ) : (
          <a
            href={props.ctaLink}
            className=" flex justify-between my-2 mt-4 border-b-1  hover:text-secondary  hover:border-b-2 hover:border-secondary focus:outline-none "
          >
            <Appear>
              <li className="py-2">{props.title}</li>
            </Appear>
            <div>{arrow}</div>
          </a>
        )}
      </ul>
    </div>
  )
}

export default MenuCategory
