function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displayAlbums(data))
}
loadAlbums();
function displayAlbums(albums){
    const albumContainer = document.getElementById('album');
    for(const album of albums){
        const p = document.createElement('p')
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumContainer.appendChild(p)
    }
}
