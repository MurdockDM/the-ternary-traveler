
const makeInterestEntryComponent = (interestObject) => {
    return `
    <section>
        <div>
          <h4>
           Name of Activity:
          </h4>
          <p>
          ${interestObject.name}
          </p>
        </div>
        <div>
          <h4>
            Description of Activity
          </h4>
          <p>
            ${interestObject.description}
          </p>
        </div>
        <div>
          <h4>Cost of Activity<h4>  
          <p>
            $${interestObject.cost}
          </p>
        </div>
        <div>
          <h4>Review of Activity</h4>
          <p>
            ${interestObject.review}
          </p>
        </div>
        <div>
          <h4>Country of Activity</h4>  
          <p>
            ${interestObject.place.name} 
          </p>
        </div>
        <div>
            <button id="deleteInterest-${interestObject.id}">
            Delete Entry
            </button>
            <button id="editEntry-${interestObject.id}">
            Update Entry
            </button>
        </div>
    </section>
    <hr/>`
};

export default makeInterestEntryComponent;