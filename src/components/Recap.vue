<template>
    <div>
        <h3>Informations personnelles</h3><v-divider></v-divider>
        <h4><v-icon>account_circle</v-icon></h4>
        <p>{{registration.name}}</p>
        <h4><v-icon>call</v-icon></h4>
        <p>{{registration.phone}}</p>
        <h4><v-icon>email</v-icon></h4>
        <p>{{registration.mail}}</p>
        <h3>Vos compétences choisies</h3><v-divider></v-divider>
        <v-chip close v-for="skill in registration.skills" @input="remove(skill)">{{skill.title}}</v-chip>
    </div>
</template>

<script>

    import FormService from '../services/form.service';

    export default {
        name: "Recap",
        created() {
          this.registration = FormService.getRegistration();
        },
        data: () => ({
            registration : null
        }),
        methods: {
            remove(item) {
                this.registration.skills.splice(this.registration.skills.indexOf(item),1);
            }
        }
    }
</script>

<style scoped>

</style>