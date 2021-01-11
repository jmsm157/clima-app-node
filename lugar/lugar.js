const axios = require('axios');

const getLugarLatLon = async (dir) => {
    // const encodeUlr = encodeURI(argv.direccion);
    // console.log(encodeUlr)
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather`,
        params: { q: dir, appid: `dbbe462a867648532a5e9b7439d6308e` }
    });

    const resp = await instance.get();
    if (resp.data.cod === 404) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}