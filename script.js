// mostrar o envento EVENTO DE TECLADO KEYUP SERVER PARA APERTAR E SOLTAR 
// O BODY É O CORPO E ADDEVENTLISTENER  ADCIONAR UM EVENTO 
// aqui nesse metodo utilizamos dois o ento um fançao 

document.body.addEventListener('keyup',(event)=>{
    // callback e tambem para ficar todo em minusculo
    soundPlay(event.code.toLocaleLowerCase())
    // evento de telacla que foi precionada 
    console.log(event.code)
    
})
 document.querySelector('.composer button').addEventListener('click',()=>{
    //  utiliza para acessar o valor 
    let song=document.querySelector('#input').value
    

    if(song!==''){
        // transformando em um array o split faz a separação por array 
        let songArray=song.split('')
       // callback
    playCompository(songArray) 
    }
})


// criando um função

function soundPlay(sound){
    // crinado um variavel 
    let audioElement=document.querySelector(`#s_${sound}`)
    let keyElement=document.querySelector(`div[data-key="${sound}"]`)

    

    // verificar se achou  
    if(audioElement){
        // retorna e altera o tempo atual da animação em milésimos de segundos, seja estando em execução ou pausada. ou veja ele volta para o ponteiro 0 ela volta para o começo do audio 
        audioElement.currentTime=0;
        // uma funcãso da tag audio para tocar 
        audioElement.play()

    }
    if(keyElement){
        // adicona um classe no css
        keyElement.classList.add('active')
        
        // em alguns segundos tirar a selecionado
        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300) 
    }

}

//  aqui mostra o loop
function playCompository(songArray){
     let wait=0;
    for(let songItem of songArray){
        setTimeout(()=>{
          soundPlay(`key${songItem}`);
         },wait)
       
        wait+=250

    }
    

}


