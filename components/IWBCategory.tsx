import { React, useState, useEffect, useContext } from "react"
import Container from "./Container"
import { APIAsset, CategoryItem } from "../types/common"
import makeAssetURL from "../lib/makeAssetURL"
import Appear from "./Appear"
import HTMLText from "./HTMLText"
import IWBCategoryItems from "./IWBCategoryItems"
import { PageContext } from "../context/PageContext"
import CollapsibleMobile from "./CollapsibleMobile"
import Grid from "./Grid"

export type StepsWrapperProps = {
  title: string
  backgroundImage: APIAsset
  items: Array<CategoryItem>
}

type Props = {
  key: string
  title: string
  index: string
  iwbcategoryid: string
  backgroundImage: APIAsset
  items: Array<StepsWrapperProps>
}

const IWBCategory: FC<Props> = ({
  title,
  items,
  backgroundImage,
  iwbcategoryid,
  index,
}): ReactElement => {
  const { isMobile } = useContext(PageContext)
  const bgMob = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 700,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "50vw  40vh",
    backgroundPosition: "left 20vh",
  }
  const bgDesk = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 1400,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "30vw  50vh",
    backgroundPosition: "left 50vh",
  }

  return (
    <div style={isMobile ? bgMob : bgDesk}>
      <Container>
        <Grid>
          <div className="col-span-4 md:hidden md:col-span-12 border-b-1 md:mb-2 border-primary">
            <CollapsibleMobile
              close
              className="font-primaryBold text-base"
              header={title}
              headerindex={index}
            >
              <div className="col-span-4 md:col-span-12 ">
                <Appear>
                  <div>
                    <div className="col-span-4  md:col-span-4 mt-2 pb-4">
                      <HTMLText
                        className="font-primaryNormal  text-bigger1 md:text-big4 md:leading-54"
                        text={title}
                      />
                    </div>

                    {items.map(StepsWrapper => (
                      <div key={StepsWrapper.key} className="py-2">
                        <HTMLText
                          className="font-primary  md:text-big1 py-4 md:leading-40 md:my-8 border-400"
                          text={StepsWrapper.props.title}
                        />
                        {StepsWrapper.props.items.map(item => (
                          <IWBCategoryItems key={item.key} item={item} />
                        ))}
                      </div>
                    ))}
                  </div>
                </Appear>
              </div>
            </CollapsibleMobile>
          </div>
          <div className="col-span-4 hidden md:block md:col-span-12 my-40 mt-4 ">
            <Appear>
              <div id={iwbcategoryid}>
                <Grid>
                  <div className="col-span-4  md:col-span-4  mt-4">
                    <HTMLText
                      className="font-primaryNormal  text-bigger1  md:text-big4 md:leading-54 "
                      text={title}
                    />
                  </div>
                </Grid>

                {items.map(StepsWrapper => (
                  <div key={StepsWrapper.key} className="mb-4 pb-2" >
                    <HTMLText
                      className="font-primaryBold  md:text-big1 py-4  md:leading-40 md:my-8"
                      text={StepsWrapper.props.title}
                    />
                    {StepsWrapper.props.items.map(item => (
                      <IWBCategoryItems key={item.key} item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </Appear>
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default IWBCategory
