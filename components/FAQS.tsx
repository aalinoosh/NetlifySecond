import { React, useContext } from "react"
import Container from "./Container"
import { APIAsset } from "../types/common"
import Appear from "./Appear"
import HTMLText from "./HTMLText"
import FAQSCategory from "./FAQSCategory"
import Grid from "./Grid"
import CollapsibleMobile from "./CollapsibleMobile"
import makeAssetURL from "../lib/makeAssetURL"
import { PageContext } from "../context/PageContext"
import FAQSCategoryItem from "./FAQSCategoryItem"

type TitleCategoryProps = {
  title: string
  item: Array<FAQSCategoryItemProps>
}

type FAQSCategoryProps = {
  name: string
  key: string
  props: TitleCategoryProps
}

type Props = {
  title: string
  title2: string
  subtitle: string
  backgroundImage: APIAsset
  items: Array<FAQSCategoryProps>
}

const FAQS: FC<Props> = ({
  title,
  title2,
  backgroundImage,
  subtitle,
  items,
}): ReactElement => {
  const { isMobile } = useContext(PageContext)
  const bgMob = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 700,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0vw -30vh",
  }
  const bgDesk = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 1400,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "65vw -30vh",
  }

  return (
    <div className="bg-primary pb-20 md:pb-28" style={isMobile ? bgMob : bgDesk}>
      <Container className="text-indigo">
        <Grid>
          <div className="col-span-4 md:col-span-6  mt-8  ">
            <Appear>
              <h2 className="font-primaryNormal  md:mt-20 md:leading-150  text-bigger3 md:text-huge4 ">
                {title}
                {isMobile && <span className="ml-2">{title2}</span>}
              </h2>
            </Appear>
          </div>

          <div className="col-span-4  col-start-1 md:col-span-6  md:flex  md:justify-end  md:col-start-6 md:col-end-13 ">
            <h2 className="font-primaryNormal md:flex hidden  md:mt-10 md:leading-150  text-bigger3 md:text-huge4 ">
              <Appear> {title2}</Appear>
            </h2>
          </div>

          <div className="col-span-12 mr-10 md:mr-40 md:border-none  md:mb-20 md:col-span-4 md:col-start-1">
            <Appear>
              <HTMLText text={subtitle} />
            </Appear>
          </div>

          <div className="col-span-12 ">
            <Grid>
              <div className="col-span-3">
                <Grid>
                  <div className="md:col-span-12 hidden md:block">
                    {items.map((item, index) => (
                      <FAQSCategory
                        key={item.key}
                        Category={item.props}
                        index={item.key}
                        active={index}
                      />
                    ))}
                  </div>
                </Grid>
              </div>
              <div className="col-span-4  hidden md:block md:col-span-8 md:col-start-5 ">
                <div className={`overflow-hidden  collapsible-content-edonec`}>
                  <Grid>
                    {items.map((item, index) => (
                      <div
                        key={item.key}
                        id={item.key}
                        className={`col-span-4 otherhidden md:col-span-12 ${
                          index === 0 ? "" : "hidden"
                        }`}
                      >
                        {item.props.items.map((item, index) => (
                          <FAQSCategoryItem
                            key={item.key}
                            question={item.props.question}
                            answer={item.props.answer}
                            idNumber={index + 1}
                          />
                        ))}
                      </div>
                    ))}
                  </Grid>
                </div>
              </div>
              <div className="col-span-4 cursor-pointer md:hidden md:col-span-8 md:col-start-5 ">
                <div className={`overflow-hidden  collapsible-content-edonec`}>
                  <Grid>
                    <div className="col-span-4 ">
                      {items.map(item => (
                        <CollapsibleMobile
                          key={item.key}
                          close
                          className="font-primaryBold text-base"
                          header={item.props.title}
                        >
                          {items.map((item, index) => (
                            <div key={item.key} id={item.key}>
                              <div>
                                {item.props.items.map((item, index) => (
                                  <FAQSCategoryItem
                                    key={item.key}
                                    question={item.props.question}
                                    answer={item.props.answer}
                                    idNumber={index + 1}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </CollapsibleMobile>
                      ))}
                    </div>
                  </Grid>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default FAQS
