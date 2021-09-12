import Head from "next/head"
import ComponentIterator from "./ComponentIterator"

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
      <Head>
        {typeof meta.title === 'string' && <title>{meta.title}</title>}
        {typeof meta.description === 'string' && <meta name="description" content={meta.description} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ComponentIterator modules={components} />
    </>
  )
}

export default Page
