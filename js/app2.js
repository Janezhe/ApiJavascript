function obtener() {
    fetch("data/clase2.json")
     .then(respuesta =>{
        return respuesta.json()
     })
     .then(resultado =>{
        console.log(resultado)
        mostrarhtml(resultado)
     })
}


function mostrarhtml(resultado){
    const contenido = document.querySelector("#contenido")
    contenido.innerHTML=`
    <div class="contened">
    <div class="text-author">
    <span>Nombre=${resultado[0].serie}</span>
    <span>Episodio=${resultado[0].episodio}</span>
    <span>Actores=${resultado[0].protagonista}</span>
    <span>Pais=${resultado[0].nacionalidad}</span>
    <div class="imagen"></div>
    </div>
    
    </div> 
    
    `
}
obtener()