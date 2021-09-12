import { React, useContext } from "react"
import Container from "./Container"
import { APIAsset } from "../types/common"
import makeAssetURL from "../lib/makeAssetURL"
import { PageContext } from "../context/PageContext"
import Appear from "./Appear"
import HTMLText from "./HTMLText"
import Image from "./Image"
import Grid from "./Grid"
import Cta from "./Cta"

type Props = {
  title: string
  text: string
  ctaLink: string
  ctaLabel: string
  image: APIAsset
  backgroundImage: string
}

const TutorialCircle: FC<Props> = ({
  title,
  text,
  ctaLink,
  ctaLabel,
  image,
  backgroundImage,
}): ReactElement => {
  const { isMobile } = useContext(PageContext)
  const bgMob = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 700,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-50px 20%",
    backgroundSize: "contain",
  }
  const bgDesk = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 700,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "8vw 8vh",
  }

  return (
    <div className="bg-white pb-20" style={isMobile ? bgMob : bgDesk}>
      <Container className="md:py-10 ">
        <Grid>
          <div
            className="col-span-4  mt-10 md:col-span-5 "
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <Appear>
              <Image className="py-2 my-1" src={image} />
            </Appear>
          </div>

          <div className="col-span-4 mt-20 mb-10 md:col-span-6  md:col-start-8 md:mt-40 ">
            <Appear>
              <h1 className="primaryLight leading-9 text-bigger3 md:text-big4  md:leading-4">
                {title}
              </h1>
              <HTMLText text={text} className=" py-6" />
              <Cta href={ctaLink} className=" text-secondary font-primaryBold ">
                {ctaLabel}
              </Cta>
            </Appear>
          </div>
        </Grid>
      </Container>
    </div>
  )
}
export default TutorialCircle
