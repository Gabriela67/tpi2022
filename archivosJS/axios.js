const axios = require('axios').default;

/*
En este código intentamos obtener los ids de todos los libros que están en esta url remota y luego
basado en esto hacemos una consulta basada en cada id. Finalmente imprimimos todos los datos.
Usamos axios .get que devuelve una promesa.
*/
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfWork = resp.data.work;
     console.log(resp.data.work)
      return listOfWork.map((work)=>{
          return work.workid
         // console.log(workid);
      })
    }).then((workids)=>{
        let promisesArr = [];
        workids.forEach((workid)=>{
            const req = axios.get("https://reststop.randomhouse.com/resources/works/"+workid);
            promisesArr.push(req);
            req.then(resp=>{
                console.log(resp.data.titleAuth);
            })
        });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');

/*const axios = require('axios').default;

/*async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfWork = resp.data.work;
    let workids = listOfWork.map((work)=>{
          return work.workid
    });
    workids.forEach(async (workid)=>{
            const req = await axios.get("https://reststop.randomhouse.com/resources/works/"+workid);
            console.log(req.data.titleAuth);

    });
}
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err => {
    console.log(err.toString())
});*/