const header = document.querySelector('header')

function GerarMenu() {
    header.innerHTML = `
    
     <div class="logo">
            <img src="../assets/Site assets/LogoOriginal.png" alt="logoEmpresa">
        </div>

        <div class="inputPesquisa">
            <input type="text" placeholder="Busque o produto aqui">
            <div class="icon">
                <img src="../assets/Site assets/pesquisarIcon.png" alt="lupaIcon">
            </div>
        </div>

        <div class="login">
            <div class="icon">
                <img src="../assets/Site assets/usuarioVoltaIcon.png" alt="">
            </div>
            <a href="../paginas/login.html">Voltar ao login</a>
        </div>

        <div class="menu">
            <button command="show-modal" commandfor="carrinho">
                <img src="../assets/Site assets/carrinhoIcon.png" alt="Abrir Janela">
            </button>

            <dialog id="carrinho">
                <button command="close" commandfor="carrinho">
                    <img src="../assets/Site assets/closeIcon.png" alt="Fechar"> Fechar
                </button>
            </dialog>

            <button command="show-modal" commandfor="links">
                <img src="../assets/Site assets/menuIcon.png" alt="Abrir Janela">
            </button>

            <dialog id="links">
                <button command="close" commandfor="links">
                    <img src="../assets/Site assets/closeIcon.png" alt="Fechar"> Fechar
                </button>

                <div class="linksMenu">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Loja</a></li>
                    </ul>
                </div>
            </dialog>
        </div>
    `
}

GerarMenu()