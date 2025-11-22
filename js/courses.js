    //random static data
    const dataSlides = [
        {
            image: "./assets/courses.jpg",
            heading: "Only Guide You Need To Pass The Exam",
            text: "Unlock a world of knowledge with seamless access to UBT's comprehensive",
            tag: "Korean"
        },
        {
            image: "./assets/courses.jpg",
            heading: "Master Any Skill With Expert Mentorship",
            text: "High-quality structured courses designed for fast learning",
            tag: "Japanese"
        },
        {
            image: "./assets/courses.jpg",
            heading: "Start Learning From Scratch Easily",
            text: "Interactive tests, progress tracking & engaging content",
            tag: "English"
        },
        {
            image: "./assets/courses.jpg",
            heading: "Smart Online Learning Platform",
            text: "Grow your career with our well-structured online programs",
            tag: "Chinese"
        }
    ];

    const cards = document.querySelectorAll(".course-card");
    const dotsContainer = document.querySelector(".dots");

    let currentIndex = 0;

    // Create dots dynamically
    dataSlides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "dot" + (i === 0 ? " active" : "");
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateCards(index) {
        cards.forEach((card) => {
            const d = dataSlides[index]; // apply same data to every card
            card.querySelector("img").src = d.image;
            card.querySelector(".card-heading").textContent = d.heading;
            card.querySelector(".card-text").textContent = d.text;
            card.querySelector(".card-tag").textContent = d.tag;
        });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }


    dots.forEach(dot => {
        dot.addEventListener("click", e => {
            currentIndex = parseInt(e.target.dataset.index);
            updateCards(currentIndex);
        });
    });

    // Auto change every 4 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dataSlides.length;
        updateCards(currentIndex);
    }, 5000);
