const prompt = require('prompt-sync')();

function detetive(){
  let q=[]; // array onde vão as perguntas
  let a=[]; // array onde vão as respostas
  let index = 0; // variavel usada para quantificar os sins usados

  let title = "Veneno de amor s2";
  let history = "Você chega na cena de um crime e vê duas mulheres aos prantos, debruçadas sobre um homem já morto(envenenado)!";
  
  q[0] = "1) Você esta em seu horario de trabalho?(sim/nao) ";
  q[1] = "2) Você interditou o local do crime?(sim/nao) ";
  q[2] = "3) Você achou o veneno utilizado?(sim/nao) "; 
  q[3] = "4) Você colheu todas as evidências do local?(sim/nao) ";
  q[4] = "5) Você interrogou as mulheres?(sim/nao) "
  let ee = '5) Você perguntou as mulheres "Me diga, qual o seu maior desejo?"(sim/nao) '; // Pergunta Easter Egg

  question(); // função com as perguntas
  result(); // função com os resultados
  
  function question(){
    for(let i=0; i<5; i++){
      console.log(title);
      console.log();
      console.log(history);
      console.log();
      
      if(i===4 && index===0){ // Condição para a pergunta do Easter Egg
        a[i] = prompt(ee);
      }
      else{
        a[i] = prompt(q[i]);
      }
      console.clear();
      if(a[i]!='sim' && a[i]!='nao'){
        i--;
      }
      if(a[i]==='sim'){
        index ++;
      }
    }
  }

  function result(){
    console.log(title);
    console.log();
    console.log(history);
    console.log();
    
    console.log(q[0],a[0]);
    console.log(q[1],a[1]);
    console.log(q[2],a[2]);
    console.log(q[3],a[3]);
    if((index===0) || (index===1 && a[4]==='sim')){ 
      console.log(ee,a[4]);
    }else{
      console.log(q[4],a[4]);
    }
    console.log();
    
    if(index===0){
      console.log('Você é só mais um curioso observando o que aconteceu.');
    }else if(index===1 && a[4]==='sim'){ // Easter Egg
      console.log('Parabéns Lucifer, mais uma vez você se intrometendo nos casos da Chloe e descobrindo de maneira misteriosa que a amante matou o homem que ama por engano.')
      console.log('O que ela queria mesmo era matar a mulher dele, que ficou em choque ao descobrir que o homem que amava tinha uma amante.')
      console.log('Você demonstrou sua famosa compaixão, seduziu e teve uma ótima noite ao lado da viúva, afinal, nenhuma mulher resiste a você.')
    }else if(index===1 || index===2){
      console.log('Você falhou no caso, e não conseguiu nem um suspeito para o crime.')
    }else if(index===3){
      console.log('Você falhou no caso, mas obteve uma lista de suspeitos que não deu em nada.');
    }else if(index===4){
      console.log('Boa detetive, descobriu quem foi o autor do crime mas, o mesmo encontra-se foragido.');
    }else{
      console.log('Ora Ora, temos um Cherloque Holmes por aqui, sua solução para o caso foi tão rápida que a culpada ainda estava chorando sobre o corpo');
    }
  }
}

detetive();