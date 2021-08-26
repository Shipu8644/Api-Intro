function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}
loadAlbums();
function displayAlbums(albums) {
    console.log(albums)
    const albumContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.innerText = `id: ${album.id} title :${album.title}`;
        // style
        p.style.textAlign = 'center';
        p.style.color = 'black';
        // p.style.width = '660px'
        p.style.border = '2px solid LightSeaGreen';
        p.style.borderWidth = '10px';
        p.style.padding = '5px';
        p.style.fontSize = '1.5em';
        albumContainer.appendChild(p);
    }
}