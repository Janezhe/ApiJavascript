function obtenerapi() {
    const url='https://picsum.photos/list';
    fetch(url)
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(resultado =>{
        console.log(resultado)
        mostrarhtml(resultado)
    })
}
function mostrarhtml(resultado) {
    const imagen = document.querySelector('#imagen')
    imagen.innerHTML=`
    <div>${resultado[98].author}</div>
    <div>${resultado[98].author_url}</div>
    <a href="${resultado[98].post_url}" target="_blank">ver imagen</a>
    `
}
obtenerapi();

