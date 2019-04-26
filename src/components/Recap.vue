<template>
    <div>
        <v-container>
            <h3>Informations personnelles</h3><v-divider></v-divider>
            <v-icon>account_circle</v-icon>
            {{registration.name}}<br><br>
            <v-icon>call</v-icon>
            {{registration.tel}}<br><br>
            <v-icon>email</v-icon>
            {{registration.mail}}<br><br>
            <v-icon>notes</v-icon>
            {{registration.description}}<br><br>
            <h3>Vos compétences choisies</h3><v-divider></v-divider>
            <v-chip v-for="skill in registration.skills" @input="remove(skill)">{{skill.title}}</v-chip>
        </v-container>
        <v-btn class="btn_continue" color="primary" @click="validate">Envoyer</v-btn>
    </div>
</template>

<script>

    import FormService from '../services/form.service';
    import ApiService from '../services/api.service';


    export default {
        name: "Recap",
        created() {
          this.registration = FormService.registration;
        },
        data: () => ({
            registration : {}
        }),
        methods: {
            remove(item) {
                this.registration.skills.splice(this.registration.skills.indexOf(item),1);
            },

            validate() {
                //ApiService.updateQuote();
                //ApiService.validateQuote();
                this.$emit('finish');
            }
        }
    }
</script>

<style scoped>

    .btn_continue {
        right: 0px;
        position: absolute;
    }

</style>