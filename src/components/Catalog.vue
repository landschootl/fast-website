<template>
    <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <h2 class="headline">Nos formations !</h2>
                <span class="subheading">
                    Un savoir-faire diversifié
              </span>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <v-flex xs12 md3 v-for="domain in domains">
                        <v-card class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">{{domain.icon}}</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">{{domain.name}}</div>
                            </v-card-title>
                            <v-card-text>
                                <ul>
                                    <li v-for="skill in domain.skills">{{skill.name}}</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import DomainService from '../services/domain.service';

    export default {
        name: "Catalog",
        created() {
            // CatalogService.getAll().then((response) => {
            //     throw new Error(response.data);
            // }).catch((error) => {
            //     throw new Error(error.response.data);
            // });
            this.domains = DomainService.getAll();
        },
        data: () => ({
            domains: []
        })
    }
</script>

<style scoped>

</style>