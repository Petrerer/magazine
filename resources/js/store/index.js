import Vuex from "vuex"
import Vue from "vue"
import items from "./modules/items" 
import categories from "./modules/categories"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        items,
        categories
    },
})