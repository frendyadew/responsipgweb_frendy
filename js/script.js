// Carousel Items
const carouselContainer = document.getElementById('carouselItems');
let isFirstItem = true;

// Tambahkan Data ke Carousel
wisataData.features.forEach((feature) => {
    const item = document.createElement('div');
    item.className = `carousel-item${isFirstItem ? ' active' : ''}`;
    isFirstItem = false;

    const { nama, deskripsi, gambar } = feature.properties;
    item.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="${gambar}" alt="${nama}" class="d-block w-50 mb-3">
            <h5>${nama}</h5>
            <p class="text-center">${deskripsi}</p>
            <a href="peta.html" class="btn btn-primary">Lihat di Peta</a>
        </div>
    `;
    carouselContainer.appendChild(item);
});
