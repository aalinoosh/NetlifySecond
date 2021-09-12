import ReactMarkdown from "react-markdown"

type Props = {
  text: string
  className?: string
  fontStyle?: string
}

const HTMLText: React.FC<Props> = ({
  text,
  className = "my-2 ",
  fontStyle = " ",
}: Props): React.ReactElement => {
  return (
    <div className={`markdown customList ${fontStyle} ${className}`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default HTMLText
