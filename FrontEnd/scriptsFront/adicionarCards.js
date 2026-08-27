const cardProdutos = document.querySelector('.Card-Produtos')

for(let i=0;i<9;i++){
        createCards("FrontEnd/assets/Site assets/ImagemIndefinida.webp",
            "A propriedade do css que faz o texto pular linha automaticamente caso o texto seja maior que o card é: overflow-wrap: break-word",
            1.5,
            350,
            250)
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
            const cardText = document.createElement('p')
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
                iconStar.src = "FrontEnd/assets/Site assets/Icons/star_yellow_24px_FFC107.svg"
                const iconStarHalf = document.createElement(`img`)
                iconStarHalf.src = "FrontEnd/assets/Site assets/Icons/star_half_yellow_24px_FFC107.svg"
                const iconStarNone = document.createElement(`img`)
                iconStarNone.src = "FrontEnd/assets/Site assets/Icons/star_gray_24px_CCC.svg"

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

                div.innerHTML += `<p>(${people})</p>`
                // avaliações
                rateContainer.appendChild(div)
                cardContent.appendChild(rateContainer)
            }
        }