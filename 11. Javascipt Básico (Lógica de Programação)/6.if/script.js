var idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18){
    alert("Vocẽ pode comprar a bebida");
    var pedido = prompt("Qual o seu pedido?")
    alert("Você comprou " + pedido+ " com sucesso");

} 
// else if  ()
else { 
    alert("Você não pode comprar a bebida");
    alert("Volte futuramente.")
}

