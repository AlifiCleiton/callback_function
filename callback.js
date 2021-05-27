setTimeout(() => alert("1"),5000);
alert("2");

//exemplo callback com funcionário
let salarioBruto = 3000;
let salarioLiquido;
getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O salário liquido é ${salarioLiquido}`);
});
function getSalario(salarioBruto, callback)
{
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}

//exemplo com notas
const notas = [3.5,4.6,7.6,8,9.5,1.0]

//SEM CALLBACK
let notasBaixas = []
for(let i in notas){
  if(notas[i] < 7){
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

//com callback
let notasBaixas2 = notas.filter( (nota) => nota < 7)
console.log(notasBaixas2)