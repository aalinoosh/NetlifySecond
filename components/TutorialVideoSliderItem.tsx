import React from "react"
import Image from "./Image"
import Appear from "./Appear"
import Cta from "./Cta"

// Types
import { ListItem } from "../types/common"

type Props = {
  item: ListItem
}

const TutorialVideoSliderItem: FC<Props> = ({ item }): ReactElement => {
  const { title, image, ctaLink, ctaLabel } = item
  return (
    <div>
      <div className="w-72 mb-14 md:w-24 pb-4 ">
        <Appear>
          <Image className="  py-1 my-1" src={image} />

          <h2 className="font-primaryNormal my-8 leading-6 text-bigger1   md:font-bold md:text-bigger2  md:leading-7	">
            {title}
          </h2>
          <Cta href={ctaLink} className=" text-secondary font-primaryBold ">
            {ctaLabel}
          </Cta>
        </Appear>
      </div>
    </div>
  )
}

export default TutorialVideoSliderItem
