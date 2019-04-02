<template>
    <v-toolbar class="white">
        <v-toolbar-title class="headline text-uppercase">
            <v-avatar :tile="tile" :size="40">
                <img src="../assets/logofast.png" alt="avatar">
            </v-avatar>
            <span id="title"> {{title}} </span>
            <span id="company-name-text" class="font-weight-light">- by {{company_name}}</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            title: "PROJET FAST",
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