<template>
    <v-container>
        {{items}}
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th>Lp</th>
                <th>Nazwa</th>
                <th>Lista przedmiotów</th>
                <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(category,index) in categories"
                :key="category.id"
                >
                <td>{{ index+1 }}</td>
                <td>{{ category.name }}</td>


                <td>


                    <v-simple-table>
                        <template v-slot:default>
                        <tbody>
                            <tr
                            v-for="item in category.items"
                            :key="item.id"
                            >
                            <td>{{ item.name }}</td>

                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>


                </td>


                <td>
                  <v-btn @click="deleteCategory(category.id)" color="error"> USUŃ </v-btn>
                </td>

                </tr>
            </tbody>
            </template>
        </v-simple-table>



    </v-container>
</template>

<script>
import store from "../../store/index"
    export default {
        components:{

        },
        computed:{
            categories(){
                return store.getters.getCategories;
            }
        },
        methods:{
            listCategories(){
                store.dispatch("listCategories",this);
            },
            async deleteCategory(id){
                var items = store.getters.getItems;
                console.log(items);
                console.log(id);
                store.commit("setCategoryId",id);
                await store.dispatch("destroyCategory",this);
                this.listCategories();
            }
        },
        created(){
            this.listCategories();
        }
    }
</script>
