<template>
    <v-parallax
            :src="require('@/assets/cover_blog.jpg')"
            height="500">
        <v-layout column align-center justify-center class="white--text">
            <img src="../assets/logofast.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">{{title}}</h1>
            <div class="subheading mb-3 text-xs-center">
                <span>{{description}}</span><br>
                <span class="cyan--text">{{sub_description}}</span>
            </div>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        name: "Cover_Blog",
        data: () => ({
            title: "BLOG"
        })
    }
</script>

<style scoped>

</style>