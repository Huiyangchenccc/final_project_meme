document.addEventListener("DOMContentLoaded", function () {
    // Huh cat hover audio
    const huhCatImg = document.getElementById("huhcat");
    const huhCatAudio = document.querySelector("audio[src='audio/huh.mp3']");

    if (huhCatImg && huhCatAudio) {
        huhCatImg.addEventListener("mouseenter", () => {
            huhCatAudio.currentTime = 0;
            huhCatAudio.play();
        });

        huhCatImg.addEventListener("mouseleave", () => {
            huhCatAudio.pause();
            huhCatAudio.currentTime = 0;
        });
    }

    // Happy cat hover audio
    const happyCatImg = document.getElementById("happycat");
    const happyCatAudio = document.querySelector("audio[src='audio/happy-happy-happy-cat.mp3']");

    if (happyCatImg && happyCatAudio) {
        happyCatImg.addEventListener("mouseenter", () => {
            happyCatAudio.currentTime = 0;
            happyCatAudio.play();
        });

        happyCatImg.addEventListener("mouseleave", () => {
            happyCatAudio.pause();
            happyCatAudio.currentTime = 0;
        });
    }

       // Power cat hover audio
       const powerCatImg = document.getElementById("powercat");
       const powerCatAudio = document.querySelector("audio[src='audio/power.mp3']");
   
       if (powerCatImg && powerCatAudio) {
           powerCatImg.addEventListener("mouseenter", () => {
               powerCatAudio.currentTime = 0;
               powerCatAudio.play();
           });
   
           powerCatImg.addEventListener("mouseleave", () => {
               powerCatAudio.pause();
               powerCatAudio.currentTime = 0;
           });
       }

       // Banana cat hover audio
       const bananaCatImg = document.getElementById("bananacat");
       const bananaCatAudio = document.querySelector("audio[src='audio/banana.mp3']");
   
       if (bananaCatImg && bananaCatAudio) {
           bananaCatImg.addEventListener("mouseenter", () => {
               bananaCatAudio.currentTime = 0;
               bananaCatAudio.play();
           });
   
           bananaCatImg.addEventListener("mouseleave", () => {
               bananaCatAudio.pause();
               bananaCatAudio.currentTime = 0;
           });
       }

       // Zize cat hover audio
       const zizeCatImg = document.getElementById("zizecat");
       const zizeCatAudio = document.querySelector("audio[src='audio/zize.mp3']");
   
       if (zizeCatImg && zizeCatAudio) {
           zizeCatImg.addEventListener("mouseenter", () => {
               zizeCatAudio.currentTime = 0;
               zizeCatAudio.play();
           });
   
           zizeCatImg.addEventListener("mouseleave", () => {
               zizeCatAudio.pause();
               zizeCatAudio.currentTime = 0;
           });
       }
});


document.getElementById("year").innerHTML = new Date().getFullYear();