import { React, useState } from "react"
import HTMLText from "./HTMLText"
import Appear from "./Appear"
import Image from "./Image"
import Grid from "./Grid"
import Cta from "./Cta"
import IWBCategoryItemsMenu from "./IWBCategoryItemsMenu"
import { CategoryItems } from "../types/common"

type Props = {
  item: CategoryItems
}

const IWBCategoryItems: FC<Props> = ({ item }): ReactElement => {
  const { title, subtitle, text, image, ctaLink, ctaLabel } = item.props

  const [active, setActive] = useState(0)

  return (
    <div>
      <Grid
        className={`mb-8 pb-8 ${
          item.name == "IWBCategoryItemsConMenu" ? "hidden" : "block"
        }`}
      >
        <div className="col-span-4 mb-2 md:col-span-4">
          <Appear>
            <Image className="py-1 my-1" src={image} />
          </Appear>
        </div>
        <div className="col-span-4 md:col-span-5  md:col-start-5">
          <Appear>
            <div>
              <h2 className="font-primaryBold font-base mb-4 md:text-bigger2 pb-2">
                {title}
              </h2>
              <h2 className="font-primary md:text-bigger2 md:leading-28	 ">
                {subtitle}
              </h2>
              <HTMLText
                className="font-primaryLight mt-1 pb-4 md:mb-8"
                text={text}
              />
              {ctaLink && (
                <Cta
                  href={ctaLink}
                  className=" text-secondary font-primaryLight  "
                >
                  <span> {ctaLabel}</span>
                </Cta>
              )}
            </div>
          </Appear>
        </div>
      </Grid>

      {item.name == "IWBCategoryItemsConMenu" && (
        <div key={item.key} className="md:mb-8">
          <h2 className="font-primaryBold md:mb-4 leading-relaxed md:text-bigger2 pb-8 ">
            {title}
          </h2>
          <div className="mb-4">
            <IWBCategoryItemsMenu key={item.key} items={item.props.items} />
          </div>
        </div>
      )}
    </div>
  )
}

export default IWBCategoryItems
