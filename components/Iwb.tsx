import React from "react"
import Container from "./Container"
import Appear from "./Appear"
import HTMLText from "./HTMLText"
import Grid from "./Grid"

type IWBCategoryMenu = {
  title: string
  ctaLink: string
  index: string
}
type Props = {
  title: string
  subtitle: string
  items: Array<IWBCategoryMenu>
}

const IWB: FC<Props> = ({ title, subtitle, items }): ReactElement => {

  const executeScroll: FC<Props> = inputKey => {
    const element = document.getElementById(inputKey)
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  return (
    <Container className="md:pb-10 z-10">
      <Grid>
        <div className="col-span-4  md:col-span-6">
          <Appear>
            <h3 className="font-primaryNormal leading-11">{title}</h3>
            <HTMLText
              className="font-primaryNormal text-big2 leading-40 md:leading-90 md:text-big6"
              text={subtitle}
            />
          </Appear>
        </div>

        <div className=" hidden justify-center items-end col-span-4  md:flex  md:col-span-3 md:col-start-10 ">
          <Appear>
            {items.map(item => (
              <div
                key={item.key}
                className="mb-8 pb-8 flex  border-b-1 border-primary hover:text-secondary  hover:border-b-1 hover:border-secondary  focus:outline-none"
                onClick={() => executeScroll(item.props.iwbcategoryid)}
              >
                <span className="font-primaryBold mr-8">
                  {item.props.index}
                </span>
                <HTMLText
                  className="font-primaryBold "
                  text={item.props.title}
                />
              </div>
            ))}
          </Appear>
        </div>
      </Grid>
    </Container>
  )
}
export default IWB
