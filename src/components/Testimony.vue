<template>
    <v-carousel light hide-delimiters>
        <v-carousel-item>
            <img :src="require('../assets/testimony_background.jpg')" />
        </v-carousel-item>
        <v-carousel-item>
            <img :src="require('../assets/testimony_background.jpg')" />
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "Testimony",
    }
</script>

<style scoped>

</style>