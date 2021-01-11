const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(40.7143,-74.006).then(console.log).catch(console.log);

const getInfo = async (direccion) => {
    try {
        let coord = await lugar.getLugarLatLon(argv.direccion);
        let temp = await clima.getClima(coord.lat, coord.lon);
        return `El cliema de la ciudad ${coord.direccion} es de ${temp}°C.`
    } catch (e) {
        return `No se pudo determinar el cliema de ${direccion}.`
    }
}

getInfo(argv.direccio).then(console.log).catch(console.log);
