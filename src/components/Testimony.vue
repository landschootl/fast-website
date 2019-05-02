<template>
    <v-carousel light hide-delimiters>
        <v-carousel-item  v-for="(testimony, index) in testimonies" :key="index">
            <div id="id_testimony_name">{{testimony.nom}}</div>
            <div id="id_testimony_description">{{testimony.description}}</div>
          <!--  <img id="id_background" :src="require('../assets/testimony_background.jpg')"/>-->
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import TestimonyService from '../services/testimony.service';

    export default {
        name: "Testimony",

        created() {
            /*TestimonyService.getAllTestimony().then((response) => {
                this.domains = response;
            })*/
            this.testimonies = TestimonyService.getAllTestimony();
        },

        data: () => ({
            testimonies: []
        })
    }

</script>

<style scoped>

#id_background {
    background-image: url("../assets/testimony_background.jpg");
}

id_testimony_name {
    text-align: center;
    margin: 0 auto !important;
}

id_testimony_description {
    text-align: center;
    margin: 0 auto !important;
    font-size: 100%;
}

</style>