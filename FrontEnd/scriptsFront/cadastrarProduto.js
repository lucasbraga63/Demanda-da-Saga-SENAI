let dadosProdutos = [{
    nome: "box de banheiro",
    descricao: "tantantan",
    imagem: "https://i.pinimg.com/originals/1f/2b/45/1f2b45d5591ec5df212e344ff529b5ad.jpg",
    preco: 1800
}]

const cardProdutos = document.querySelector('.Card-Produtos')

function exibirProdutos() {
    cardProdutos.innerHTML = ""

    for (let i = 0; i < dadosProdutos.length; i++) {
        createCards(
            dadosProdutos[i].imagem,
            dadosProdutos[i].nome,
            4.5,
            0,
            dadosProdutos[i].preco

        )
    }
}

function addProduto() {

    const nomeNovoProduto = document.getElementById('inputNomeProduto').value
    const descricaoNovoProduto = document.getElementById('inputDescricaoProduto').value
    const precoNovoProduto = document.getElementById('inputPrecoProduto').value
    const imputImagem = document.getElementById('inputImagemProduto')
    // so cosidera o primeiro arquivo escolhido
    let arquivoImagem = imputImagem.files[0]
    // confirmar para nao dar bug
    if (!arquivoImagem) {
        alert("adicione uma imagem.")
        return
    }
    // transforma em url temporaria
    let imagemNovoProduto = URL.createObjectURL(arquivoImagem)


    // aqui voce faz a função de cadastrar um novo produto, depois junta com o create card sacou? Por que ela vai pegar exatamente as mesmas coisas do card anterior


    dadosProdutos.push({
        nome: nomeNovoProduto,
        descricao: descricaoNovoProduto,
        imagem: imagemNovoProduto,
        preco: precoNovoProduto
    })




    console.log(imagemNovoProduto)
    cardProdutos.innerHTML = ""
    for (let i = 0; i < dadosProdutos.length; i++) {
        createCards(dadosProdutos[i].imagem,
            dadosProdutos[i].nome,
            4.5,
            0,
            dadosProdutos[i].preco)
    }

}

function createCards(imagem, descricao, mediaStars, people, preco) {

    const card = document.createElement('div')
    card.className = `card`
    // card.id =
    cardProdutos.appendChild(card)


    const cardImg = document.createElement('img')
    cardImg.className = `cardImg`
    cardImg.src = imagem
    // cardImg.style = backgroundImage
    // card.id =
    card.appendChild(cardImg)

    const cardContent = document.createElement('div')
    cardContent.className = `cardContent`
    // card.id =
    card.appendChild(cardContent)

    const cardTextContainer = document.createElement('div')
    cardTextContainer.className = `cardTextContainer`
    // card.id =
    cardContent.appendChild(cardTextContainer)
    const cardText = document.createElement('h1')
    cardText.textContent = descricao
    cardTextContainer.appendChild(cardText)

    rateVisor(mediaStars, people)

    const cardPrecoContainer = document.createElement('div')
    cardPrecoContainer.className = `cardPrecoContainer`
    // card.id =
    cardContent.appendChild(cardPrecoContainer)
    const cardPreco = document.createElement('p')
    cardPreco.textContent = `R$${preco}`
    cardPrecoContainer.appendChild(cardPreco)


    function rateVisor(mediaStars, people) {
        const iconStar = document.createElement(`img`)
        iconStar.src = "../assets/Site assets/Icons/star_yellow_24px_FFC107.svg"
        const iconStarHalf = document.createElement(`img`)
        iconStarHalf.src = "../assets/Site assets/Icons/star_half_yellow_24px_FFC107.svg"
        const iconStarNone = document.createElement(`img`)
        iconStarNone.src = "../assets/Site assets/Icons/star_gray_24px_CCC.svg"

        const graficoStar = document.createElement(`div`)
        graficoStar.className = "graficoStar"
        const div = document.createElement(`div`)
        div.className = "div"
        const rateContainer = document.createElement(`div`)
        rateContainer.className = "rateContainer"


        //let stars = 2

        // coloca ".0" se for inteiro
        if (String(mediaStars).length < 3) {
            // rateContainer.innerHTML = `<p>${mediaStars}.0</p>`
            rateContainer.title = `${mediaStars}.0`
        }
        else {
            // rateContainer.innerHTML = `<p>${mediaStars}</p>`
            rateContainer.title = `${mediaStars}`
        }
        console.log(String(mediaStars).length)

        let copyStars = mediaStars
        for (let i = 0; i < 5; i++) {

            if (copyStars >= 1) {
                graficoStar.appendChild(iconStar.cloneNode(true))
                copyStars--
            }
            else if (copyStars >= 0.1 && copyStars <= 1) {
                graficoStar.appendChild(iconStarHalf.cloneNode(true))
                copyStars -= copyStars
            }
            else if (copyStars < 0.5) {
                graficoStar.appendChild(iconStarNone.cloneNode(true))
            }
        }


        //tao separados para mudar o display caso precise
        div.appendChild(graficoStar)

        //   div.innerHTML += `<p>(${people})</p>`
        // avaliações
        rateContainer.appendChild(div)
        cardContent.appendChild(rateContainer)
    }
}

exibirProdutos()
