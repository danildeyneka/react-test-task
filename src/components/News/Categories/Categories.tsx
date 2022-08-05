import {FC} from "react";
import {TabsDataType, CategoriesType} from "../../../types/types";
import './Categories.scss'

type PropsType = {
    categories: CategoriesType
    tab: TabsDataType
    setTab: (tab: TabsDataType) => void
}

const Categories: FC<PropsType> = (props) => {

    const mappedTabs = props.categories.map(item =>
        <span className={`tab__item ${props.tab.name === item.name ? 'tab__active' : ''}`}
              key={item.id} onClick={() => props.setTab(item)}
        >
            {item.name}
        </span>)

    return <div>
        {mappedTabs}
    </div>
}

export default Categories