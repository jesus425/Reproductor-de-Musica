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
let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)
    res.data.songs.map(() => {
        let div = document.createElement('div')
        div.setAttribute('class', '')
        div.innerHTML = `
        <img src="/Ellipse 7.svg" alt="">
        <p>Lost on You</p>
        <p>LP</p>
        <a href=""></a>
    </div>

    <div>
        <img src="/Ellipse 8.svg" alt="">
        <p>Papercut</p>
        <p>Linkin Park</p>
        <a href=""></a>
    </div>

    <div>
        <img src="/Ellipse 10.svg" alt="">
        <p>Dark Beach</p>
        <p>Pastel ghost</p>
        <a href=""></a>
    </div>

    <div>
        <img src="/Ellipse 11.svg" alt="">
        <p>Enamorado Tuyo</p>
        <p>Cuarteto de Nos</p>
        <a href=""></a>
    </div>

    <div>
        <img src="/Ellipse 12.svg" alt="">
        <p>Snowman</p>
        <p>Sia</p>
        <a href=""></a>
    </div>

    <div>
        <img src="/Ellipse 9.svg" alt="">
        <p>Stay with me</p>
        <p>Miki Matsubara</p>
        <a href=""></a>
    </div>

    <div>
        <img src="/Ellipse 6.svg" alt="">
        <p>Kingston Town</p>
        <p>UB40</p>
        contenedor.appendChild(div
        `
    })
})

let progress = document.getElementById("progress")
        let song = document.getElementById("song")
        let ctrlicon = document.getElementById("ctrlicon")

        song.onloadedmetadata = function(){
            progress.max = song.duration;
            progress.value = song.currentTime;
        }

        function playPause(){
            if(ctrlicon.classList.contains("fa-pause")){
                song.pause();
                ctrlicon.classList.remove("fa-pause");
                ctrlicon.classList.add("fa-play");
         }
            else{
                song.play();
                ctrlicon.classList.add("fa-pause");
                ctrlicon.classList.remove("fa-play");
        }
        
        }
