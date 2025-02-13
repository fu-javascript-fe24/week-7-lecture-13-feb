import { getElement, getElements, toggleClass } from "../utils/domUtils.js";
import { addPlant, getPlants, removePlant, removeUser } from "./localStorage.js";
import { validateAddPlantForm } from "./validation.js";
import log from '../utils/logger.js';
import { setupCardsSection } from "./gui.js";

export function setupAddFormListener() {
    getElement('#addPlantForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        if(validateAddPlantForm()) {
            const plants = await getPlants();
            log(plants);
            addPlant({
                id : plants[plants.length - 1].id + 1,
                name : getElement('#plant-name').value,
                date : getElement('#plant-date').value,
                user : getElement('#plant-user').value,
                image : getElement('#plant-link').value,
                status : 'planned'
            });
        }
    });
}

export function removePlantListener() {
    const btnRefs = getElements('.plant-card-button');
    for(let btn of btnRefs) {
        btn.addEventListener('click', async (event) => {
            await removePlant(event.currentTarget.dataset.id);
            const plants = await getPlants();
            log(plants);
            const filtered = plants.filter(plant => plant.status !== 'planted');
            setupCardsSection(filtered);
        })
    }
}

export function setupBurgerBtnHandler() {
    getElement('.burger-btn').addEventListener('click', (event) => {
        toggleClass(event.target, 'open');
        toggleClass(getElement('.navigation'), 'open');
    })
}

export function setupLogoutListener() {
    getElement('#logoutBtn').addEventListener('click', () => removeUser());
}