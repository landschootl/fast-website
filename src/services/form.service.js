export default {
    registration:{
        id: -1,
        name: "",
        tel: "",
        mail: "",
        description: "",
        skills: [],
    },

    getRegistration() {
        return this.registration;
    },

    reset() {
        this.registration.id = -1;
        this.registration.name = "";
        this.registration.tel = "";
        this.registration.mail = "";
        this.registration.description = "";
        this.registration.skills = [];
    }
};