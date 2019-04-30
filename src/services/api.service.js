import FormService from './form.service';

export default {

    createQuote() {
        fetch('http://localhost:8080/api/v1/quotes', {
            method: 'POST',
            body: JSON.stringify(FormService.registration),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                FormService.registration.id = data.id;
            })
    },

    updateQuote() {
        fetch(`http://localhost:8080/api/v1/quotes/${FormService.registration.id}`, {
            method: 'PUT',
            body: JSON.stringify(FormService.registration),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => response.json())
            .then((data) => {
            })
    },

    validateQuote() {
        fetch(`http://localhost:8080/api/v1/quotes/${FormService.registration.id}/validate`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => response.json())
            .then((data) => {
            })
    }
}