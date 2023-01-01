import ItemsList from "./components/Items/List"
import CategoriesList from "./components/Categories/List"
import Gallery from "./components/Gallery/List"

export default {
    mode: 'history',
    routes:[
        {
            name:ItemsList,
            component:ItemsList,
            path:"/items/list"
        },
        {
            name:CategoriesList,
            component:CategoriesList,
            path:"/categories/list"
        },
        {
            name:Gallery,
            component:Gallery,
            path:"/gallery"
        },
    ]
}
