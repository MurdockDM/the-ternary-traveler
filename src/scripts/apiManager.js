

const baseURL = "http://localhost:8088";

const apiManager = {
    getInterestEntryDataForEdit(interestEntryID) {
        return fetch(`${baseURL}/interests/${interestEntryID}`)
            .then(response => response.json());
    },
    addInterestEntry(interestEntry) {
        return fetch(`${baseURL}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestEntry)
        })
    },
    getAllInterestEntryData() {
        return fetch(`${baseURL}/interests?_expand=place`)
            .then(response => response.json())
    },
    editInterestEntryData(updatedInterestEntry) {
        return fetch(`${baseURL}/interests/${updatedInterestEntry.id}/?_expand=place`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedInterestEntry)
        })
    }




}

export default apiManager