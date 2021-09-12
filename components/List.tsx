import { FC, ReactElement } from "react"
import ReactMarkdown from "react-markdown"

type Props = {
  title?: string
  text: string
  classes?: string
}

const List: FC<Props> = ({ text, title, classes = "" }): ReactElement => {
  return (
    <div className={`${classes}`}>
      <ReactMarkdown className="  font-primaryLight mt-4 markdown customList">

      {text}
      </ReactMarkdown>
    </div>
  )
}

export default List
