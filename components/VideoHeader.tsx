import { FC,ReactElement, useState, useEffect } from "react"
import ReactPlayer from "react-player"
import { APIAsset } from "../types/common"
import makeAssetURL from "../lib/makeAssetURL"
import Container from "./Container"
import Appear from "./Appear"
import { player, playerMobile } from "./Svg"
import HTMLText from "./HTMLText"
import Grid from "./Grid"
import { PageContext } from "../context/PageContext"



const VideoHeader: FC= ({
  
}): ReactElement => {
  
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
          url="https://www.youtube.com/watch?v=uMa7_umV5fI"
        />
      </div>

      <Grid>
        <div className="col-span-4 ">
          <Appear>
          <HTMLText
            className="font-primaryNormal  md:leading-3 md:text-big1"
            text="Lorem ipsum derit in voluptate velit esse cillum dolore eu 
            fin culpa qui officia deserunt mollit anim id est laborum."
          />
          </Appear>
        </div>
      </Grid>
    </Container>
  )
}
export default VideoHeader
