'use strict';
window.arts_ict_page = window.arts_ict_page || {};
arts_ict_page = {
    main: {}
}

arts_ict_page.main.initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');


    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

    arts_ict_page.main.bucket();
    arts_ict_page.main.themeToggle();
    arts_ict_page.main.prestaties();
}

arts_ict_page.main.prestaties = () => {
    const prestatiesContainer = document.getElementById('prestaties-list');
    // Ensure the container is ready to add new content
    prestatiesContainer.innerHTML = '';

    const prestaties = [
        "VP 2x ’14",
        "U2 3x ’15",
        "U1 12x",
        "BOB 12x",
        "CAC 10x",
        "CACIB 6x",
        "Res CAC 7x",
        "BOS 10x",
        "LU JK ’15",
        "RASGROEP 3 2x",
        "Res BIS 1x",
        "BIS 1x",
        "Beste Zelfgefokte Hond ’15 2x",
        "CW 1x",
        "Dog of the Year Show ’16",
        "1e plaats PL RASGROEP 3"
    ];

    prestaties.forEach(prestatie => {
        // Create the flex container for each achievement
        const itemDiv = document.createElement('div');
        itemDiv.className = "flex gap-2";

        // Create the  icon
        const svgIcon = document.createElement('i');
        svgIcon.className = "w-5 h-5 text-yellow-300 dark:text-yellow-300 fas fa-star";

        // Create the span for the achievement text
        const spanText = document.createElement('span');
        spanText.className = "text-slate-800 text-sm";
        spanText.textContent = prestatie;

        // Append the SVG and text span to the item div
        itemDiv.appendChild(svgIcon);
        itemDiv.appendChild(spanText);

        // Append the item div to the container
        prestatiesContainer.appendChild(itemDiv);
    });
}

arts_ict_page.main.bucket = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    // imageList is dynamic but limited by for loop
    // adjust "i <= {45}" where {xx} is the amount of pics in folder
    const maxImg = 45
    const imageList = [];
    for (let i = 1; i <= maxImg; i++) {
        imageList.push(`${i}.jpg`);
    }

    // Shuffle the image list and then select the same amount
    // as max in "i <= {45}" where {xx} is the amount of pics in folder
    const shuffledImageList = shuffleArray([...imageList]);
    const randomImages = shuffledImageList.slice(0, maxImg);

    const container = document.querySelector(".bucket");

    const createImage = (imageName) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        container.appendChild(div);
        img.setAttribute("src", `assets/photobook/${imageName}`);
        div.appendChild(img);

        gsap.set(div, { scale: 0 });
        gsap.set(img, { opacity: 1, filter: "contrast(5)"});

        gsap.to(div, {
            scrollTrigger: {
                trigger: div,
                start: "top bottom",
                end: "top 50%",
                scrub: true
            },
            scale: 1,
            ease: Back.easeOut.config(2)
        });
        gsap.to(img, {
            scrollTrigger: {
                trigger: div,
                start: "top bottom",
                end: "top 50%",
                scrub: true
            },
            opacity: 1,
            filter: "contrast(1)"
        });
    };

    for (let i = 0; i < maxImg; i++) {
        randomImages.forEach((imageName, index) => {
            createImage(imageName);
        });
    }

    ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
            let progress = self.progress.toFixed(2);
            if (progress >= 0.9 && self.direction === 1) {
                imageList.forEach((imageName, index) => {
                    createImage(imageName);
                });
                ScrollTrigger.refresh();
            }
        }
    })

}

arts_ict_page.main.themeToggle = function () {
    // Function to toggle the dark-theme class
    function toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark-theme', shouldAdd);
    }

    // Initial check for dark mode preference
    toggleDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Listener for changes in the system's dark mode preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        toggleDarkTheme(event.matches);
    });
}


document.addEventListener('DOMContentLoaded', arts_ict_page.main.initApp);
