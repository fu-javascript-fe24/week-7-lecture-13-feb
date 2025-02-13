import { createElement, addClass } from '../utils/domUtils.js';

export default function getPlantCard(plant) {
    const plantCard = createElement('article');
    addClass(plantCard, 'plant-card');
    plantCard.innerHTML = `
            <figure class="plant-card-container">
              <img src="./assets/plant.svg" alt="${plant.name}" />
            </figure>
            <aside class="aside-card-top">
              <h4 class="plant-card-name">${plant.name}</h4>
              <h5 class="plant-card-date">${plant.date}</h5>
            </aside>
            <aside class="aside-card-bot">
              <p class="plant-card-planter">${plant.user}</p>
              <button class="button plant-card-button" data-id="${plant.id}">
                <span>TA BORT</span>
                <img
                  src="./assets/remove_symbol.svg"
                  alt="Ta bort"
                  class="remove-symbol"
                />
              </button>
            </aside>
    `;

    plantCard.querySelector('.plant-card-container').style.backgroundImage = `url(${plant.image})`;

    return plantCard;
}