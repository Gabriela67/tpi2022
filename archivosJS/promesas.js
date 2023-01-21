setTimeout(() => {console.log("Mensaje #1")}, 5000);
setTimeout(() => {console.log("Mensaje #2")}, 3000);
setTimeout(() => {console.log("Mensaje #3")}, 1000);

new Promise((resolve) => {
    //console.log(resolve);
    resolve(
      "Hola"
    );
  })
.then((value) => `${value} + 1`)
.then((value) => `${value} + 2`)
.then((value) => {console.log(value)})
.catch((err) => {
console.error(err);
});

new Promise((resolveOuter) => {
resolveOuter(
    new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000, "Mundo");
    })
);
})
.then((value) => `${value} + 3`)
.then((value) => `${value} + 4`)
.then((value) => {console.log(value)})
.catch((err) => {
console.error(err);
});