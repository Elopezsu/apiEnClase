import usuarios from './usuarios.json' assert { type: "json" };

console.log(usuarios);


const promesaACumplir = new Promise((resolve, reject) => {
    const usuariosBuscados = 
    setTimeout(() => {
      if (number > 5) {
        resolve("La promesa se cumplió": usuariosBuscados);
      } else {
        reject("ERROR: El numero no es mayor a 5");
      }
    }, 4000);
  });
  
  promesaACumplir
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));