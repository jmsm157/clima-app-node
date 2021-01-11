const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        damand: true
    }
})
.help()
.argv;

module.exports = {
    argv
}