import makeInterestEntryComponent from "./interestComponent.js";


const renderInterests = (allInterestEntries) => {
    const interestsContainer = document.getElementById("interestsAddedContainer");
    interestsContainer.innerHTML = "";
    allInterestEntries.forEach(interest => {
        interestsContainer.innerHTML += makeInterestEntryComponent(interest) ;
    })

};

export default renderInterests