import getPlantCard from '../components/plantCard.js';
import { removePlantListener } from './eventHandlers.js';
import { getElement, getElements, addClass, removeClass } from '../utils/domUtils.js';
import { getUser } from './localStorage.js';
import log from '../utils/logger.js';

export function setupCardsSection(plants) {
    const sectionRef = getElement('.plant-card-section');
    sectionRef.innerHTML = '';
    
    for(let i = 0; i < plants.length; i++) {
        if(i === 6) break;
        sectionRef.appendChild(getPlantCard(plants[i]));
    };
    removePlantListener();
    handleDisplayMoreButton(plants);
}

function handleDisplayMoreButton(plants) {
    const btnRef = getElement('.show-more-button');
    if(plants.length <= 6) {
        addClass(btnRef, 'd-none');
    } else {
        removeClass(btnRef, 'd-none');

        btnRef.addEventListener('click', (event) => {
            if(event.target.innerText === 'Visa färre') {
                btnRef.textContent = 'Visa fler';
                setupCardsSection(plants);
            } else if (event.target.innerText === 'Visa fler') {
                btnRef.textContent = 'Visa färre';
                showMorePlants(plants);
            }
        });
    }
}

function showMorePlants(plants) {
    const sectionRef = getElement('.plant-card-section');
    sectionRef.innerHTML = '';
    
    for(let i = 0; i < plants.length; i++) {
        sectionRef.appendChild(getPlantCard(plants[i]));
    };
    removePlantListener();
}

export function setupFormGui() {
    getElement('#plant-user').value = getUser();
}

export function setupMyPlants(plants) {
    const planted = plants.filter(plant => plant.status === 'planted');
    const planned = plants.filter(plant => plant.status === 'planned');
    displayMyPlannedPlants(planned);
    displayMyPlantedPlants(planted);
}

function displayMyPlannedPlants(plants) {
    const sectionRef = getElement('#myPlannedPlants');
    sectionRef.innerHTML = '';
    for(let plant of plants) {
        sectionRef.appendChild(getPlantCard(plant));
    }
}

function displayMyPlantedPlants(plants) {
    const sectionRef = getElement('#myPlantedPlants');
    sectionRef.innerHTML = '';
    for(let plant of plants) {
        sectionRef.appendChild(getPlantCard(plant));
    }
}