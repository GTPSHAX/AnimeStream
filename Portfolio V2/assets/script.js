document.addEventListener("DOMContentLoaded", function () {
    const starContainer1 = document.querySelector(".bintangs1");
    const starContainer2 = document.querySelector(".bintangs2");
    const numberOfStars = 9999999; // Ganti dengan jumlah bintang yang Anda inginkan

    for (let i = 1; i <= numberOfStars; i++) {
        const star1 = document.createElement("div");
        star1.className = "bi bintangs1";
        star1.style.left = Math.random() * 1500 + "px";
        star1.style.top = Math.random() * 1000 + "px";
        // star1.style.zIndex = '1';
        starContainer1.appendChild(star1);

        const star2 = document.createElement("div");
        star2.className = "bi bintangs2";
        star2.style.left = Math.random() * 1500 + "px";
        star2.style.top = Math.random() * 1000 + "px";
        star2.style.zIndex = "0";
        starContainer2.appendChild(star2);
    }
});
