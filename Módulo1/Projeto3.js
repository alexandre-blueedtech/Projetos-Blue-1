const prompt = require('prompt-sync')();

let i_dia = 1;
let dia_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mes = ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let i_mes = 0;

let dia_semana = ['Sabado', 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
let i_semana = 0;

let p = ['manhã', 'tarde', 'noite'];
let i_p = 0;

let pessoa = ["Claudio", "Beatriz"];
let player = {};


function dia(){
  i_dia++;
  i_semana++;
  
  if(i_dia > dia_mes[i_mes]){
    i_mes++;
    i_dia = 1;
  }
  if(i_semana > 6){
    i_semana = 0;
  }
}

function periodo(){
  if(i_mes > 11){
    console.log("O Ano acabou!")
  }else{ 
    console.log(`${dia_semana[i_semana]} - ${i_dia} de ${mes[i_mes]} de 2022`);
    console.log(p[i_p]);
    console.log();
  }
  
  i_p++;

  if(i_p>2){
    dia();
    i_p=0;
  } 
}

player.nome = prompt("Qual o seu nome: ");
player.sexo = prompt("Você é homem ou mulher: ");

console.clear();
periodo();