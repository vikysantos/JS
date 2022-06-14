function contar(){
   
    var ini = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById('res')
    
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       
        alert("[ERRO] faltam dados! ")
    
    } else {
        res.innerHTML = "Contando: "
    
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number (passo.value)

        if(p <=0 ){
           
            alert ('Numero de passos inválido')
        
        }
        if(i < f){ //contagem crescente
        
            for(let c = i; c <= f; c += p){
            
                res.innerHTML += `${c} `
            }

        } else if(i >= f){  // contagem regressiva

            for(let c = i; c >= f; c -= p){
           
                res.innerHTML += `${c} `
            }

        }

    
    }


    

}