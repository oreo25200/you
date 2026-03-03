var textWrapper = document.querySelector(".ml1 .letters");

if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");}
var i = 0;
var txt = `Jujur, waktu kita sempat putus, rasanya ada bagian dari hidup aku yang kosong.
Dan sekarang kamu balik lagi, rasanya kayak Tuhan ngasih kesempatan kedua yang nggak mau aku sia-siain.

Aku nggak janji hubungan ini bakal selalu sempurna, tapi aku janji aku bakal lebih jaga kamu, lebih dengerin kamu, dan lebih sayang sama kamu.

Terima kasih udah milih aku lagi. Kali ini aku nggak cuma mau jadi pacar kamu… aku mau jadi rumah yang selalu kamu tuju 💕`;
var speed = 90;

anime.timeline({ loop: true })
.add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
})
.add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
})
.add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
});

document.addEventListener("DOMContentLoaded", function () {

    var textWrapper = document.querySelector(".ml1 .letters");

    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    var i = 0;
    var txt = `Jujur, waktu kita sempat putus, rasanya ada bagian dari hidup aku yang kosong.
Dan sekarang kamu balik lagi, rasanya kayak Tuhan ngasih kesempatan kedua yang nggak mau aku sia-siain.

Aku nggak janji hubungan ini bakal selalu sempurna, tapi aku janji aku bakal lebih jaga kamu, lebih dengerin kamu, dan lebih sayang sama kamu.

Terima kasih udah milih aku lagi. Kali ini aku nggak cuma mau jadi pacar kamu… aku mau jadi rumah yang selalu kamu tuju 💕`;

    var speed = 90;

    function openFullscreen() {
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";

    var sound = document.getElementById("mySound");
    if (sound) sound.play().catch(() => {});
    }
    window.openFullscreen = openFullscreen;

    function Gassngetik() {
        if (i < txt.length) {
            document.getElementById("tekss").innerHTML += txt.charAt(i);
            i++;
            setTimeout(Gassngetik, speed);
        }
      }
    })