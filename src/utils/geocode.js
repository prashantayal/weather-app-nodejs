const request = require('request')
const log = console.log

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?worldview=cn&access_token=pk.eyJ1IjoicHJhc2g5MmFudCIsImEiOiJja3p0enp6dHowbWtwMnBsNmxnMW1nYXhvIn0.RPoPBIPmRC9sVKXmoQQNpA"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service.', undefined)
        }
        else if (body.features.length === 0) {
            callback('Please try with some other location,', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1]
            })
        }
    })
}

module.exports = {
    geocode
}