import usuarios from './usuarios.json' assert { type: "json" };

console.log(usuarios);


const promesaACumplir = new Promise((resolve, reject) => {
    const usuariosBuscados
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