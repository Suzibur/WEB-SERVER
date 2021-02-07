const fetch = require('node-fetch');

const getWeather = (location, callback) => {
    fetch(`http://api.weatherstack.com/current?access_key=ff72ed7f259ac846beec7088922fef3c&query=${location}`,)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                const body = {
                    error: 'Unable to find this location.'
                }
                callback(undefined, body)

            } else {
                const body = {
                    country: res.location.country,
                    location: res.location.name,
                    temperature: res.current.temperature,
                }
                callback(undefined, body);
            }
        })
        .catch(error => callback(true, error))
}
module.exports = getWeather