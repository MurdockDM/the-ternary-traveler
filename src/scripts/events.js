import apiManager from "./apiManager.js";

const poiName = document.getElementById("interestName");
const poiDescription = document.getElementById("interestDescription");
const poiCost = document.getElementById("interestCost");
const poiReview = document.getElementById("interestReview");
const poiCountry = document.getElementById("countryChoice");


const clearFormFields = () => {
    poiName.value = ""
    poiDescription.value = ""
    poiCost.value = ""
    poiReview.value = ""
    poiCountry.value = ""
}


const eventListenerHandler = {
    saveInterestAddEventListener () {
        const saveButton = document.getElementById("interestSaveBtn");

        saveButton.addEventListener("click", () => {
            const pointOfInterestFactory = () => {
                const parsedCountry = parseInt(poiCountry.value)
                return {
                    placeId: parsedCountry,
                    name: poiName.value,
                    description: poiDescription.value,
                    cost: poiCost.value,
                    review: poiReview.value
                  }
            }

            if (poiCountry == "" || poiName == "" || poiDescription == "" || poiCost == "") {
                alert("All fields except review are required.")
            } else {
                apiManager.addInterestEntry(pointOfInterestFactory())
            }
        })

    }



}








export default eventListenerHandler