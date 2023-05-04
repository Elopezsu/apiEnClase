import usuarios from './usuarios.json' assert { type: "json" };

//console.log(usuarios);

const usuariosPrueba = 6;

const promesaACumplir = new Promise((resolve, reject) => {
    //const usuariosBuscados = Math.floor(Math.random() *10);
    setTimeout(() => {
      if (usuariosPrueba > 3) {
        resolve(
            console.log("Esta es la lista de usuarios", usuarios[1]);
      } else {
        reject("Error al Buscar Usuarios");
      }
    }, 4000);
  });
  
  promesaACumplir
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));