const prompt = require('prompt-sync')();
const colors = require('colors');

function jokenPo(){
  console.clear();
  
  let jogo = ["pedra", "papel", "tesoura"];
  let p = ""; // player
  let m = ""; // máquina
  let r = 0; // numero de rodadas
  let placar = [0, 0]; // placar
  let table = {}; // tabela do placar
  
  function enter(){
    console.log();
    prompt('press ENTER para continuar');
    console.clear();
  }
  
  function rodadas(){
    console.clear();
    console.log("JO".red + "KEN".blue + "PO".red);
    console.log();
    r = prompt('Escolha quantidade de rodadas: ');
    if(isNaN(r) || r<=0){
      rodadas();
    }
    console.clear();
  }
  
  function game(){   
    for(let i=1; i<=r; i++){
      
      let choice = false;
      while(choice == false){
        console.clear();
        console.log("JO".red + "KEN".blue + "PO".red + ` - Rodada ${i} de ${r}` );
        console.log();
        
        function score(s1, s2){
          this.Você = s1;
          this.Máquina = s2
        }
        table.Pontos = new score(placar[0], placar[1]);   
        console.table(table);

        console.log();
        p = prompt("[pedra, papel ou tesoura]:").toLowerCase();
        if(p=='pedra' || p=='papel' || p=='tesoura'){
          choice = true;
        }
      }
      m = jogo[Math.floor(Math.random() * jogo.length)];

      console.log();
      console.log('Maquina:',m);
      console.log();
  
      if((p=='pedra' && m=='tesoura') || (p=='tesoura' && m=='papel') || (p=='papel' && m=='pedra')){
        console.log(`Você venceu a rodada ${i}`);
        placar[0] += 1;
      }
      else if(m==p){
        console.log(`Vocês empataram a rodada ${i}`);
      }
      else{
        console.log(`Máquina venceu a rodada ${i}`);
        placar[1] += 1;
      }
      enter();
    }
  }

  function end(){
    console.clear();
    console.log("JO".red + "KEN".blue + "PO".red);
    console.log();
    
    function score(s1, s2){
      this.Você = s1;
      this.Máquina = s2
    }
    table.Pontos = new score(placar[0], placar[1]);   
    console.table(table);
    
    console.log();

    if(placar[0] > placar[1]){
      console.log('Você ganhou o jogo!'.green);
    }else if(placar[1] > placar[0]){
      console.log('Você perdeu o jogo!'.red)
    }else{
      console.log('Você empatou o jogo!'.yellow)
    }

    console.log();
    
    let i = "";
    i = prompt("jogar de novo?[s/n]").toLowerCase();
    if(i==='s'){
      jokenPo();
    }else{
      console.clear();
    }
  }

  rodadas();
  game();
  end();
}

jokenPo();