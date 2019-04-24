<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field v-model="name"
                                 :rules="nameRules" label= "Nom" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="phone"
                                  :rules="phoneRules" label="Téléphone" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="email"
                                  :rules="emailRules" label="E-mail" required>
                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 md8>
                <v-textarea v-model="description"
                              label="Description">
                </v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
        <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Cochez pour continuer!']"
                label="Cochez pour continuer"
                required>
        </v-checkbox>
    </v-form>
</template>

<script>
    export default {
        name: "Formulary",

        data: () => ({
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Le nom est requis'
            ],
            email: '',
            emailRules: [
                v => !!v || 'Le mail est requis',
                v => /.+@.+/.test(v) || 'Le format de données est invalide'
            ],
            phoneRules: [
                v => !!v || 'Le numéro de téléphone est requis',
                v => /^0[1-6]\d{8}$/.test(v) || 'Le format de données est invalide'
            ]
        }),
    }
</script>

<style scoped>

</style>