function gerar(){

let num = document.getElementById('numero')
let tab = document.getElementById('tab')

if(num.value.length == 0){
    alert('[ERRO] ')
} else { 
    let n = Number(num.value)
    tab.innerHTML = ''
    for(let c = 1 ; c <= 10 ; c++){

        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    
}

}

