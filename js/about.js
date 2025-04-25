var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");


    video = document.querySelector("video");
    video.autoplay = false;
    video.pause();

    const playPauseBtn = document.querySelector("#play-pause");

    playPauseBtn.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            console.log("Play Video");
            let volume = video.volume * 100;
            const volumeElement = document.querySelector("#volume");
            if (volumeElement) {
                volumeElement.textContent = volume + "%";
                console.log("Volume: " + volume + "%");
            } else {
                console.warn("Element with ID 'volume' not found.");
            }
            playPauseBtn.textContent = "⏸️";
        } else {
            video.pause();
            console.log("Pause Video");
            playPauseBtn.textContent = "▶️";
        }
    });

    document.querySelector("#slower").addEventListener("click", function () {
        if (video.playbackRate > 0.1) {
            video.playbackRate -= 0.1;
            console.log("new speed: " + video.playbackRate.toFixed(2));
        } else {
            console.log("Video achieves its slowest speed");
        }
    });

    document.querySelector("#faster").addEventListener("click", function () {
        if (video.playbackRate < 5.0) {
            video.playbackRate += 0.1;
            console.log("new speed: " + video.playbackRate.toFixed(2));
        } else {
            console.log("Video achieves its fastest speed");
        }
    });

    document.querySelector("#mute").addEventListener("click", function () {
        if (video.muted) {
            console.log("video unmuted");
            video.muted = false;
            this.textContent = "🔇";
        } else {
            console.log("video muted");
            video.muted = true;
            this.textContent = "🔊";
        }
    });

    document.querySelector("#slider").addEventListener("input", function () {
        let volume = this.value;
        video.volume = volume / 100;
        console.log("Volume: " + volume + "%");
        document.querySelector("#volume").textContent = volume + "%";
    });

    document.getElementById("year").innerHTML = new Date().getFullYear();
});

// Drag and Drop functions
function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    if (event.target.classList.contains('droptarget')) {
        event.target.appendChild(draggedElement);

        if (event.target.id === "end") {
            document.getElementById("hiddenImage").style.display = "block";
            document.getElementById("start").style.display = "none";
            document.getElementById("end").style.display = "none";

            setTimeout(() => {
                alert("YAY! Enjoy your apple cat!");
            }, 100);
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="about.html"]');

    if (aboutLink) {
        aboutLink.addEventListener("click", function (e) {
            const confirmed = confirm("⚠️ Attention: Flashing light.\n\nDo you want to continue?");
            if (!confirmed) {
                e.preventDefault();
            }
        });
    }
});
t.getElementById("year").innerHTML = new Date().getFullYear();
