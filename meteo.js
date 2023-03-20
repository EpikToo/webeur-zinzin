const axios = require('axios');
const params = {
  access_key: '598e1f120997e526dc957fcc16c72327',
  query: 'Petit-Couronne'
}

async function getWeather() {
    return new Promise((resolve, reject) => {
      axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
            resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  module.exports = { getWeather };
