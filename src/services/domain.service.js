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