<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
        <v-dialog v-model="dialog" persistent max-width="900px">
                <template v-slot:activator="{ on }">
                    <v-btn class="blue lighten-2 mt-5" dark large v-on="on">Demander un devis</v-btn>
                </template>
                <v-card>
                    <v-btn icon id="btn_clear" @click="dialog = false">
                        <v-icon>clear</v-icon>
                    </v-btn>
                    <v-card-title>
                        <span class="headline">Demande de devis</span>
                    </v-card-title>
                    <v-card-text>
                        <v-stepper v-model="step" class="no-border">
                            <v-stepper-header class="no-border">
                                <v-stepper-step :complete="step > 1" step="1">Choix des compétences</v-stepper-step>
                                <v-divider/>
                                <v-stepper-step :complete="step > 2" step="2">Informations personnelles</v-stepper-step>
                                <v-divider/>
                                <v-stepper-step step="3">Récapitulatif</v-stepper-step>
                            </v-stepper-header>
                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <Catalog
                                            v-bind:showCheckbox="true"
                                            v-on:next="nextstep"/>
                                </v-stepper-content>
                                <v-stepper-content step="2">
                                    <Formulary v-on:next="nextstep"/>
                                    <v-btn color="blue darken-1" flat @click="step = 1">Retour</v-btn>
                                </v-stepper-content>
                                <v-stepper-content step="3">
                                    <Recap v-on:finish="validate"/>
                                    <v-btn color="blue darken-1" flat @click="step = 2">Retour</v-btn>
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
    import Catalog from './Catalog';
    import Formulary from "./Formulary";
    import Recap from './Recap';
    import FormService from '../services/form.service';
    import ApiService from '../services/api.service';

    export default {
        name: "RelationForm",
        components : {
            Catalog,
            Formulary,
            Recap
        },
        created() {
            this.registration = FormService.registration;
        },
        data: () => ({
            step: 0,
            dialog: false,
            domains: [],
            registration : {}
        }),
        methods : {
            nextstep() {
                this.step++;
            },
            validate() {
                if(this.registration.skills.length > 0) {
                    this.dialog = false;
                    this.step = 1;
                    FormService.reset();
                }
            }
        }
    }
</script>

<style>
    .no-border {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    
    #btn_clear {
        right: 0px;
        position: absolute;
        z-index: 1;
    }
</style>