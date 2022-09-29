import Vue from "vue";

const urlCategories="/main-api/categories/";

const state = {
    categories:[],
    category:{
        id:0,
        name:""
    }
}

//getters to wywoływane metody
const getters = {
    getCategories:state=>state.categories,
    getCategory:state=>state.category,
    getCategoryId:state=>state.category.id
}

const mutations = {
    setCategories(state,data){
        state.categories=data;
    },
    setCategory(state,data)
    {
        state.category=data;
    },
    setCategoryId(state,data){
        state.category.id=data;
    }
}

const actions = {
    listCategories(state,VueComponent){
        VueComponent.$http.get(urlCategories+"list")
        .then(response=>{
            state.commit("setCategories",response.body.categories);
        })
    },

    async destroyCategory(state,VueComponent){
        var id=state.getters.getCategoryId;
        await VueComponent.$http.delete(urlCategories+"destroy/"+id)
        .then(response=>{
            console.log(response);
        })
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}