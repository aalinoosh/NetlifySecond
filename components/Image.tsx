// Dependencies
import { FC, ReactElement, useState, useRef, useEffect } from "react"
import makeAssetURL from "../lib/makeAssetURL"
import throttle from "../lib/throttle"

// Types
import { APIAsset } from "../types/common"
import WebP from "../lib/WebP"
import useOnIntersection from "../hooks/useOnIntersection"

type Props = {
  src?: APIAsset
  alt?: string
  classes?: string
  center?: string
  containerStyle?: string
}

const Image: FC<Props> = ({
  src: asset,
  alt,
  classes,
  center,
  containerStyle = "",
}: Props): ReactElement => {
  let lastSize = -1

  const containerClasses = containerStyle
    ? containerStyle
    : `flex ${center ? "items-center justify-center" : "items-start"}`

  const mainRef = useRef(null)
  const [imageSrc, setImageSrc] = useState("")

  const wp = new WebP()
  const loadImage = (): void => {
    let newSize = 0
    wp.isSupported(webpIsSupported => {
      if (asset.sizes && asset.sizes.length) {
        asset.sizes.forEach((size, i) => {
          if (
            (mainRef.current.offsetWidth !== 0 &&
              mainRef.current.offsetWidth > size &&
              asset.size.width > size) ||
            (mainRef.current.offsetWidth === 0 && asset.size.width > size)
          ) {
            newSize = size
            if (typeof asset.sizes[i + 1] !== "undefined") {
              newSize = asset.sizes[i + 1]
            }
          }
        })
      }

      if (newSize > lastSize) {
        const assetURL = makeAssetURL({
          asset,
          size: newSize,
          webp: webpIsSupported,
        })

        const imageToLoad = new window.Image()
        imageToLoad.onload = () => {
          setImageSrc(assetURL)
          lastSize = newSize
        }
        imageToLoad.src = assetURL
      }
    })
  }

  const throttleResize = throttle(loadImage, 1000)

  const intersecting = useOnIntersection(mainRef, undefined, {
    rootMargin: "300%",
  })

  useEffect(() => {
    if (intersecting) {
      loadImage()
      window.addEventListener("resize", throttleResize)
    }
    return () => window.removeEventListener("resize", throttleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersecting])

  return (
    <div
      key={asset.name || "unknown"}
      data-image
      className={containerClasses}
      ref={mainRef}
    >
      {imageSrc && imageSrc.length > 0 && (
        <img className={classes} src={imageSrc} alt={alt} />
      )}
    </div>
  )
}

const ImageComponent: FC<Props> = (props): ReactElement => {
  if (!props.src) return null
  return <Image {...props} />
}

export default ImageComponent
