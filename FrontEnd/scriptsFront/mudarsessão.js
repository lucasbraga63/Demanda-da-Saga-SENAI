const rotaCadastro = document.getElementById('rotaCadastro')
const rotaVoltar = document.getElementById('rotaVoltar')
const formularioLogin = document.getElementById('formLogin')
const formularioCadastro = document.getElementById('formCadastro')

rotaCadastro.addEventListener(`click`, ()=>{
    formularioLogin.setAttribute('style', 'display: none;')
    formularioCadastro.removeAttribute('style')
})

rotaVoltar.addEventListener('click', ()=>{
    formularioLogin.removeAttribute('style')
    formularioCadastro.setAttribute('style', 'display: none;')
})