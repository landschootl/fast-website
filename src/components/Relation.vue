<template>
    <div>
        <ModalAdaptive/>
        <v-parallax :src="require('@/assets/cover2.jpg')" height="380">
            <v-layout column align-center justify-center>
                <div class="headline white--text mb-3 text-xs-center" style="font-size: 30px;">Vous avez un besoin ?</div>
                <em style="font-size: 19px;">N'hésitez pas à nous en faire part !</em>
                <RelationForm/>
            </v-layout>
        </v-parallax>
    </div>
</template>

<script>
    import RelationForm from "./RelationForm";

    export default {
        name: "Relation",
        components: {
            RelationForm
        }
    }
</script>

<style scoped>

</style>