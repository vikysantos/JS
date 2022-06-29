let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){                                                       // verificar se o mumero esta dentro do intervalo 
    if(Number(n) >= 1 && Number <= 100){
        return true
    }else {
        return false
    }
}

function inList(n, l){                                                      // Verificar se o numero está na lista 
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }

}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))                                     //push é para adicionar valor no array
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        
    } else { 
        alert('[ERRO] Valor não está correto ou já está na lista!')
        
    }

}
/*
function finalizar(){

}*/
