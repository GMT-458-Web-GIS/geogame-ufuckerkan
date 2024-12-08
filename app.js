// Leaflet Haritasını Oluşturma
const map = L.map('map').setView([20, 0], 2); // Dünya genel görünüm

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Oyundaki Ünlü Yapılar (isim, resim, koordinatlar, Türkçe ve İngilizce isimler)
const landmarks = [
  {
    names: ['eiffel tower', 'eyfel kulesi'],
    location: [48.8584, 2.2945],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg'
  },
  {
    names: ['statue of liberty', 'özgürlük heykeli'],
    location: [40.6892, -74.0445],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg'
  },
  {
    names: ['great wall of china', 'çin seddi'],
    location: [40.4319, 116.5704],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg'
  }
];

let currentLandmarkIndex = 0;
let waitingForClick = false;
let score = 0; // Oyuncunun skoru

// Skoru Güncelleyen Fonksiyon
function updateScore(points) {
  score += points;
  document.getElementById('score-display').innerText = `Skor: ${score}`; // Skoru güncelle
}

// Bir sonraki landmark'ı yükle
function loadNextLandmark() {
  if (currentLandmarkIndex >= landmarks.length) {
    alert(`Tebrikler, tüm yapıları buldunuz! 🎉 Toplam Skorunuz: ${score}`);
    return;
  }

  const currentLandmark = landmarks[currentLandmarkIndex];
  document.getElementById('landmark-image').src = currentLandmark.image;
  document.getElementById('guess-input').value = '';
  document.getElementById('guess-input').focus();
}

document.getElementById('submit-guess').addEventListener('click', function() {
  const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
  const validNames = landmarks[currentLandmarkIndex].names.map(name => name.toLowerCase());

  if (validNames.includes(userGuess)) {
    alert("Doğru! Şimdi haritada nerede olduğunu bul! 🎉");

    const targetCoords = landmarks[currentLandmarkIndex].location;
    map.setView(targetCoords, 15);
    waitingForClick = true;
    updateScore(10); // Doğru tahminde +10 puan
  } else {
    alert("Yanlış! Tekrar deneyin. 🤔");
    updateScore(-1); // Yanlış tahminde -1 puan
  }
});

map.on('click', function(e) {
  if (!waitingForClick) return;

  const clickedCoords = [e.latlng.lat, e.latlng.lng];
  const targetCoords = landmarks[currentLandmarkIndex].location;

  const distance = getDistance(clickedCoords, targetCoords);

  if (distance <= 70) {
    alert("Doğru! 🎉");

    L.marker(targetCoords).addTo(map)
      .bindPopup(`<b>${landmarks[currentLandmarkIndex].names[0]}</b>`)
      .openPopup();

    currentLandmarkIndex++;
    waitingForClick = false;
    loadNextLandmark();
  } else {
    alert(`Yanlış! Aradığınız yerden ${Math.round(distance)} metre uzaktasınız. 🤔`);
    updateScore(-1); // Yanlış tıklamada -1 puan
  }
});

function getDistance(coord1, coord2) {
  const R = 6371000;
  const lat1 = coord1[0] * (Math.PI / 180);
  const lat2 = coord2[0] * (Math.PI / 180);
  const deltaLat = (coord2[0] - coord1[0]) * (Math.PI / 180);
  const deltaLon = (coord2[1] - coord1[1]) * (Math.PI / 180);

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Oyunu başlat
loadNextLandmark();
