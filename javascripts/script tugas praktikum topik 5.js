alert("Selamat datang di situs saya dan selamat membaca!");

function foto() {
    var toggle = document.getElementById("foto");
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

function pembuka() {
    var toggle = document.getElementById("pembuka");
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

function pertanyaan1(){
    alert("Musik memiliki kemampuan untuk memutar kembali kenangan di masa lalu, karena musik itu terasa sangat berarti dan memiliki perasaan pada waktu tertentu. Bagi saya, ada musik yang dapat membawa kenangan bahagia atau sebaliknya saat mengingat cerita saya dibalik musik kesukaan saya.");
}

function pertanyaan2(){
    alert("Sebenarnya ada banyak artis dari berbagai genre dan mood yang saya sukai. Berdasarkan aktivitas pada Spotify saya, ada 9 artis yang saya sukai pada bulan ini, ada Avril Lavigne, Muse, Gesaffelstein, The Weeknd, M83, Philip G Anderson, Maksim, Steve Angello, dan Maxence Cyrin. Semua artis itu mencakup banyak genre dan mood, ada classical, country, electro, shoegaze, cinematic, alternative, pop, synth, dream, rnb, dan masih banyak lagi. Bisa dibilang aku punya banyak genre favorit, karena setiap mood dan waktu tertentu ada genre yang cocok untuk saya dengarkan.");
}

function pertanyaan3(){
    alert("Saya dapat mendengarkan musik sambil melakukan banyak kegiatan, seperti membaca artikel, mengerjakan tugas kuliah, membersihkan kamar, berdiskusi, pada perjalanan, dan masih banyak lagi. Bahkan, banyak teman di Spotify saya yang aktif mendengarkan musik.");
}

function pertanyaan4(){
    alert("Musik berbahasa Inggris khususnya musik luar yang bukan dari Indonesia itu memiliki keanekaragaman genre yang terus berkembang dan sangat variatif. Yang artinya setiap lagu pada tiap artis itu pasti memiliki genre dan mood yang berbeda. Jadi, menurutku itu hal yang positif, karena artis itu kreatif sehingga penggemarnya tidak bosan untuk mengulang mendengarkannya. Misalkan dari genre pop, ada synth pop, art pop, dance pop, dream pop, dan masih banyak lagi. Dari subgenre itu, ada banyak artis dengan variasi lagu yang berbeda. Kalau di Indonesia, genre musik tidak jauh dari musik ballad yang bertempo lambat, berbau cinta dan galau yang membuat saya bosan untuk didengar.");
}

const circle = document.querySelector('.circle');
window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);

function mouseMoveHandler(e) {
  circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  circle.style.opacity = 1;
}

function mouseUpHandler(e) {
  circle.style.transform = "scale(1)";
}

function mouseDownHandler() {
  circle.style.transform = "scale(2)";
}