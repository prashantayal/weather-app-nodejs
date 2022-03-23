const request = require('request')
const log = console.log


const forecast = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=6f34244b0987037cb9c3e5004e2013a2&query=" + lat + "," + long

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Weather not found', undefined)
        }
        else if (body.error) {
            callback('Weather not found in the response', undefined)
        }
        else {
            callback(undefined, body.current)
        }

    })
}

module.exports = {
    forecast
}