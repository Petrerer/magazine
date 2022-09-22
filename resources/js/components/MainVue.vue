<template>
    <v-app>
        <v-footer>

            <router-link to="/items/list">
                <v-btn color="primary ma-3">Przedmioty</v-btn>
            </router-link>

            <router-link to="/categories/list">
                <v-btn class="primary white--text ma-3">Kategorie</v-btn>
            </router-link>
            
        </v-footer>
        <v-main>
            <router-view></router-view> 
        </v-main>
    </v-app>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>

<style>
a{
    text-decoration: none;
}
</style>
