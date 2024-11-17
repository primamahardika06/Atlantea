// Navbar Start
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 5|| document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "lightblue"; // Warna saat scroll
    } else {
        navbar.style.backgroundColor = "transparent"; // Warna awal
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector('.hamburger i');
    const hamburgerMenu = document.querySelector('.hamburger_menu');

    hamburgerIcon.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        if (hamburgerMenu.classList.contains('active')) {
            hamburgerIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            hamburgerIcon.classList.replace('bx-x', 'bx-menu');
        }
    });
});
// Navbar End


// Notifikasi
const messages = [
    { text: "Status energi: Tingkat energi sedang tinggi.", color: "green" },
    { text: "Status energi: Konsumsi energi meningkat.", color: "blue" },
    { text: "Status energi: Pasokan energi stabil.", color: "yellow" },
    { text: "Status energi: Gangguan pasokan energi.", color: "red" },
  ];
  
  const recommendations = [
    "Rekomendasi: Gunakan sumber energi alternatif.",
    "Rekomendasi: Kurangi konsumsi energi Anda.",
    "Rekomendasi: Matikan perangkat yang tidak perlu.",
    "Rekomendasi: Hindari penggunaan listrik pada jam sibuk.",
  ];
  
  function showNotification() {
    const notification = document.getElementById("notification");
    const message = document.getElementById("message");
    const recommendation = document.getElementById("recommendation");
  
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage.text;
    recommendation.textContent = recommendations[Math.floor(Math.random() * recommendations.length)];
  
    notification.className = `notification ${randomMessage.color}`;
  
    notification.classList.add("show");
  
    setTimeout(() => {
        notification.classList.remove("show");
    }, 10000);
  }
  
  window.onload = showNotification;
// Notif End


// Start Hero
let text = document.getElementById('text');
let taka = document.getElementById('taka');
let taki = document.getElementById('taki');
let boltangka = document.getElementById('boltangka');
let boltangki = document.getElementById('boltangki');
let pohon = document.getElementById('pohon');
let bangunan = document.getElementById('bangunan');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1 + 'px';
    taka.style.left = value * -2.5 + 'px';
    taki.style.left = value * 2.5 + 'px';
    boltangka.style.top = value * -2.5 + 'px';
    boltangki.style.top = value * -2.5 + 'px';
    pohon.style.left = value * 2.5 + 'px';
    bangunan.style.left = value * -2.5 + 'px';
});
// end Hero


// Half Donut Grafik
const energiDihasilkan = 70; // dalam persen
const energiDigunakan = 30;   // dalam persen

const ctx = document.getElementById('myHalfDonutChart').getContext('2d');
const myHalfDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Laut', 'Sungai'],
        datasets: [{
            data: [energiDihasilkan, energiDigunakan],
            backgroundColor: ['#0000FF', '#00FFFF'],
            hoverOffset: 4
        }]
    },
    options: {
        cutout: '70%', // Membuat efek donut
        rotation: Math.PI, // Memutar grafik 180 derajat untuk half donut
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            },
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});
// End Half donut grafik


// Start Dashboard
   let usagePercent = 75;
   let pricePercent = 50;
   let anomalyPercent = 20;
   let totalCleanPercent = 90;
   
   document.getElementById("usageValue").textContent = usagePercent + "%";
   document.getElementById("priceValue").textContent = pricePercent + "%";
   document.getElementById("anomalyValue").textContent = anomalyPercent + "%";
   document.getElementById("totalCleanValue").textContent = totalCleanPercent + "%";
   
   const ct = document.getElementById('lineChart').getContext('2d');
   const lineChart = new Chart(ct, {
       type: 'line',
       data: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
           datasets: [
               { label: 'Penggunaan Air', data: [60, 65, 70, 75, 80, usagePercent], borderColor: 'blue', fill: false },
               { label: 'Harga Air', data: [40, 45, 50, 55, 60, pricePercent], borderColor: 'green', fill: false },
               { label: 'Kelainan Air', data: [15, 17, 20, 23, 25, anomalyPercent], borderColor: 'red', fill: false },
               { label: 'Total Air Bersih', data: [85, 87, 90, 92, 95, totalCleanPercent], borderColor: 'purple', fill: false }
           ]
       },
       options: { responsive: true, scales: { x: { beginAtZero: true }, y: { beginAtZero: true, max: 100 } } }
   });
   
       // Chat functionality
   function sendMessage() {
       const chatInput = document.getElementById("chatInput");
       const chatBox = document.getElementById("chatBox");
   
       if (chatInput.value.trim() !== "") {
           const messageDiv = document.createElement("div");
           messageDiv.classList.add("message");
           messageDiv.innerHTML = `<h4>Anda</h4><p>${chatInput.value}</p>`;
           chatBox.appendChild(messageDiv);
   
           // Scroll to the bottom of the chat box
           chatBox.scrollTop = chatBox.scrollHeight;
   
           // Clear the input field
           chatInput.value = "";
       }
   }

// End Dashboard

// KARYA
const karyaImgs = document.querySelectorAll(".karya_img");
const boxKaryaImg = document.querySelector(".showGambar")
const karyaImg = document.getElementById("imgimg")
karyaImgs.forEach(karya => {
  karya.addEventListener("click", function(e){
    var gambar = karya.getAttribute("value")
    boxKaryaImg.style.transform = "translateY(0%)"
    console.log(karyaImg.src)
    karyaImg.src="img/"+gambar
  })
});
boxKaryaImg.addEventListener("click", function(){
  boxKaryaImg.style.transform = "translateY(100%)"
})

// END KARYA

