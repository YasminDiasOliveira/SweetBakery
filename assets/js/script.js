const campoDoces = document.querySelector("#doces")
const campoSalgados = document.querySelector("#salgados")
const campoBebidas = document.querySelector("#bebidas")
const campoValor = document.getElementById("#botao")

botao.addEventListener("click", calcular)

function calcular(){
    let doces = campoDoces.value;
    let valord = parseInt(doces) ;

    let salgados = campoSalgados.value;
    let valors = parseInt(salgados) ;
    

    let bebidas = campoBebidas.value;
    let valorb = parseInt(bebidas) ;

  
    


    if(valorb && valord  && valors != 1){
        let total = valorb + valord + valors;
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
    }else if(valorb  != 1 ){
        let total = valorb;
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
        }
        else if(valord  != 1 ){
        let total = valord;
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
    }else if(valors  != 1 ){
        let total = valors;
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
    }

    else if(valorb && valors != 1 ){
        let total = valorb + valors;
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
    }

    else if(valorb && valord != 1){
        let total = valorb + valors;
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
    }

    else if(valors  &&  valord != 1){
        let total = valors + valord -1 ;
        
        alert("Pedido concluido! O valor total da sua compra é de: R$" + total);
    }

    else{
        alert("Selecione alguma opção para concluir o pedido")
    }



}
