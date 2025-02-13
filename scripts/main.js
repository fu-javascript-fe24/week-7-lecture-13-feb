import log from "./utils/logger.js";
import { getPlants, getUser, setUser } from "./modules/localStorage.js";
import { setupCardsSection, setupFormGui, setupMyPlants } from "./modules/gui.js";
import { removePlantListener, setupAddFormListener, setupBurgerBtnHandler, setupLogoutListener } from "./modules/eventHandlers.js";



log('Planned Planthood');

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    setupHomePage();
} else if(window.location.pathname === '/my_page.html') {
    setupMyPage()
}

setupBurgerBtnHandler();

async function setupHomePage() {
    const plants = await getPlants();
    const filtered = plants.filter(plant => plant.status !== 'planted');
    setupCardsSection(filtered);
}

async function setupMyPage() {
    setUser('Jesper');
    setupFormGui();
    setupAddFormListener();
    setupLogoutListener();
    const plants = await getPlants();
    const filtered = plants.filter(plant => plant.user === getUser());
    setupMyPlants(filtered);
}