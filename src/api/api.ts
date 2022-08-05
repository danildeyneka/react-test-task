import axios from "axios";

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/glebov-g/frontend-fake-db/'
})

export const apiRequest = {
    getCategories: () => {
        return instance.get('categories')
            .then(res => res.data)
            .catch(e => console.log(e))
    },
    getItems: () => {
        return instance.get('items')
            .then(res => res.data)
            .catch(e => console.log(e))
    }
}