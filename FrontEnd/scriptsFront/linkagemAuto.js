const head = document.querySelector('head')

function linksFeedbacks() {
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="../styles/feedback.css">`)
}

function linksGerais() {
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="../styles/menu.css">`)

    const script = document.createElement('script')
    script.src = "../scriptsFront/gerarMenuGeral.js"
    script.defer = true
    head.appendChild(script)
}

function linksLoja() {
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="../styles/loja.css">`)
}

linksGerais()
linksFeedbacks()
linksLoja()