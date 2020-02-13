import eventListenerHandler from "./events.js";
import apiManager from "./apiManager.js";
import renderInterests from "./dom.js"

apiManager.getAllInterestEntryData().then(renderInterests)
eventListenerHandler.editButtonAddEventListener()


eventListenerHandler.saveInterestAddEventListener();