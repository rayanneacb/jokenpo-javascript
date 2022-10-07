//variavel de controle da escolha do jogador e da maquina
var escolha=0;
var maquina =0;

//agora criamos as funções que quando clicado uma das figuras é disparada
//criando as variaveis de controle
 var pedra = document.querySelector('.pedra');
 var papel = document.querySelector('.papel');
 var tesoura = document.querySelector('.tesoura');
 var inimigo = document.querySelector('.plat_sup');
 var imagem = document.createElement('img');
 imagem.setAttribute('class','inimigo') ;
 


//Escolheu pedra
function Epedra(){
    //escondendo as outras figuras
    papel.style.opacity = "0";
    tesoura.style.opacity = "0";
    //movendo a figura escolhida para o centro
    pedra.style.position = "absolute";
    //atribuindo o valor da escolha para conferir com o sorteio
    escolha = 1;
    //sorteando com a máquina
    sorteia();
}
function Epapel(){
   //escondendo as outras figuras
    pedra.style.opacity = "0";
    tesoura.style.opacity = "0";
    //movendo a figura escolhida para o centro
    papel.style.position = "absolute";
    escolha = 2;
    sorteia();
}
function Etesoura(){
    //escondendo as outras figuras
    papel.style.opacity = "0";
    pedra.style.opacity = "0";
    //movendo a figura escolhida para o centro
    tesoura.style.position = "absolute";
    escolha = 3;
    sorteia();
}

//função que sorteia a opção da máquina
function sorteia(){
    sorteio = parseInt(Math.random()*3+1);
    maquina = sorteio;
    if(sorteio==1){
        let par = document.querySelectorAll('.par');
        par.forEach((par)=> par.style.opacity = '0');
        imagem.setAttribute('src','img/pedra.png');
        inimigo.appendChild(imagem);
    }else if(sorteio==2){
        let par = document.querySelectorAll('.par');
        par.forEach((par)=> par.style.opacity = '0');
        imagem.setAttribute('src','img/papel.png');
        inimigo.appendChild(imagem);
    }else if(sorteio==3){
        let par = document.querySelectorAll('.par');
        par.forEach((par)=> par.style.opacity = '0');
        imagem.setAttribute('src','img/tesoura.png');
        inimigo.appendChild(imagem);
    }
    pedra.classList.add('disabled');
    papel.classList.add('disabled');
    tesoura.classList.add('disabled');
    resultado();
    setTimeout(() =>novo_jogo(),800);

}

//função que confere o resultado e printa na tela quem venceu

function resultado(){
    let centro = document.querySelector('.divisor');
    if (maquina == escolha){
        centro.innerHTML='EMPATE';        
    }else if(maquina==1 && escolha==2){
        centro.innerHTML='VENCEU';
    }else if(maquina ==1 && escolha==3){
        centro.innerHTML='PERDEU';
    }else if(maquina ==2 && escolha==1){
        centro.innerHTML='PERDEU';
    }else if(maquina ==2 && escolha==3){
        centro.innerHTML='VENCEU';
    }else if(maquina ==3 && escolha==1){
        centro.innerHTML='VENCEU';
    }else if(maquina ==3 && escolha==2){
        centro.innerHTML='PERDEU';
    }
}

//função jogar de novo
function novo_jogo(){
    if(window.confirm('Jogar novamente?')){
        window. location. reload();
    }else{
        let centro = document.querySelector('.divisor');
        centro.innerHTML = 'OBRIGADO POR JOGAR!'
    }
}
