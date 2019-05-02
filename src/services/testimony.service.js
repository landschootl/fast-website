export default {
    getAllTestimony() {

        return [{"nom":"Nicolas Dupont","image":"","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, leo ac rutrum mollis, augue libero pharetra nibh, nec blandit velit nisl commodo turpis. Aenean non laoreet ipsum"},{"nom":"Amanda Selosse","image":"","description":"Vestibulum sed dictum tortor, ut varius felis. Vestibulum viverra facilisis urna. In at diam tincidunt, sollicitudin leo id, pretium velit. Duis a congue velit, sodales tincidunt erat"},
            {"nom":"Valentin Tarantino","image":"","description":"Phasellus et iaculis urna. Sed quis augue odio. Donec felis libero, tempus pharetra dui a, iaculis venenatis elit. Vestibulum efficitur lectus quis elit malesuada ullamcorper"},{"nom":"Isabelle leroy","image":"","description":"Nunc eu malesuada nunc, vitae interdum enim. Aliquam consectetur ultricies turpis, vel malesuada augue aliquam vitae. Quisque sagittis velit non nunc interdum, vel dictum erat commodo."}];
        /*return fetch('http://localhost:8080/api/v1/domains')
            .then((response) => response.json())
            .then((data) => {
                return data;
            })*/
    }
};