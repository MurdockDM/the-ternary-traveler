import apiManager from "./apiManager.js";

const poiHiddenID = document.getElementById("hiddenInterestEntryId")
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
};


const pointOfInterestFactory = () => {
    const parsedCountry = parseInt(poiCountry.value);
    return {
        placeId: parsedCountry,
        name: poiName.value,
        description: poiDescription.value,
        cost: poiCost.value,
        review: poiReview.value
      };
    }

const updateInterestEntry = (entryID) => {
    apiManager.getInterestEntryDataForEdit(entryID)
        .then(interestEntry => {
            poiHiddenID.value = interestEntry.id;
            poiName.value = interestEntry.name;
            poiDescription.value = interestEntry.description;
            poiCost.value = interestEntry.cost;
            poiReview.value = interestEntry.review;
            poiCountry.value = interestEntry.placeID
        })
}    


const eventListenerHandler = {
    saveInterestAddEventListener () {
        const saveButton = document.getElementById("interestSaveBtn");

        saveButton.addEventListener("click", () => {
            

            if (poiCountry == "" || poiName == "" || poiDescription == "" || poiCost == "") {
                alert("All fields except review are required.");
            } else {
                apiManager.addInterestEntry(pointOfInterestFactory())
                    .then(clearFormFields())
            }
        })
    },
    editButtonAddEventListener () {
        const entriesBox = document.getElementById("editInterestsContainer")
        entriesBox.addEventListener("click", () => {
            console.log("edit listener is working")
            
            if (event.target.id.startsWith("editEntry-")) {
               const entryToEdit = event.target.split("-")[1]
               updateInterestEntry(entryToEdit);
            }
        })
    }



};








export default eventListenerHandler