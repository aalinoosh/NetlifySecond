import { React, useState } from "react"
import Appear from "./Appear"
import Grid from "./Grid"
import HTMLText from "./HTMLText"
import Image from "./Image"
import { CategoryItems } from "../types/common"

type Props = {
  item: CategoryItems
}
const IWBCategoryItemsMenu: FC<Props> = ({ items }): ReactElement => {
  const [active, setActive] = useState(0)

  return (
    <div className=" mb-8 border-b-1 border-primary">
      <Grid>
        <div
          key={items.id}
          className="col-span-4 md:col-span-9 flex flex-row border-b-1 border-gray font-primaryBold md:text-bigger2 mr-4 mb-8 "
        >
          {items.map(item => (
            <TabItemComponent
              key={item.key}
              title={item.props.title}
              onItemClicked={() => setActive(item.props.index)}
              isActive={active == item.props.index}
            />
          ))}
        </div>
      </Grid>
      <div>
        {items.map(item => {
          return active == item.props.index ? (
            <div key={item.props.index}>
              <Grid>
                <div className="col-span-4  md:col-span-4 my-4 ">
                  <Appear>
                    <HTMLText
                      className="font-primaryLight  md:mb-10"
                      text={item.props.text}
                    />
                  </Appear>
                </div>
              </Grid>

              {item.props.items.map(tabItem => (
                <div key={tabItem.key} className="pb-4 mb-4 md:mb-8 md:pb-8">
                  <div className="flex ">
                    <Grid>
                      <div className="col-span-4 md:col-span-4 overflow-hidden mb-4 md:mb-0">
                        <Appear>
                          <Image
                            className="py-1 my-1"
                            src={tabItem.props.image}
                          />
                        </Appear>
                      </div>
                      <div className="col-span-4 md:col-span-5 md:col-start-5">
                        <Appear>
                          <div className="mr-2 pr-2 ">
                            <h2 className="font-primaryBold mb-4 md:text-bigger2 md:pb-2">
                              {tabItem.props.title}
                            </h2>
                            <h2 className="font-primaryBold md:text-bigger2 md:leading-28 pb-1">
                              {tabItem.props.subtitle}
                            </h2>

                            <HTMLText
                              className="font-primaryLight col-span-4 w-full md:col-span-5 mr-20 pb-4"
                              text={tabItem.props.text}
                            />

                            {typeof tabItem.props.listTitle !== "undefined" && (
                              <>
                                <HTMLText
                                  className="font-primaryLight col-span-4 w-full md:col-span-5 mr-20 pb-4"
                                  text={tabItem.props.listText}
                                />
                              </>
                            )}
                          </div>
                        </Appear>
                      </div>
                    </Grid>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )
        })}
      </div>
    </div>
  )
}

export default IWBCategoryItemsMenu

const TabItemComponent: FC<Props> = ({
  title = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = true,
}): ReactElement => {
  return (
    <div
      className={`text-small  mr-6 hover:text-secondary  tabitemmark focus:text-secondary bp-2 mb-3  md:mr-20 ${
        isActive ? "tabitem" : ""
      }`}
      onClick={onItemClicked}
    >
      <Appear>
        <h2 className="md:text-bigger1">{title}</h2>
      </Appear>
    </div>
  )
}
