import { config } from './config.js'

function areaModule() {

    function createArea() { 
        for(let i = 0; i < config.size; i++)
            config.area[i] = new Array(config.size);
    }
    
    return {
        createArea
    }
}

export default areaModule();