```javascript
// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const cards = document.querySelectorAll(".card");
const techniques = document.querySelectorAll(".technique");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Configuração inicial

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


techniques.forEach((technique) => {

    technique.style.opacity = "0";
    technique.style.transform = "translateY(30px)";

    technique.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(technique);

});


// ================================
// EFEITO NO MENU
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0, 0, 0, 0.95)";

    } else {

        header.style.background =
            "rgba(0, 0, 0, 0.85)";

    }

});
```

