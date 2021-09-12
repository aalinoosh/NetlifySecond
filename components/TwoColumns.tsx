import { React, useContext } from "react"
import Container from "./Container"
import { APIAsset } from "../types/common"
import makeAssetURL from "../lib/makeAssetURL"
import Appear from "./Appear"
import HTMLText from "./HTMLText"
import TutorialPreview from "./TutorialPreview"
import { PageContext } from "../context/PageContext"
import Grid from "./Grid"
import Cta from "./Cta"

type Props = {
  key: string
  title: string
  text: string
  ctaLabel: string
  ctaLink: string
  backgroundImage: APIAsset
  subtitle: string
}

const TwoColumns: FC<Props> = ({
  title,
  text,
  ctaLabel,
  ctaLink,
  backgroundImage,
  subtitle,
  items,
}): ReactElement => {
  const { isMobile } = useContext(PageContext)

  // const [imgurl, setImgurl] = useState()

  // useEffect(() => {
  //   if (typeof backgroundImage != "undefined") {
  //     const assetURL = makeAssetURL({
  //       asset: backgroundImage,
  //       size: 1400,
  //     })
  //     setImgurl(assetURL)
  //   }
  // }, [backgroundImage])

  const bgMob = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 700,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "25% 75%",
    backgroundSize: "contain",
  }
  const bgDesk = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 700,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
    // backgroundSize:" 50vw 80vh"
    // backgroundSize:" 700px 1366px"
  }

  return (
    <div style={isMobile ? bgMob : bgDesk}>
      <Container>
        <Grid>
          <div className="col-span-4  mt-4">
            <Appear>
              <h1 className="font-primaryBold leading-9  text-bigger3 md:text-big4  md:leading-4">
                {title}
              </h1>
              <HTMLText text={text} className=" py-6" />

              <Cta href={ctaLink} className=" text-secondary font-primaryBold ">
                {ctaLabel}
              </Cta>
            </Appear>
          </div>

          <div className="col-span-4  mt-8 md:col-span-12 md:col-start-6 md:row-start-1">
            <Appear>
              <HTMLText className="mb-10" text={subtitle} />{" "}
            </Appear>

            {items.map(item => (
              <TutorialPreview key={item.key} item={item.props} />
            ))}
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default TwoColumns
