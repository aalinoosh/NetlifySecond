import React from "react"
import Container from "./Container"
import { APIAsset } from "../types/common"
import { logo } from "./Svg"
import Appear from "./Appear"
import HTMLText from "./HTMLText"
import Image from "./Image"
import Grid from "./Grid"

type Props = {
  subtitle: string
  image: APIAsset
}

const Footer: FC<Props> = ({ subtitle, image }): ReactElement => {
  return (
    <Container>
      <Grid>
        <div className="col-span-4 md:col-span-12 w-full my-2  ">
          <Appear>
            <div>
              <Image
                src={image}
                classes="w-full h-full object-cover relative"
              ></Image>
              <div className="absolute inset-y-3/5  inset-x-1/5  text-small md:inset-x-1/3 md:inset-y-3/4 font-primaryBold md:text-bigger3 text-light mx-auto ">
                <div className=" text-center h-6 w-16 md:h-12 md:w-60 md:mb-8 mx-auto ">
                  {logo}
                </div>

                <HTMLText className="mb-10 text-center" text={subtitle} />
              </div>
            </div>
          </Appear>
        </div>
      </Grid>
    </Container>
  )
}

export default Footer
