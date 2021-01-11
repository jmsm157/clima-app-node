const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dbbe462a867648532a5e9b7439d6308e&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}