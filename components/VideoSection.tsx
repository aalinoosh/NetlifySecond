import { React, useState, useEffect, useContext } from "react"
import ReactPlayer from "react-player"
import { APIAsset, FileType } from "../types/common"
import makeAssetURL from "../lib/makeAssetURL"
import Container from "./Container"
import { player, playerMobile } from "./Svg"
import { PageContext } from "../context/PageContext"
import HTMLText from "./HTMLText"
import Cta from "./Cta"
import Appear from "./Appear"
import Grid from "./Grid"

export type VideoSectionItemProps = {
  title: string
  text: string
  file: FileType
  ctaLabel: string
}

type Props = {
  title: string
  videoURL: string
  text: string
  subtitle: string
  imagePoster: APIAsset
  backgroundImage: APIAsset
  items: Array<VideoSectionItem>
}

const VideoSection: FC<Props> = ({
  title,
  videoURL,
  imagePoster,
  backgroundImage,
  subtitle,
  items,
}): ReactElement => {
  const { isMobile } = useContext(PageContext)
  const [imgurl, setImgurl] = useState()

  useEffect(() => {
    if (typeof backgroundImage != "undefined") {
      const assetURL = makeAssetURL({
        asset: backgroundImage,
        size: 1400,
      })
      setImgurl(assetURL)
    }
  }, [backgroundImage])

  useEffect(() => {
    if (typeof imagePoster != "undefined") {
      const assetURL = makeAssetURL({
        asset: imagePoster,
        size: 1400,
      })
      setImgurl(assetURL)
    }
  }, [imagePoster])

  const bgMob = {
    backgroundImage: "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }
  const bgDesk = {
    backgroundImage: `url(${makeAssetURL({
      asset: backgroundImage,
      size: 1400,
    })})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundSize: "50vw  50vh",
    backgroundPosition: "right bottom",
  }

  // const downloadFile: FC<Props> = (): ReactElement => {
  //   window.location.href =
  //     "https://yoursite.com/src/assets/files/exampleDoc.pdf"
  // }

  return (
    <div className="bg-white mt-10 md:mt-0" style={isMobile ? bgMob : bgDesk}>
      <Container className=" mb-0 ">
        <Grid>
          <div className="col-span-4  md:col-span-9">
            <div className="font-primaryBold  md:text-big1 my-4 mt-8">
              <Appear>{title}</Appear>
            </div>

            <div className="relative pt-56 bg-withe ">
              <ReactPlayer
                className="absolute top-0 left-0 bg-withe "
                controls
                muted
                width="100%"
                height="80%"
                playing={true}
                loop={true}
                url={videoURL}
                playIcon={<button> {isMobile ? playerMobile : player} </button>}
                light={imgurl}
              />
            </div>
          </div>
          <div className="col-span-4  md:col-span-6  md:text-big">
            <Appear>
              <HTMLText
                className="font-primaryBold  md:text-big1  mb-8"
                text={subtitle}
              />

              {items.map(item => (
                <div key={item.key} className="mb-16">
                  <h2 className="font-primaryBold  md:text-base  my-4">
                    {item.props.title}
                  </h2>
                  <HTMLText
                    className="font-primarylight  md:text-base  my-4"
                    text={item.props.text}
                  />
                  <Cta className=" text-secondary font-primaryBold " onClick="">
                    {item.props.ctaLabel}
                  </Cta>
                </div>
              ))}
            </Appear>
          </div>
        </Grid>
      </Container>
    </div>
  )
}
export default VideoSection
