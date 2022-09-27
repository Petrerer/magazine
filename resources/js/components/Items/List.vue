<template>
    <v-container>
        <create @createdItem="listItems"/>
        Items

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th>Lp</th>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Kategoria</th>
                <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(item,index) in items"
                :key="item.name"
                >
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.category.name }}</td>
                <td>
                    <v-btn @click="deleteItem(item.id)" color="error" fab x-small>
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>



    </v-container>
</template>

<script>
import store from "../../store/index"
import Create from "./Create"
    export default {
        components:{
            Create
        },
        computed:{
            items(){
                return store.getters.getItems;
            }
        },
        methods:{
            listItems(){
                store.dispatch("listItems",this);
            },
            async deleteItem(id){
                console.log(id);
                store.commit("setItemId",id);
                await store.dispatch("destroyItem",this);
                this.listItems();
            }
        },
        created(){
            this.listItems();
        }
    }
</script>
