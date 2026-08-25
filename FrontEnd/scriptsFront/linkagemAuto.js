// Busca o head de forma única
const head = document.querySelector('head');
const headFeedbacks = document.querySelector('.headFeedbacks')

function linkarFeedbacks(){
    headFeedbacks.insertAdjacentHTML('beforeend', `
     <link rel="stylesheet" href="../styles/feedback.css">`);
}

function linkarGeral() {
    head.insertAdjacentHTML('beforeend', `
     <link rel="stylesheet" href="../styles/menu.css">`);

    const script = document.createElement('script');
    script.src = "../scriptsFront/gerarMenuGeral.js";
    script.defer = true;
    head.appendChild(script);
};

linkarGeral();
linkarFeedbacks();
