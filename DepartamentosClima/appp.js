
function seleccionar(select) {
  
  

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
  let lat = document.getElementById('lat')
  let log = document.getElementById('log')
  let humedad = document.getElementById('humedad')
  let pression = document.getElementById('presion')
  let tempMin = document.getElementById('tempMin')
  let temMax = document.getElementById('temMax')
  let ubicacion = document.getElementById('ubicacion')
 let imagen = document.getElementById('img')
  let vientoVelocidad = document.getElementById('viento-velocidad');

  let departamento = document.getElementById("selector").value;

  var url;


  url = `https://api.openweathermap.org/data/2.5/weather?q=${departamento}&lang=es&units=metric&appid=146ee22d857ca40b1b51e905477324ba`

  if (navigator.geolocation) {

     console.log(navigator.geolocation);
    fetch(url)
    /*proporciona una interfaz JavaScript para acceder y manipular partes del 
    canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() 
    (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona 
    por la red.*/
    
    .then(response => { return response.json() })
    /*El método then() retorna una Promesa. Recibe dos argumentos: funciones callback para los casos de éxito 
    y fallo de Promise.*/

    /*La interfaz Response de la Fetch API representa la respuesta a una petición.

    ,*/

    .then(data => {
      console.log(data)

      let temp = Math.round(data.main.temp)
      let temp2 = data.coord.lat
      let temp3 = data.coord.lon
      let press = data.main.pressure
      let hum = data.main.humidity
      let TemMa = data.main.temp_max
      let TemMi = data.main.temp_min

  
      temperaturaValor.textContent = `${temp} ° C`
      lat.textContent = `${temp2} `
      log.textContent = `${temp3} `
      pression.textContent = `${press} ° C`
      humedad .textContent =`${hum} ° C`
      tempMin.textContent = `${TemMi} ° C`
      temMax.textContent = `${TemMa} ° C`

      console.log(temperaturaValor);

      console.log(data.weather[0].description)
      let desc = data.weather[0].description
      temperaturaDescripcion.textContent = desc.toUpperCase()

      console.log(temperaturaDescripcion.textContent)
      ubicacion.textContent = data.name

      vientoVelocidad.textContent = `${data.wind.speed} m/s`

      //para iconos dinámicos
      console.log(data.weather[0].main)
      

     /// para saber si esta lloviendo
      if(data.weather[0].main == 'Thunderstorm'){
        imagen.src = 'descargalluvia.png'
      
        console.log('TORMENTA');
      
      
      }
      
      if(data.weather[0].main == 'Drizzle'){

        imagen.src = 'llovisna.png'
        
        console.log('LLOVIZNA');

      }

      if (data.weather[0].main == 'Rain') {

        imagen.src = 'tormenta.png'
     
      }
      if(data.weather[0].main == 'Clear'){
       

       imagen.src = 'soleado.png'
       console.log("soleado")
     
      }
      if(data.weather[0].main == 'Clouds'){
        console.log("nubes")
        imagen.src = 'nubes.png'
    
    }
     
    })

    .catch(error => {
      console.log(error)
    })
    

  }

}


