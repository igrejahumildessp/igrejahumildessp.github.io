let photosData = [];
let currentIndex = 0;
const photosPerLoad = 9; // Carrega de 9 em 9

fetch('json/photos.json')
    .then(res => res.json())
    .then(data => {
        photosData = data;
        renderPhotos();
    });

function renderPhotos() {
    const container = document.getElementById('gallery-container');
    const batch = photosData.slice(currentIndex, currentIndex + photosPerLoad);  // batch = lote

    batch.forEach(photo => { // Cria HTML por foto
        const card = document.createElement('div');
        card.className = 'photo-card expandable';
        
        card.innerHTML = `
            <h2 class="photo-title">${photo.date}</h2>
            <h2 class="photo-title expandable-title">${photo.title}</h2>
            <img class="photo-img expandable-img" src="${photo.imgSrc}" alt="${photo.alt}" loading="lazy">
        `;
        container.appendChild(card);
    });

    currentIndex += photosPerLoad;

    // Esconde o botão se não houver mais fotos
    if (currentIndex >= photosData.length) {
        document.getElementById('btn-load-more').style.display = 'none';
    }
}

document.getElementById('btn-load-more').addEventListener('click', renderPhotos);