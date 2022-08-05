import {FC, useEffect, useState} from "react";
import './News.scss'
import Articles from "./Articles/Articles";
import Categories from "./Categories/Categories";
import {apiRequest} from "../../api/api";
import {TabsDataType, CategoriesType, ItemsType} from "../../types/types";
import preloader from '../../assets/images/Spinner.gif'

const News: FC = () => {

    const [items, setItems] = useState<ItemsType>([])
    const [categories, setCategories] = useState<CategoriesType>([])
    const [tab, setTab] = useState<TabsDataType>({id: 1, name: 'Блог'})

    useEffect(() => {
        const fetchData = async () => {
            const categories = await apiRequest.getCategories()
            setCategories(categories)
            const items = await apiRequest.getItems()
            setItems(items)
        }
        fetchData()
    }, [])

    if (categories.length === 0 || items.length === 0) return <div className='preloader'>
        <img src={preloader} alt="preloader"/></div>

    return <>
        <Categories categories={categories} setTab={setTab} tab={tab}/>
        <div className='line'/>
        <Articles items={items} tab={tab}/>
    </>
}

export default News