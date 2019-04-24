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
                    <v-stepper v-model="e1" class="no-border">
                        <v-stepper-header class="no-border">
                            <v-stepper-step :complete="e1 > 1" step="1">Choix des compétences</v-stepper-step>
                            <v-divider/>
                            <v-stepper-step :complete="e1 > 2" step="2">Informations personnelles</v-stepper-step>
                            <v-divider/>
                            <v-stepper-step step="3">Récapitulatif</v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                              <Catalog/>
                                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                                <v-btn id="id_close_btn" color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <Formulary/>
                                <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <v-card class="mb-5 no-border" color=" lighten-1" height="200px"></v-card>
                                <v-btn color="primary" @click="e1 = 1">Envoyer</v-btn>

                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
<!--                    <v-container grid-list-md>-->
<!--                        <v-layout wrap>-->
<!--                            <v-flex xs12 sm6 md4>-->
<!--                                <v-text-field label="Legal first name*" required></v-text-field>-->
<!--                            </v-flex>-->
<!--                            <v-flex xs12 sm6 md4>-->
<!--                                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>-->
<!--                            </v-flex>-->
<!--                            <v-flex xs12 sm6 md4>-->
<!--                                <v-text-field-->
<!--                                        label="Legal last name*"-->
<!--                                        hint="example of persistent helper text"-->
<!--                                        persistent-hint-->
<!--                                        required-->
<!--                                ></v-text-field>-->
<!--                            </v-flex>-->
<!--                            <v-flex xs12>-->
<!--                                <v-text-field label="Email*" required></v-text-field>-->
<!--                            </v-flex>-->
<!--                            <v-flex xs12>-->
<!--                                <v-text-field label="Password*" type="password" required></v-text-field>-->
<!--                            </v-flex>-->
<!--                            <v-flex xs12 sm6>-->
<!--                                <v-select-->
<!--                                        :items="['0-17', '18-29', '30-54', '54+']"-->
<!--                                        label="Age*"-->
<!--                                        required-->
<!--                                ></v-select>-->
<!--                            </v-flex>-->
<!--                            <v-flex xs12 sm6>-->
<!--                                <v-autocomplete-->
<!--                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"-->
<!--                                        label="Interests"-->
<!--                                        multiple-->
<!--                                ></v-autocomplete>-->
<!--                            </v-flex>-->
<!--                        </v-layout>-->
<!--                    </v-container>-->
<!--                    <small>*indicates required field</small>-->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>

<!--                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
    import DomainService from '../services/domain.service';
    import Catalog from './Catalog';
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
            e1: 0,
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