const header = document.querySelector('header')

function GerarMenu() {
    header.innerHTML = `
    
     <div class="logo">
            <img src="FrontEnd/assets/Site assets/LogoOriginal.png" alt="logoEmpresa">
        </div>

        <div class="inputPesquisa">
            <input type="text" placeholder="Busque o produto aqui">
            <div class="icon">
                <img src="FrontEnd/assets/Site assets/pesquisarIcon.png" alt="lupaIcon">
            </div>
        </div>

        <div class="login">
            <div class="icon">
                <img src="FrontEnd/assets/Site assets/usuarioVoltaIcon.png" alt="">
            </div>
            <a href="FrontEnd/paginas/login.html">Voltar ao login</a>
        </div>

        <div class="menu">
            <button command="show-modal" commandfor="carrinho">
                <img src="FrontEnd/assets/Site assets/carrinhoIcon.png" alt="Abrir Janela">
            </button>

            <dialog id="carrinho">
                <button command="close" commandfor="carrinho">
                    <img src="FrontEnd/assets/Site assets/closeIcon.png" alt="Fechar"> Fechar
                </button>
            </dialog>

            <button command="show-modal" commandfor="links">
                <img src="FrontEnd/assets/Site assets/menuIcon.png" alt="Abrir Janela">
            </button>

            <dialog id="links">
                <button command="close" commandfor="links">
                    <img src="FrontEnd/assets/Site assets/closeIcon.png" alt="Fechar"> Fechar
                </button>

                <div class="linksMenu">
                    <ul>
                        <li><a href=""> <img src="FrontEnd/assets/Site assets/homeIcon.png" alt="icone" id="iconesPraMenu"> Inicio</a></li>
                        <li><a href=""> <img src="FrontEnd/assets/Site assets/LojaIcon.png" alt="icone" id="iconesPraMenu"> Loja</a></li>
                        <li><a href="FrontEnd/paginas/feedbacks.html"> <img src="FrontEnd/assets/Site assets/estrelaIcon.png" alt="icone" id="iconesPraMenu"> Avaliações</a></li>
                    </ul>
                </div>
            </dialog>
        </div>
    `
}

GerarMenu()