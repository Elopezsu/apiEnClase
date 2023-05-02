import usuarios from './usuarios.json' assert { type: "json" };

const promesaACumplir = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (number > 5) {
        resolve("La promesa se cumplió, el numero es:",number);
      } else {
        reject("ERROR: El numero no es mayor a 5");
      }
    }, 5000);
  });
  
  promesaACumplir
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));