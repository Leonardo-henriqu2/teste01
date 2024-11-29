/*Escreva uma função na linguagem de programação de sua escolha que receba um array de números inteiros e retorne:
●	A soma dos números pares.
●	A soma dos números ímpares.
2.	Exemplo de Entrada: [1, 2, 3, 4, 5]
Exemplo de Saída:
●	Soma dos pares: 6
●	Soma dos ímpares: 9
3.	Critério de Avaliação:
●	Clareza no código.
●	Uso correto da lógica condicional e estruturas de repetição.
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

somaValoresArray(array)


function somaValoresParImparArray(valores){
    let somaPar = 0;
    let somaImpar = 0;

    for(let valor of valores){
        if(valor % 2 === 0){
            somaPar += valor;
        }else {
            somaImpar += valor;
        }
    }    
    console.log(somaPar)
    console.log(somaImpar)

}