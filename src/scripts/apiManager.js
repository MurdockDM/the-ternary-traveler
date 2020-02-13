

const baseURL = "http://localhost:8088"

const apiManager = {
    getInterestEntries () {
        return fetch(`${baseURL}/interests`)
            .then(response => response.json())
    },
    addInterestEntry (interestEntry) {
        return fetch(`${baseURL}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestEntry)
        })
    }




}

export default apiManager