<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
        <v-dialog v-model="dialog" persistent max-width="900px">
            <template v-slot:activator="{ on }">
                <v-btn class="blue lighten-2 mt-5" dark large v-on="on">Demander un devis</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Demande de devis</span>
                </v-card-title>
                <v-card-text>
                    <v-stepper v-model="step_panel" class="no-border">
                        <v-stepper-header class="no-border">
                            <v-stepper-step :complete="step_panel > 1" step="1">Choix des compétences</v-stepper-step>
                            <v-divider/>
                            <v-stepper-step :complete="step_panel > 2" step="2">Informations personnels</v-stepper-step>

                            <v-divider/>
                            <v-stepper-step step="3">Récapitulatif</v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">


                                <v-card class="mb-5 no-border" color="lighten-1" height="200px"></v-card>

                            </v-stepper-content>

                            <v-stepper-content step="2">

                                <v-card class="mb-5 no-border" color=" lighten-1" height="200px"></v-card>

                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <v-card class="mb-5 no-border" color=" lighten-1" height="200px"></v-card>

                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
    import DomainService from '../services/domain.service';
    import Catalog from './Catalog'
    import Formulary from "./Formulary";

    export default {
        name: "RelationForm",
        components : {
            Catalog,
            Formulary
        },
        created() {
            // CatalogService.getAll().then((response) => {
            //     throw new Error(response.data);
            // }).catch((error) => {
            //     throw new Error(error.response.data);
            // });
            this.domains = DomainService.getAll();
        },
        data: () => ({
            step_panel: 0,
            dialog: false,
            domains: []
        })
    }
</script>

<style>
    .no-border {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    #id_close_btn, #id_close_btn2, #id_close_btn3 {
        right: 0px;
        position: absolute;
    }
</style>