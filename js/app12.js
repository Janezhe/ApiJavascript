function resultadodata() {
    fetch('data/clases.json')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(resultado =>{
            console.log(resultado[0].nombre);
        })
        .catch(error => {
            console.log(error);
        })
}
resultadodata();

localStorage.setItem("nombre","Janet");

sessionStorage.setItem('nombre', 'Putin');

const nombre=localStorage.getItem('nombre')
console.log(nombre)
