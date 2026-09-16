// ===============================
// PAGE NAVIGATION
// ===============================

const pages = document.querySelectorAll(".page");

// Paparkan page pertama
document.getElementById("opening").classList.add("active");

// Function untuk tukar page
function nextPage(pageId) {

    // Hilangkan semua page
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Paparkan page yang dipilih
    const next = document.getElementById(pageId);

    if (next) {
        next.classList.add("active");
    }

    // Scroll balik ke atas
    window.scrollTo(0, 0);

    // Confetti + music bila buka birthday
    if (pageId === "birthday") {

        createConfetti();

        const music = document.getElementById("birthdaySong");

        if (music) {
            music.play().catch(error => {
                console.log("Music could not play:", error);
            });
        }
    }
}


// ===============================
// SIMPLE CONFETTI
// ===============================

function createConfetti() {

    const confettiSymbols = ["✦", "✧", "★", "♡", "•"];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            confettiSymbols[
                Math.floor(Math.random() * confettiSymbols.length)
            ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 2 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}


// ===============================
// PASSWORD CHECK
// ===============================

function checkSecretPassword() {

    const password =
        document.getElementById("secretPassword").value;

    const errorMessage =
        document.getElementById("secretError");

    const correctPassword = "icap2409";

    if (password === correctPassword) {

        nextPage("letter");

    } else {

        errorMessage.textContent = "wrong password...";

    }
}
