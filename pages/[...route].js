import isEqual from 'lodash/isEqual'
import MainPage from '../components/Page'
const fs = require('fs')


export default function Page(props) {
  return (
    <MainPage {...props} />
  )
}

export async function getStaticPaths() {

  try {
    const res = await fetch(`${process.env.API_URL}config`)
    const data = await res.json()
    if (!data) {
      return {}
    }

    const routesData = data.routes.map(route => ({
      route: route.route,
      url: route.api.url,
    }))

    fs.writeFileSync(__dirname + '/routes.json', JSON.stringify(routesData))

    return {
      paths: data.routes.map(route => ({
        params: {
          ...route,
        }
      })), 
      fallback: false,
    }
  } catch (e) {
    console.log('Error getStaticPaths', e)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export async function getStaticProps({ params }) {

  const rawData = fs.readFileSync(__dirname + '/routes.json')
  const routes = JSON.parse(rawData)

  const route = routes.find(item => isEqual(item.route, params.route))

  try {
    const res = await fetch(`${process.env.API_URL}${route.url}`)
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