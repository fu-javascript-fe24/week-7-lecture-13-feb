import { getElement } from "../utils/domUtils.js";
import log from "../utils/logger.js";

export function validateAddPlantForm() {
    const plantRef = getElement('#plant-name');
    const dateRef = getElement('#plant-date');
    const linkRef = getElement('#plant-link');
    
    try {
        if(plantRef.value.length < 1) {
            throw {
                message : 'Alla fält måste fyllas i',
                nodeRef : plantRef
            };
        } else if(dateRef.value.length < 1) {
            throw {
                message : 'Alla fält måste fyllas i',
                nodeRef : dateRef
            };
        } else if(linkRef.value.length < 1) {
            throw {
                message : 'Alla fält måste fyllas i',
                nodeRef : linkRef
            };
        }
        return true;
    } catch(error) {
        log(error.message);
        error.nodeRef.focus();
        return false;
    }
}