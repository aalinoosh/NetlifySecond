import { React, useState, useEffect } from "react"
import ReactPlayer from "react-player"
import { APIAsset } from "../types/common"
import makeAssetURL from "../lib/makeAssetURL"
import Container from "./Container"
import Appear from "./Appear"
import { player, playerMobile } from "./Svg"
import HTMLText from "./HTMLText"
import Grid from "./Grid"
import { PageContext } from "../context/PageContext"
import { useContext } from "react"

type Props = {
  videoURL: string
  text: string
  imagePoster: APIAsset
}

const VideoHeader: FC<Props> = ({
  videoURL,
  text,
  imagePoster,
}): ReactElement => {
  const { isMobile } = useContext(PageContext)
  const [imgurl, setImgurl] = useState()

  useEffect(() => {
    if (typeof imagePoster != "undefined") {
      const assetURL = makeAssetURL({
        asset: imagePoster,
        size: 1400,
      })
      setImgurl(assetURL)
    }
  }, [imagePoster])

  return (
    <Container className="md:pb-40 z-10">
      <div className="relative  pt-56 w-full h-0 bg-withe ">
        <ReactPlayer
          className="absolute top-0   left-0 bg-withe "
          controls
          muted
          width="100%"
          height="80%"
          playing={true}
          loop={true}
          url={videoURL}
          playIcon={<button className={`playscale`}> {isMobile ? playerMobile : player} </button>}
          light={imgurl}
        />
      </div>

      <Grid>
        <div className="col-span-4 ">
          <Appear>
          <HTMLText
            className="font-primaryNormal  md:leading-3 md:text-big1"
            text={text}
          />
          </Appear>
        </div>
      </Grid>
    </Container>
  )
}
export default VideoHeader
