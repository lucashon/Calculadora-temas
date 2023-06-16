//Mudar temas

const btn1 =document.querySelector('#btn1')
const btn2 =document.querySelector('#btn2')
const tema1 =document.querySelector('.tema1')
const tema2 =document.querySelector('.cont')
const body = document.querySelector('.body')
btn1.addEventListener('click', ()=>{
  tema1.style.display = 'none'
  tema2.style.display = 'block'
  body.style.background = 'hsl(0, 0%, 90%)'
})





const acao = document.getElementsByTagName('button')

function calcular(tipo, valor){
  
   if(tipo === 'acao'){
    //limpar a tela
    if(valor === 'c'){
     document.getElementById('resultado').value = ''
    
    }if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ) {
     document.getElementById('resultado').value += valor
    
    }if (valor === '='){
       let valor_campo = eval(document.getElementById('resultado').value)
       //eval faz a conta 
     document.getElementById('resultado').value = valor_campo
    }



   }else if(tipo === 'valor'){
     document.getElementById('resultado').value += valor
   }
}   
