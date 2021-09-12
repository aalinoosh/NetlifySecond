import isEqual from 'lodash/isEqual'
import MainPage from '../components/Page'

export default function Page(props) {
  return (
    <MainPage {...props} />
  )
}

export async function getStaticProps({ params }) {

  try {
    const res = await fetch(`${process.env.API_URL}page?language=en&model=Page&id=home`)
    const data = await res.json()
    if (!data) {
      return {
        props: {},
      }
    }
    return {
      props: data,
    }
  } catch (e) {
    console.log('Error getStaticPaths', e)
    return {
      props: {}
    }
  }
}