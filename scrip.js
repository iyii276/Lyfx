/* =========================================
   IYII LINKS

   ADD NEW LINKS HERE
========================================= */

const links = [

    {
        name: "Discord",
        description: "Join my community",
        url: "https://discord.gg/tsSWJezbwb",
        icon: "◈"
    },

    {
        name: "TikTok",
        description: "Follow my edits",
        url: "https://tiktok.com/@iyiifx",
        icon: "♪"
    },

    {
        name: "YouTube",
        description: "Watch my videos",
        url: "https://youtube.com/@iyiifx",
        icon: "▶"
    }

    /*
    ADD MORE:

    ,
    {
        name: "Instagram",
        description: "Follow me on Instagram",
        url: "YOUR_INSTAGRAM_LINK",
        icon: "◎"
    }

    */

];


/* =========================================
   CREATE LINK CARDS
========================================= */

const container = document.getElementById("links");


links.forEach((link, index) => {

    const card = document.createElement("a");

    card.className = "link-card";

    card.href = link.url;

    card.target = "_blank";

    card.rel = "noopener noreferrer";

    /*
    Stagger animation
    */

    card.style.animationDelay =
        `${index * 120}ms`;


    card.innerHTML = `

        <div class="link-icon">
            ${link.icon}
        </div>

        <div>

            <span class="link-title">
                ${link.name}
            </span>

            <span class="link-description">
                ${link.description}
            </span>

        </div>

        <span class="arrow">
            →
        </span>

    `;


    container.appendChild(card);

});


/* =========================================
   PARTICLES
========================================= */

const particles =
    document.getElementById("particles");


for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (6 + Math.random() * 12) + "s";


    particle.style.animationDelay =
        -(Math.random() * 15) + "s";


    particle.style.opacity =
        Math.random();


    particles.appendChild(particle);

}


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

const musicText =
    document.getElementById("musicText");


let playing = false;


musicButton.addEventListener("click", async () => {

    if (!playing) {

        try {

            await music.play();

            playing = true;

            musicText.textContent = "PLAYING";

            musicButton.classList.add("playing");

        } catch (error) {

            console.log(
                "Music playback was blocked.",
                error
            );

        }

    } else {

        music.pause();

        playing = false;

        musicText.textContent = "PLAY";

        musicButton.classList.remove("playing");

    }

});