const num = 100;
const num1 = 3;

const resultado = num / num1 //Podemos utilizar as operaçoes soma, subtração, multiplicação, divisão etc
ressimplificado = resultado;


console.log(resultado);
console.log(Math.round(resultado)); //Arredonda para baixo se a casa decimal for abaixo de 5 e para cima se for acima de 5
console.log(Math.ceil(resultado)); //Arredonda para cima
console.log(Math.floor(resultado)); //Arredonda para baixo
console.log(ressimplificado.toFixed(2)); //Simplifica para o número definido dentro do parenteses
console.log(ressimplificado.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})); //Converte nesse caso para moeda corrente olha documento salvo


