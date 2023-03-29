const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function() {
    btnAvancar.classList.add("animacao-botao");
    btnAvancar.style.transition = "none";
    setTimeout((() => {
        btnAvancar.classList.remove("animacao-botao")
        btnAvancar.removeAttribute("style");
    }), 300);
    if(cartaoAtual === cartoes.length -1 ) {
        
        esconderCartaoSelecionado();
        cartaoAtual = 0
        mostrarCartao(cartaoAtual);
        return;
        
    }
        
    esconderCartaoSelecionado();
 
    cartaoAtual ++;
    console.log(cartaoAtual)
    mostrarCartao(cartaoAtual);

})


btnVoltar.addEventListener('click', function() {
    btnVoltar.classList.add("animacao-botao-invertido");
    btnVoltar.style.transition = "none";
    setTimeout((() => {
        btnVoltar.classList.remove("animacao-botao-invertido")
        btnVoltar.removeAttribute("style");
    }), 300);
    if(cartaoAtual === 0 ){
        esconderCartaoSelecionado();
        cartaoAtual = 5
        mostrarCartao(cartaoAtual);
        return;
    }
   
    esconderCartaoSelecionado();
         
    cartaoAtual --;
    console.log(cartaoAtual)
    mostrarCartao(cartaoAtual);


})