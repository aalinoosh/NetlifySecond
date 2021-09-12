import Head from "next/head"
import ComponentIterator from "./ComponentIterator"
import VideoHeader from "./VideoHeader"

type Meta = {
  title: string
  description: string
}

type Props = {
  meta: Meta
  components?: []
}

const Page: React.FC<Props> = ({
  meta,
  components,
}: Props): React.ReactElement => {
  return (
    <>
      {/* <Head>
        {typeof meta.title === 'string' && <title>{meta.title}</title>}
        {typeof meta.description === 'string' && <meta name="description" content={meta.description} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
       <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
      {/* <ComponentIterator modules={components} /> */}
      <VideoHeader modules={components} />
    </>
  )
}

export default Page
