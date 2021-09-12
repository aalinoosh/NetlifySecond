import React from "react"
import Appear from "./Appear"
import Collapsible from "./Collapsible"

type Props = {
  question: string
  answer: string
  className: string
  idNumber: string
}

const FAQSCategoryItem: FC<Props> = ({
  question,
  answer,
  idNumber,
}): ReactElement => {
  return (
    <Appear>
      <div className="bg-primary">
        <div className=" flex flex-row col-span-4  md:col-span-12 mb-8">
          <Collapsible
            close
            className=""
            header={question}
            idNumber2={idNumber}
          >
            {answer}
          </Collapsible>
        </div>
      </div>
    </Appear>
  )
}

export default FAQSCategoryItem
