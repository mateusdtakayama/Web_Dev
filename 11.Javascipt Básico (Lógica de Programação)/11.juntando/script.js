var nomes = ["Pedro", "João", "Alfredo"];
var notasA = [7.5, 8.0, 9.5];
var notasB = [8.0, 3.3, 10.0];

function media(notasA, notasB){
    return (notasA+notasB)/2
}

function aprovado(media){
    var passou = "Reprovado"

    if(media >= 7){
        passou = "Aprovado"
    }

    return passou

}

for(var index in nomes){
    
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var nome = nomes[index];
    var m = media(nota1,nota2);
    var apro = aprovado(m);
    
    //console.log(nomes[index] + " - " + notasA[index] + " - " + notasB[index]+ " .")

    console.log(nome + " - " + nota1 + " - " + nota2 + " - " + m + " - " + apro + " .");
}   

