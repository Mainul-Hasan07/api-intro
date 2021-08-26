function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadPhotos();
function displayPhotos(photos){
    const photosContainer = document.getElementById('photos');
    for(const photo of photos){
        const img = document.createElement('img');
        img.classList.add('photo')
        img.setAttribute('src',photo.url);
        photosContainer.appendChild(img);
    }
}