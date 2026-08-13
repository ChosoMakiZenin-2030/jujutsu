```css
/* =========================
   CONFIGURAÇÕES GERAIS
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #080808;
    color: white;
}

/* =========================
   MENU
========================= */

header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;

    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);

    border-bottom: 1px solid #222;
}

.navbar {
    max-width: 1200px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
}

.logo {
    color: #9d4edd;
    font-size: 20px;
    letter-spacing: 2px;
}

.menu {
    display: flex;
    gap: 25px;
    list-style: none;
}

.menu a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    transition: 0.3s;
}

.menu a:hover {
    color: #c77dff;
}

/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding: 120px 10%;

    background:
        radial-gradient(circle at 70% 50%,
        rgba(123, 44, 191, 0.35),
        transparent 35%),
        linear-gradient(120deg, #050505, #16001f);

    position: relative;
    overflow: hidden;
}

.hero::before {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    background: #7b2cbf;

    filter: blur(180px);
    opacity: 0.25;

    right: -100px;
    top: 100px;
}

.hero-content {
    max-width: 700px;
    position: relative;
    z-index: 2;
}

.subtitle {
    color: #c77dff;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

.hero h2 {
    font-size: clamp(60px, 10vw, 130px);
    line-height: 0.85;

    font-weight: 900;

    text-shadow:
        0 0 20px #7b2cbf,
        0 0 50px rgba(123, 44, 191, 0.5);
}

.hero h2 span {
    color: #9d4edd;
}

.hero p {
    margin: 30px 0;
    color: #ccc;
    font-size: 18px;
}

/* BOTÃO */

.button {
    display: inline-block;

    padding: 15px 25px;

    background: #7b2cbf;
    color: white;

    text-decoration: none;
    font-weight: bold;

    border-radius: 5px;

    box-shadow: 0 0 20px rgba(123, 44, 191, 0.6);

    transition: 0.3s;
}

.button:hover {
    background: #9d4edd;
    transform: translateY(-3px);

    box-shadow:
        0 0 30px #9d4edd;
}

/* =========================
   SEÇÕES
========================= */

.section {
    padding: 100px 10%;
    background: #0b0b0b;
}

.section.dark {
    background: #050505;
}

.section > h2 {
    text-align: center;

    font-size: 40px;

    margin-bottom: 60px;

    color: #c77dff;
}

/* =========================
   SOBRE
========================= */

.about {
    max-width: 1000px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 40px;

    line-height: 1.8;
}

.about p {
    color: #bbb;
    margin-bottom: 20px;
}

.info-box {
    padding: 30px;

    border: 1px solid #7b2cbf;

    border-radius: 10px;

    background:
        linear-gradient(
            145deg,
            rgba(123, 44, 191, 0.15),
            rgba(0, 0, 0, 0.5)
        );

    box-shadow:
        0 0 30px rgba(123, 44, 191, 0.1);
}

.info-box h3 {
    margin-bottom: 15px;
    color: #c77dff;
}

/* =========================
   PERSONAGENS
========================= */

.cards {
    max-width: 1200px;
    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(200px, 1fr));

    gap: 25px;
}

.card {
    padding: 30px 20px;

    text-align: center;

    background: #111;

    border: 1px solid #222;

    border-radius: 10px;

    transition: 0.4s;
}

.card:hover {
    transform: translateY(-10px);

    border-color: #9d4edd;

    box-shadow:
        0 10px 40px rgba(123, 44, 191, 0.3);
}

.character-icon {
    width: 90px;
    height: 90px;

    margin: auto;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 40px;
    font-weight: bold;

    background:
        linear-gradient(
            135deg,
            #7b2cbf,
            #240046
        );

    box-shadow:
        0 0 25px rgba(157, 78, 221, 0.5);
}

.card h3 {
    margin-bottom: 15px;
}

.card p {
    color: #aaa;
    line-height: 1.6;
}

/* SUKUNA */

.sukuna {
    border-color: #8b0000;
}

.sukuna .character-icon {
    background:
        linear-gradient(
            135deg,
            #b00020,
            #350000
        );
}

/* =========================
   TÉCNICAS
========================= */

.techniques {
    max-width: 1000px;
    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 25px;
}

.technique {
    padding: 30px;

    background: #111;

    border-left: 4px solid #9d4edd;

    transition: 0.3s;
}

.technique:hover {
    background: #171717;
    transform: translateX(5px);
}

.technique h3 {
    color: #c77dff;
    margin-bottom: 15px;
}

.technique p {
    color: #aaa;
    line-height: 1.6;
}

/* =========================
   FOOTER
========================= */

footer {
    text-align: center;

    padding: 50px 20px;

    background: #030303;

    border-top: 1px solid #222;
}

footer h2 {
    color: #9d4edd;
    margin-bottom: 15px;
}

footer p {
    color: #666;
    margin: 8px;
}

/* =========================
   CELULAR
========================= */

@media (max-width: 700px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .menu {
        gap: 12px;
        font-size: 13px;
    }

    .hero {
        padding: 150px 7% 80px;
    }

    .hero h2 {
        font-size: 65px;
    }

    .about {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 80px 7%;
    }

}
```
