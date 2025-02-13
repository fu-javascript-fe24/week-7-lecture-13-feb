import log from "../utils/logger.js";

export default function fetchPlants() {
    return fetch('https://santosnr6.github.io/Data/plannedplants.json')
        .then(response => response.json())
        .catch(error => log(error.message));
}