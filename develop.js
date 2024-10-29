let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlicon = document.getElementById("ctrlicon")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlicon.classList.contains("fa-pause")) {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }

}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
}
let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map((song) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'panel-central_cancionescontenido_cancion')

        div.innerHTML = `
        <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" alt="">
        <div class="panel-central_cancionescontenidocancion_descripcion">
            <div>
                <a href="#">${song.title}</a>
                <a href="#">${song.author}</a>
            </div>
        </div>
        `

        contenedor.appendChild(div)
    })

})
let cancion = {
    titulo: 'Lost on you',
    artista: 'LP',
    album: 'Lost on you',
    duracion: '3:48',
    letra: 'hdhdhhdhhdh',
    portada: 'enlace de imagen',

    sonando: () => {
        console.log(cancion.letra)
    },
    cambiartitulo: (nuevotitulo) => {
        cancion.titulo = nuevotitulo
    }
}