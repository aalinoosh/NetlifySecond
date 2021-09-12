const makeAssetURL = ({ asset, size, webp = false }) => {
  // console.log("asset",asset)
  if (asset.resizable) {
    const parts = asset.name.split(".")
    const extension = parts[parts.length - 1]
    parts.pop()
    // console.log('1', `${process.env.NEXT_PUBLIC_ASSETS_URL}${process.env.NEXT_PUBLIC_ASSETS_URL_RESIZED}${parts.join("")}-w${size}-q${asset.quality}.${webp ? "webp" : extension}`)
    return `${process.env.NEXT_PUBLIC_ASSETS_URL}${process.env.NEXT_PUBLIC_ASSETS_URL_RESIZED}${parts.join("")}-w${size}-q${asset.quality}.${webp ? "webp" : extension}`
  }
  // console.log('2', `${process.env.NEXT_PUBLIC_ASSETS_URL}${asset.name}`)
  return `${process.env.NEXT_PUBLIC_ASSETS_URL}${asset.name}`
}

export default makeAssetURL