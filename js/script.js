const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')

function jump() {
    mario.classList.add('jump')// add class animacao jump == mario
    function muda_class_html() {  mario.classList.remove('jump'); }// TIRA A CLASSE MJUMP
    setTimeout(muda_class_html, 500)// A CADA 500 MS FACA ISSO
}

//QUANDO BATER NO TUBO
function gameover(){
    const tuboPosisao = tubo.offsetLeft;//DESLOCAMENTO an esquerda
    //console.log(tuboPosisao)

    //const  marioPosisao = mario.offsetbutton
    const marioposi = + window.getComputedStyle(mario).bottom.replace('px','');// elemento
    //+ converte para numero

     if(tuboPosisao <=100 && tuboPosisao>0 && marioposi <10){
        tubo.style.animation = 'none'
        tubo.style.left = `${tuboPosisao}px`; // quando bater

        //mario
        mario.style.animation = 'none'
        mario.style.bottom = `${marioposi}px`; // quando bater
        mario.src = 'img/game-over.png'
        mario.style.width='75px'
        mario.style.marginLeft='50px'
      

        clearInterval(gameover)

     }
}


const loop = setInterval( gameover,10)//A CADA 10MS VERIFICA SE O MARIO BATEU NO TUBO
document.addEventListener('keydown', jump)// QUANDO APERTAT QUALQUER TECLA