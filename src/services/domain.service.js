// import Axios from 'axios';
//
// const RESOURCE_NAME = 'api/catalogs';
//
// export default {
//     getAll() {
//         return Axios.get(RESOURCE_NAME);
//     }
// };


export default {
    getAll() {
        return [
            {
                name: "domaine1",
                icon: "how_to_reg",
                skills: [
                    {
                        name: "competence1"
                    },
                    {
                        name: "competence2"
                    },
                    {
                        name: "competence3"
                    },
                    {
                        name: "competence4"
                    },
                    {
                        name: "competence5"
                    }
                ]
            },
            {
                name: "domaine2",
                icon: "how_to_reg",
                skills: [
                    {
                        name: "competence6"
                    },
                    {
                        name: "competence7"
                    },
                    {
                        name: "competence8"
                    },
                    {
                        name: "competence9"
                    },
                    {
                        name: "competence10"
                    }
                ]
            },
            {
                name: "domaine3",
                icon: "how_to_reg",
                skills: [
                    {
                        name: "competence10"
                    },
                    {
                        name: "competence11"
                    },
                    {
                        name: "competence12"
                    },
                    {
                        name: "competence13"
                    },
                    {
                        name: "competence14"
                    }
                ]
            },
            {
                name: "domaine4",
                icon: "how_to_reg",
                skills: [
                    {
                        name: "competence10"
                    },
                    {
                        name: "competence11"
                    },
                    {
                        name: "competence12"
                    },
                    {
                        name: "competence13"
                    },
                    {
                        name: "competence14"
                    }
                ]
            }
        ];
    }
};