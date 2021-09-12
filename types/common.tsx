export type MenuItem = {
  id: string
  label: string
  href: string
  hide: boolean
}

export type APIAssetSize = {
  width: number
  height: number
}

export type APIAsset = {
  name?: string
  resizable?: boolean
  size?: APIAssetSize
  sizes?: [number]
}

export type FileType = {
  name?: string
  type?: string
  size?: number
  originalName?: string
  resizable?: boolean
  quality: number

  sizes?: [number]

}

export type VideoType = {
  src: string
  alt?: string
  width: number
  height: number
  autoplay?: boolean
  focused: boolean
}

export type ListItem = {
  title: string
  text: string
  ctaLabel?: string
  ctaLink: string
  image: APIAsset
  backgroundImage?: APIAsset
}

export type CategoryItems = {
  title: string
  subtitle: string
  text: string
  image: APIAsset
  ctaLabel?: string
  ctaLink?: string
}

export type NewsletterForm = {
  text: string
  label: string
  placeholder: string
  privacy: {
    text: string
    ctaText: string
    ctaLink: string
  }
  btnText: string
}

export type SocialItem = {
  props: SocialItemsProps
}
export type SocialItemsProps = {
  alt: string
  link: string
  image: APIAsset
}

// export type FooterProps = {
//   termsLabel: string
//   termsLink: string
//   imageSocial1: APIAsset
//   altSocial1: string
//   link1: string
//   imageSocial2: APIAsset
//   altSocial2: string
//   link2: string
//   imageSocial3: APIAsset
//   altSocial3: string
//   link3: string
//   copyright: string
//   legalLabel: string
//   legalLink: string
//   policyLabel: string
//   policyLink: string
//   isMobile: boolean
//   image: APIAsset
//   titleMobile: string
//   titleDesktop: string
//   subtitle: string
//   text: string
//   inputLabel: string
//   inputPlaceholder: string
//   terms: string
//   ctaLabel: string
//   social: [SocialItem]
//   literalErrors: Record<string, string>
// }

// export type JobOpeningsItem = {
//   props: JobTypeProps
// }

// export type JobTypeProps = {
//   title: string
//   text: string
//   ctaLabel: string
//   ctaLink: string
// }

// export type ArticleItemType = {
//   titleDesktop: string
//   titleMobile: string
//   title: string
//   text: string
//   image: APIAsset
//   ctaLabel: string
//   ctaLink: string
// }
