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
        return fetch("http://localhost:8080/api/domains")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
               return data;
            });
    }
};


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
/**
 fetch("http://localhost:8080/api/domains", {mode: 'no-cors'})
 .then((response) => response.json())
 .then((data) => console.log(data));
<<<<<<< HEAD
 */
>>>>>>> refactor(catalog): responsive catalog
=======
>>>>>>> refactor(catalog): delete commentary
=======
 */
>>>>>>> refactor(catalog): responsive catalog
=======
>>>>>>> refactor(catalog): delete commentary
