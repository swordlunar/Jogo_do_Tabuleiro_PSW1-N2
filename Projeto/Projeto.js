		
		//Variaveis Globais para auxiliar no tratamento das regras de negocio do jogo
		var cont = 1;
		var countQuestao = 0;
		var aux = 0;
		//Vetor responsável por guardar a posição dos jogadores
		var scorePlayer = new Array();
		scorePlayer[0]=0;
		scorePlayer[1]=0;
		//Vetor responsável por armazenar as questões que já foram utilizadas
		var questoesRespondidas = new Array();
		//vetor de perguntas
		var p = new Array();
		//vetor de respostas
	    var r = new Array();

	    //Lista de Opções na ordem das perguntas ... P[1] => opcoes[1] ... P[n] => opcoes[n];
 		var opcoes = new Array(
 			["Contingencia","Contingencia","Contingencia","Contingencia"],
			["DO HUMANO MAIS ANTIGO","DA PRIMEIRA FLOR DO PLANETA","DE UM PEIXE COM 10000 MIL anos","DE UM ALIENIGENA"],
			["O SOLDADINHO","CAMPINA","ROLINHA","CANCÃO"],
			["FLORA","ARARI","FLORESTA ARARIPE","FLONA"],
			["IFCE","UNILEÂO","UFCA","URCA"],
			["CARIRIAÇU","CRATO","SANTANA DO CARIRI","MISSÃO VELHA"],
			["CHAPADA DO ARARIPE","FLORESTA AMAZONIA","PARQUE ECOLOGICO","RIACHO DO MEIO"],
			["A PADRE CICERO","BEATA MARIA DE ARAUJO","AOS ROMEIROS","A LAMPIÃO"],
			["SANTANA DO CARIRI","JUAZEIRO DO NORTE","ARARIPE","BARBALHA"],
			["LUZEIRO DE PADRE CICERO","LUZEIRO DOS ROMEIROS","LUZEIRO DO CARIRI","LUZEIRO DO JUAZEIRO"],
			["CRATO","SANTANA DO CARIRI","JUAZEIRO DO NORTE","FARIAS BRITO"],
			["AOS CAMINHONEIROS","CENTENARIO DO CRATO","O ANIVERSÁRIO DE 250 ANOS DO CRATO","AOS ROMEIROS"],
			["17 METROS","45 METROS","37 METROS","25 METROS"],
			["JUAZEIRO DO NORTE","BARBALHA","CARIRIAÇU","CRATO"],
			["SERRA DA MANTIQUEIRA","MONTES ALPES","SERRA DO MÃOZINHA","SERRA DO CATOLÉ"],
			["MILAGRE DOS PÃES","PODER BÉLICO","MILAGRE DA HÓSTIA","BIGODE GRANDE"],
			["JUAZEIRO DO NORTE","CRATO","MISSÃO VELHA","FARIAS BRITO"],
			["PRAÇA PADRE CICERO","PRAÇA MONSENHOR HORÁCIO","PRAÇA DA REFESA","PRAÇA FRANCISCO ARRAIS MAIA"],
			["IGREJA MATRIZ NOSSA SENHORA DAS DORES","IGREJA MATRIZ DE SÃO JOSÉ","IGREJA MATRIZ SANTO ANTÔNIO","CATEDRAL NOSSA SENHORA DA PENHA"],
			["ARARIPE","PALMERINHA","FARIAS BRITO","BARBALHA"],
			["SANTO ANTÔNIO","SÃO JOSÉ","SÃO JOÃO","SÃO PEDRO"],
			["BANDEIRA DO BRASIL","BANDEIRA DO CEARÁ","BANDEIRA DA LIBERDADE","BANDEIRA DE SANTO ANTÔNIO"],
		);
	    // Lista de Perguntas e Respostas
	    p[1] = "A Chapada do Araripe é conhecida como berço da paleontologia nacional, a qual possui como importante descoberta o fossil ______ , por exemplo.";
	    r[1] = 'DA PRIMEIRA FLOR DO PLANETA';
	    p[2] = "Uma Ave caracteristica do Geoparque do Araripe é ______ - do - Araripe.";
	    r[2] = 'O SOLDADINHO';
	    p[3] = "A primeira Floresta Nacional do Brasil foi criada na Chapada do Araripe, sendo conhecida como:";
	    r[3] = 'FLONA';
	    p[4] = "O Museu de Paleontologia de Santana do Cariri, foi fundado e inaugurado no dia 26 de julho de 1988, data esta que marca a sua doação por contrato de comodato a uma instituição de ensino da região, adicionando o nome da mesma ao nome do Museu. Qual a instituição de ensino responsável por administrar esse museu?";
	    r[4] = 'URCA';
	    p[5] = "O Museu de Paleontologia da região do cariri fica situado em qual cidade?";
	    r[5] = 'SANTANA DO CARIRI';
	    p[6] = "O Museu de Paleontologia da região do cariri é responsável por projetos de escavações permanantes na:";
	    r[6] = 'CHAPADA DO ARARIPE';
	    p[7] = "O Luzeiro da Fé é uma torre de 113 metros de altura e foi concebido como uma homenagem:";
	    r[7] = 'AOS ROMEIROS';
	    p[8] = "Em qual cidade fica localizado o Luzeiro da Fé?";
	    r[8] = 'JUAZEIRO DO NORTE';
	    p[9] = "O Luzeiro da Fé também é conhecido como:";
	    r[9] = 'LUZEIRO DO CARIRI';
	    p[10] = "A estatua de Nossa Senhora de Fátima está situada em qual cidade do cariri?";
	    r[10] = 'CRATO';
	    p[11] = "O monumento de Nossa Senhora de Fátima foi feito em homenagem a:"
	    r[11] = 'O ANIVERSÁRIO DE 250 ANOS DO CRATO';
	    p[12] = "A estatua de Nossa Senhora de Fátima é considerado um dos maioiores monumentos do Brasil, sendo maior até que o monumento do Cristo Redentor. Qual o tamanho dessa estatua?"
	    r[12] = '45 METROS';
	    p[13] = "O monumento (estatua) em homenagem a Padre Cicero Romão Batista está localizada em qual cidade?"
	    r[13] = 'JUAZEIRO DO NORTE';
	    p[14] = "A estatua do Padre Cicero foi inaugurada no dia 1° de 1969, no alto da colina do horto, ou como é conhecida:"
	    r[14] = 'SERRA DO CATOLÉ';
	    p[15] = "A estatua do Padre Cicero foi criada em homenagem ao grande lider religioso e politico da região do cariri, o qual é conhecido pelo:"
	    r[15] = 'MILAGRE DA HÓSTIA';
	    p[16] = "A Igreja Matriz de São José foi nomeada em nome do padroeiro de uma cidade do cariri. Qual o nome dessa cidade?"
	    r[16] = 'MISSÃO VELHA';
	    p[17] = "A Igreja Matriz de São José de Missão Velha está localizada na praça principal de sua cidade. Qual o nome dessa praça?"
	    r[17] = 'PRAÇA MONSENHOR HORÁCIO';
	    p[18] = "O Primeiro templo catolico da região do cariri foi construido em 1725 pelos portugueses, o qual recebeu o nome de:"
	    r[18] = 'IGREJA MATRIZ DE SÃO JOSÉ';
	    p[19] = "A festa do 'Pau da Bandeira', festividade anual popular da região do cariri, é realizada em qual cidade?"
	    r[19] = 'BARBALHA';
	    p[20] = "A festa do 'Pau da Bandeira', festividade anual popular da região do cariri, é dedicada ao Santo Padroeiro de Barbalha. Qual o nome desse Santo?"
	    r[20] = 'SANTO ANTÔNIO';
	    p[21] = "A festa do Santo Antonio de Barbalha, tem como principal atração a derrubada e transporte de um tronco que servirá como 'Pau da Bandeira'. Qual a Bandeira hasteada nessa comemoração?"
	    r[21] = 'BANDEIRA DE SANTO ANTÔNIO';

//Função responsável por organizar as principais funcionalidades do jogo ("Função Main")
function sortearNumero(){
	var passoAtual=0;

	cont ++;
	//sorteia um numero entre 1 e 6 (Dado)
	var numeroSorteado = (Math.floor(Math.random() * 6))+ 1;
	$("#dadoSorteado").html('');
	$("#dadoSorteado").append('<h1> Você tirou: '+numeroSorteado+ '<h1>');
	//document.getElementById("IpNumeroSorteado").value = numeroSorteado;

	
	//Bloco de Instruções executado na vez do Jogador 01
	if (cont % 2 == 0) {
		var pin = 0;
		//Adiciona o valor sorteado do dado ao Jogador 01
		scorePlayer[pin] += numeroSorteado;
		scorePlayer[pin] = eval(scorePlayer[pin]);
		//document.getElementById("IpPassoAtual").value = scorePlayer[pin];
		mover(scorePlayer[pin],pin);

		$("#jogadorAtual").html(' ');
		$("#jogadorAtual").append('<h1 style="color: blue;"> Vez do Jogador 01!</h1>');

		//Verifica se o Jogador 01 está em um ponto turistico
		if (scorePlayer[pin] == 3 || scorePlayer[pin] == 8 || scorePlayer[pin] == 11 || scorePlayer[pin] == 16 || scorePlayer[pin] == 23 || scorePlayer[pin] == 30 || scorePlayer[pin] ==32) {
			document.getElementById("rodar").disabled = true;
			//sorteira uma das perguntas para o jogador 01 responder
			while(aux != 1){
                questao = Math.floor(Math.random() * 21 + 1);
                aux = 0;
                if(questoesRespondidas.indexOf(questao) == -1 ){
                	countQuestao++;
                    questoesRespondidas[countQuestao] = questao;
                    aux = 1;
                }
            }
            aux = 0;
			//adiciona a pergunta sorteada na div de perguntas
			$("#pergunta").css('background-image', 'none');
			$("#pergunta").html('<p> '+p[questao]+ '</p>');
			//Adiciona as alternativas da pergunta sorteada na div de perguntas
			for (i = 0; i < 4; i++) {
    			var radioBtn = $('<input type="radio" class="radio" name="rbtnCount" value="'+opcoes[questao][i]+'">'+opcoes[questao][i]+' </input><br>');
    			radioBtn.appendTo('#pergunta');
    			//if (i == 1){
    			//	$('#pergunta').append('<br>');
    			//}

			}
			//adiciona o botão responsável por chamar a função "validarResposta"
			$('#pergunta').append('<br><center><input type="button" value="Confirmar Resposta" id="validarResposta" onclick="validarResposta('+questao+','+pin+')" class="butn"> </input></center>');
			
			
		}

	//Bloco de instruções executado na vez do Jogador 02
	}else{
		var pin = 1;
		//Adiciona o valor sorteado do dado ao Jogador 01
		scorePlayer[pin] += numeroSorteado;
		scorePlayer[pin] = eval(scorePlayer[pin]);
		//document.getElementById("IpPassoAtual").value = scorePlayer[pin];
		mover(scorePlayer[pin],pin);

		$("#jogadorAtual").html(' ');
		$("#jogadorAtual").append('<h1 style="color: red;"> Vez do Jogador 02!</h1>');
		// Verifica se o Jogador 02 está em um ponto turistico
		if (scorePlayer[pin] == 3 || scorePlayer[pin] == 8 || scorePlayer[pin] == 11 || scorePlayer[pin] == 16 || scorePlayer[pin] == 23 || scorePlayer[pin] == 30 || scorePlayer[pin] ==32) {
			document.getElementById("rodar").disabled = true;
			//Sorteia uma das perguntas para o Jogador 02 responder
            while(aux != 1){
                questao = Math.floor(Math.random() * 21 + 1);
                aux = 0;
                if(questoesRespondidas.indexOf(questao) == -1 ){
                	countQuestao++;
                   questoesRespondidas[countQuestao] = questao;
                    aux = 1;
                }
            }

            aux = 0;
            //adiciona a pergunta sorteada na div de perguntas
			$("#pergunta").css('background-image', 'none');
			$("#pergunta").html('<p> '+p[questao]+ '</p>');
			//Adiciona as alternativas da pergunta sorteada na div de perguntas
			for (i = 0; i < 4; i++) {
    			var radioBtn = $('<input type="radio" class="radio" name="rbtnCount" value="'+opcoes[questao][i]+'">'+opcoes[questao][i]+' </input><br>');
    			radioBtn.appendTo('#pergunta');
    			//if (i == 1){
    			//	$('#pergunta').append('<br>');
    			//}
    			
			}
			//adiciona o botão responsável por chamar a função "validarResposta"
			$('#pergunta').append('<br><center><input type="button" value="Confirmar Resposta" id="validarResposta" onclick="validarResposta('+questao+','+pin+')" class="butn"> </input></center>');
			
		
		
	}

		
}
pegarPosição();

}
//Função responsável por verificar se um jogador já passou por um ponto turistico
function pegarPosição(){
	var posicao;
	
	if (scorePlayer[0]>scorePlayer[1])
		posicao = scorePlayer[0];
	else
		posicao = scorePlayer[1];

	mudarBackground(posicao);
}

//Função responsável pela movimentação e animação dos jogadores
function mover(passoAtual,pin){
	document.getElementById("rodar").disabled = true;
	if (passoAtual >= 36) {
		var coordenada = $("#Pos36").offset();
		ganhou(pin);

	}else{
		var coordenada = $("#Pos"+passoAtual+"").offset();
	}
	

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	setTimeout(function(){document.getElementById("rodar").disabled = false;}, 2100);
	
}

//Fução responsável por atribuir as bonificações e penalidades, no acerto ou não de uma pergunta, para cada "ponto turistico"
function questoes(passoAtual,pin,resposta){

	switch(passoAtual)
	{
	//Para o Museu de Paleontologia
	case 3:
		if (resposta == 1){
			passoAtual += 3;
			acertou(3);
		}else{
			passoAtual -= 3;
			errou(3);
		}
	break;
	//Para a Chapada do Araripe
	case 8:
		if (resposta == 1){
			passoAtual += 1;
			acertou(1);
		}else{
			passoAtual -= 1;
			errou(1);
		}
	break;
	//Para a Festa de Santo Antônio (Pau da Bandeira)
	case 11:
		if (resposta == 1){
			passoAtual += 3;
			acertou(3);
		}else{
			passoAtual -= 2;
			errou(2);
		}
	break;
	//Para a Santa do Crato
	case 16:
		if (resposta == 1){
			passoAtual += 2;
			acertou(2);
		}else{
			passoAtual -= 3;
			errou(3);
		}
	break;
	//Para a Igreja Matriz de São José
	case 23:
		if (resposta == 1){
			passoAtual += 4;
			acertou(4);
		}else{
			passoAtual -= 1;
			errou(1);
		}
	break;
	//Para o Luzeiro da Fé
	case 30:
		if (resposta == 1){
			passoAtual += 0;
			acertou(0);
		}else{
			passoAtual -= 6;
			errou(6);
		}
	break;
	//Para a Estatua do Padre Cicero
	case 32:
		if (resposta == 1){
			passoAtual += 2;
			acertou(2);
		}else{
			passoAtual -= 0;
			errou(0);
		}
	break;

	}

	//Atribuição da penalidade ou bonificação a posição do jogador
	var coordenada = $("#Pos"+passoAtual+"").offset();

	setTimeout( function(){

		$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	},4000);

	scorePlayer[pin]=passoAtual;
	setTimeout(function(){document.getElementById("rodar").disabled = false;}, 6000);
	
}

//Função responsável por alterar o background do tabuleiro dinamicamente
function mudarBackground(posicao){

//A mudança do background é dada de acordo ao último "ponto turistico" que foi ultrapassado
	if (posicao>=3 && posicao<8) 
		$('#pagina').css('background-image', 'url(image1.jpg)').fadeIn(500);
	else if (posicao>=8 && posicao<11) 
		$('#pagina').css('background-image', 'url(image2.jpg)').fadeIn(500);
	else if (posicao>=11 && posicao<16) 
		$('#pagina').css('background-image', 'url(image3.jpg)').fadeIn(500);
	else if (posicao>=16 && posicao<23) 
		$('#pagina').css('background-image', 'url(image4.jpg)').fadeIn(500);
	else if (posicao>=23 && posicao<30) 
		$('#pagina').css('background-image', 'url(image5.jpg)').fadeIn(500);
	else if (posicao>=30 && posicao<32) 
		$('#pagina').css('background-image', 'url(image6.jpg)').fadeIn(500);
	else if (posicao>=32 && posicao<37) 
		$('#pagina').css('background-image', 'url(image7.jpg)').fadeIn(500);

}

//Função responsável por "Alertar" o Jogador Vencedor do jogo
function ganhou(pin){
	pin +=1;
	$(".venceu").fadeIn(800);
	$(".interna h4").text('Você venceu!');
	$(".interna p").text('Jogador '+pin+'');
}

//Função responsável por "Alertar" o número de casas a serem avançadas pelo jogador
function acertou(casasAvançou){
	$(".alertAcertou").fadeIn();
	$(".alertAcertou").text('Acertou!!! Avançou '+casasAvançou+' casa(s)');
	setTimeout(function () {
  	$(".alertAcertou").hide('');
	}, 3000);
}

//Função responsável por "Alertar" o número de casas a serem voltadas pelo jogador
function errou(casasVoltou){
	$(".alertErrou").fadeIn();
	$(".alertErrou").text('Errou!!! Voltou '+casasVoltou+' casa(s)');
	setTimeout(function () {
  	$(".alertErrou").hide('');
	}, 3000);
}

//Função responsável por verificar se a opção marcada condiz com a resposta correta
function validarResposta(opcaoCorreta,pin){
 	var solucao = getRadioValor('rbtnCount');
 	if (r[opcaoCorreta] == solucao) {
 		questoes(scorePlayer[pin],pin,1);
 	}else{
 		questoes(scorePlayer[pin],pin,0);

 	}

  	$('#pergunta').html('');
  	$("#pergunta").css('background-image', 'url(perguntas.svg)');


 }

 //Função Responsável por retornar o radio button (alternativa) selecionado para uma determinada pergunta 
 function getRadioValor(name){
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }

