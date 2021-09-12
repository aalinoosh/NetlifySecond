// Dependencies
import { ReactElement } from "react"

const components = {}

function importAll(r) {
  r.keys().forEach(key => {
    const filename = key.match(/([a-zA-Z0-9]+)\.tsx$/)
    if (filename) {
      components[filename[1]] = r(key).default
    }
  })
}

importAll(require.context(__dirname, true))

const ComponentIterator = ({ modules }): ReactElement => {
  return (
    <>
      {modules &&
        modules.map((m, index) => {
          // if (process.env.HIDEELEMENTS === "production" && m.hide === true) {
          //   return null
          // }
          if (m.hide === true) {
            return null
          }
          if (typeof components[m.name] === "undefined") {
            console.log(`Module not found: ${m.name}`)
            return (
              <span
                key={index}
                style={{ display: "none" }}
                data-error={`Module not found: ${m.name}`}
              />
            )
          }
          const Component = components[m.name]
          if (!m.props) {
            m.props = {}
          }
          return (
            <Component {...m.props} key={index}>
              {m.props.components && (
                <ComponentIterator modules={m.props.components} />
              )}
            </Component>
          )
        })}
    </>
  )
}

export default ComponentIterator
