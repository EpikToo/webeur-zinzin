var meteo = require("./meteo")


const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    try {
        const response = await meteo.getWeather();
        const cityName = response.data.location.name;
        const temperature = response.data.current.temperature;
        const icon = response.data.current.weather_icons[0];
        const responseData = { city: cityName, temperature: temperature, icon: icon };
        res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting weather data');
    }
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/index.html');
  })

  app.get('/theophile', (req, res) => {
    res.sendFile(__dirname + '/public/pages/theophile.html');
  })

  app.get('/florian', (req, res) => {
    res.sendFile(__dirname + '/public/pages/florian.html');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})