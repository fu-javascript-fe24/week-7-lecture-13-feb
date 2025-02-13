import fetchPlants from "./api.js";
import log from "../utils/logger.js";

export async function getPlants() {
    let plants = JSON.parse(localStorage.getItem('plants')) || [];
    if(plants.length < 1) {
        log('API')
        plants = await fetchPlants();
        setPlants(plants);
    }
    return plants;
}

export async function addPlant(plant) {
    const plants = await getPlants();
    plants.push(plant);
    setPlants(plants);
}

export async function removePlant(id) {
    log('remove ' + id);
    const plants = await getPlants();
    const filtered = plants.filter(plant => plant.id !== parseInt(id));
    setPlants(filtered);
}

function setPlants(plants) {
    localStorage.setItem('plants', JSON.stringify(plants));
}

export function setUser(user) {
    localStorage.setItem('user', user);
}

export function getUser() {
    return localStorage.getItem('user') || '';
}

export function removeUser() {
    localStorage.removeItem('user');
}