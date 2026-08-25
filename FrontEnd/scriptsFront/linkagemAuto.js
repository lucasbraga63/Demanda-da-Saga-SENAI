// Busca o head de forma única
const head = document.querySelector('head');

function linkarHome() {
    head.insertAdjacentHTML('beforeend', `
     <link rel="stylesheet" href="FrontEnd/styles/home.css">
    `);
    
    const script = document.createElement('script');
    script.src = "../scriptsFront/HomeScript.js";
    script.defer = true;
    head.appendChild(script);
}

function linkarGeral() {
    head.insertAdjacentHTML('beforeend', `
     <link rel="stylesheet" href="../styles/menu.css">
    `);

    const script = document.createElement('script');
    script.src = "../scriptsFront/gerarMenu.js";
    script.defer = true;
    head.appendChild(script);
};

linkarGeral();
linkarHome();
