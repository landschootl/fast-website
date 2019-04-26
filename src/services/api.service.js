import FormService from './form.service';

export default {

    createQuote() {
        fetch('http://localhost:8080/api/quotes', {
            method: 'POST',
            body: JSON.stringify(FormService.getRegistration()),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("quote create ", FormService.getRegistration().id);
                FormService.getRegistration().id = data.id;
            })
    },

    updateQuote() {
        fetch(`http://localhost:8080/api/quotes/${FormService.getRegistration().id}`, {
            method: 'PUT',
            body: JSON.stringify(FormService.getRegistration()),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log('mise à jour ', FormService.getRegistration().id)
            })
    },

    validateQuote() {
        fetch(`http://localhost:8080/api/quotes/${FormService.getRegistration().id}/validate`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log('quote validé ', FormService.getRegistration().id);
            })
    }
}