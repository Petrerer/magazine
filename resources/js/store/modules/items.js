const urlItems="/main-api/items/";

const state = {
    items:[],
}

//getters to wywoływane metody
const getters = {
    getItems:state=>state.items            //funkcja getItems o arg state zwraca state.items
}

const mutations = {
    setItems(state,data){
        state.items=data;
    }
}

const actions = {
    listItems(state,VueComponent){
        VueComponent.$http.get(urlItems+"list")
        .then(response=>{
            console.log(response.body.items);
            state.commit("setItems",response.body.items);
        })
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}