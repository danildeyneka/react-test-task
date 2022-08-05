export type HashtagsType = {
    id: number
    name: string
}

export type ItemsType = Array<{
    id: number
    categoryId: number
    name: string
    image: string
    description: string
    url: string
    tags: HashtagsType[]
}>

export type TabsDataType = {
    id: number
    name: string
}
export type CategoriesType = TabsDataType[]
