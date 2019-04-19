<template>
    <v-toolbar class="white">
        <v-toolbar-title class="headline text-uppercase">
            <v-avatar :size="40">
                <img src="../assets/logofast.png" alt="avatar">
            </v-avatar>
            <span id="title"> {{title}} </span>
            <span id="company-name-text" class="font-weight-light">- {{company_name}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$route.path.includes('blog')" to="/blog" flat>Blog</v-btn>
            <v-btn v-else to="/home" flat>Home</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            title: "FAST",
            company_name: "davidson"
        })
    }
</script>

<style scoped>
    #company-name-text {
        font-weight: 200;
        font-size: 20px;
    }
    #title {
        font-weight: 600;
    }
</style>