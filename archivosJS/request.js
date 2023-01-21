const request = require('request');

const options = {url: 'https://api.openweathermap.org/data/2.5/weather?lat=13.481270&lon=-88.177770&appid=cf2cd4f98cfb705ab3362016ee862707',
    //     'https://api.openweathermap.org/geo/1.0/direct?q=sonsonate,&&appid=cf2cd4f98cfb705ab3362016ee862707',
   //      'https://api.openweathermap.org/geo/1.0/direct?q=cuscatlan,&&appid=cf2cd4f98cfb705ab3362016ee862707',
    
//         'https://api.openweathermap.org/geo/1.0/direct?q=cabañasSV,&&appid=cf2cd4f98cfb705ab3362016ee862707',       
   

   method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'Weather'
    }
};

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    // imprimir código de estado.
    console.log(json);
});


