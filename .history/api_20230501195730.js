import usuarios from './usuarios.json' assert { type: "json" };

console.log(usuarios);


const promesaACumplir = new Promise((resolve, reject) => {
    const usuariosBuscados = Math.floor(Math.random() *10);
    setTimeout(() => {
      if (number > 5) {
        resolve("La promesa se cumplió:", usuariosBuscados);
      } else {
        reject("Error al Buscar Usuarios");
      }
    }, 4000);
  });
  
  promesaACumplir
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));