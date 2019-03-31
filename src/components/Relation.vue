<template>
    <div>
        <ModalAdaptive/>
        <v-parallax :src="require('@/assets/cover2.jpg')" height="380">
            <v-layout column align-center justify-center>
                <div class="headline white--text mb-3 text-xs-center" style="font-size: 30px;">Vous avez un besoin ?</div>
                <em style="font-size: 19px;">N'hésitez pas à nous en faire part !</em>
                <v-btn class="blue lighten-2 mt-5" dark large @click="$modal.show('example-adaptive')">Demander un devis</v-btn>
            </v-layout>
        </v-parallax>
    </div>
</template>

<script>

    import ModalAdaptive from "./ModalAdaptive";
    export default {
        name: "Relation",
        components: {
            ModalAdaptive

        }
    }
</script>

<style scoped>

</style>