		var cont = 1;
		var scorePlayer = new Array();
		scorePlayer[0]=0;
		scorePlayer[1]=0;
		var questoesRespondidas = new Array();
		var p = new Array();
	    var r = new Array();
	    //var o = new Array();
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
			["LUZEIRO DE PADRE CICERO","LUZEIRO DOS ROMEIROS","LUZEIRO DO CARARI","LUZEIRO DO JUAZEIRO"],
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
	    // LISTA DE PERGUNTAS
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

function sortearNumero(){
	var passoAtual=0;

	cont ++;
	
	var numeroSorteado = (Math.floor(Math.random() * 6))+ 1;

	document.getElementById("IpNumeroSorteado").value = numeroSorteado;

	

	if (cont % 2 == 0) {
		var pin = 0;
		scorePlayer[pin] += numeroSorteado;
		scorePlayer[pin] = eval(scorePlayer[pin]);
		document.getElementById("IpPassoAtual").value = scorePlayer[pin];
		mover(scorePlayer[pin],pin);
		$("#jogadorAtual").html(' ');
		$("#jogadorAtual").append('<h1 style="color: blue;"> Vez do Jogador 01!</h1>');
		if (scorePlayer[pin] == 3 || scorePlayer[pin] == 8 || scorePlayer[pin] == 11 || scorePlayer[pin] == 16 || scorePlayer[pin] == 23 || scorePlayer[pin] == 30 || scorePlayer[pin] ==32) {
			questao = Math.floor(Math.random() * 21 + 1);
			questoesRespondidas += questao;
			$("#pergunta").append('<p> '+p[questao]+ '</p>');
			
			for (i = 0; i < 4; i++) {
    			var radioBtn = $('<input type="radio" name="rbtnCount" value="'+opcoes[questao][i]+'">'+opcoes[questao][i]+' </input>');
    			radioBtn.appendTo('#pergunta');
    			if (i == 1){
    				$('#pergunta').append('<br>');
    			}

			}
			$('#pergunta').append('<br><input type="button" value="Confirmar Resposta" id="validarResposta" onclick="validarResposta('+questao+','+pin+')"> </input>');
			
			//scorePlayer[pin] = questaoM(scorePlayer[pin],pin,resposta);
		}

		
	}else{
		var pin = 1;
		scorePlayer[pin] += numeroSorteado;
		scorePlayer[pin] = eval(scorePlayer[pin]);
		document.getElementById("IpPassoAtual").value = scorePlayer[pin];
		mover(scorePlayer[pin],pin);
		$("#jogadorAtual").html(' ');
		$("#jogadorAtual").append('<h1 style="color: red;"> Vez do Jogador 02!</h1>');
		if (scorePlayer[pin] == 3 || scorePlayer[pin] == 8 || scorePlayer[pin] == 11 || scorePlayer[pin] == 16 || scorePlayer[pin] == 23 || scorePlayer[pin] == 30 || scorePlayer[pin] ==32) {
			questao = Math.floor(Math.random() * 21 + 1);
			questoesRespondidas += questao;
			$("#pergunta").append('<p> '+p[questao]+ '</p>');
			
			for (i = 0; i < 4; i++) {
    			var radioBtn = $('<input type="radio" name="rbtnCount" value="'+opcoes[questao][i]+'">'+opcoes[questao][i]+' </input>');
    			radioBtn.appendTo('#pergunta');
    			if (i == 1){
    				$('#pergunta').append('<br>');
    			}
    			
			}
			$('#pergunta').append('<br><input type="button" value="Confirmar Resposta" id="validarResposta" onclick="validarResposta('+questao+','+pin+')"> </input>');
		
		//scorePlayer[pin] = questaoM(scorePlayer[pin],pin,resposta);
	}

		
}
	var posicao;
	
	if (scorePlayer[pin]>scorePlayer[pin])
		posicao = scorePlayer[pin];
	else
		posicao = scorePlayer[pin];

	mudarBackground(posicao);
}

function mover(passoAtual,pin){

	if (passoAtual >= 36) {
		var coordenada = $("#Pos36").offset();
		alert("Voçê Ganhou");

	}else{
		var coordenada = $("#Pos"+passoAtual+"").offset();
	}
	

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);
	
	
}

function questao1(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 3;
	}else{
		passoAtual -= 3;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function questao2(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 1;
	}else{
		passoAtual -= 1;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function questao3(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 3;
	}else{
		passoAtual -= 2;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function questao4(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 2;
	}else{
		passoAtual -= 3;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function questao5(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 4;
	}else{
		passoAtual -= 1;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function questao6(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 0;
	}else{
		passoAtual -= 6;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function questao7(passoAtual,pin,resposta){
	
	if (resposta == 1){
		passoAtual += 2;
	}else{
		passoAtual -= 0;
	}
	var coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

	scorePlayer[pin]=passoAtual;
	alert(scorePlayer[pin]);
}

function mudarBackground(posicao){

	if (posicao>=3 && posicao<8) 
		$('#pagina').css("backgroundColor","yellow").fadeIn(10000);
	else if (posicao>=8 && posicao<11) 
		$('#pagina').css("backgroundColor","red").fadeIn(10000);
	else if (posicao>=11 && posicao<17) 
		$('#pagina').css("backgroundColor","pink").fadeIn(10000);
	else if (posicao>=17 && posicao<24) 
		$('#pagina').css("backgroundColor","blue").fadeIn(10000);
	else if (posicao>=24 && posicao<31) 
		$('#pagina').css("backgroundColor","gray").fadeIn(10000);
	else if (posicao>=31 && posicao<37) 
		$('#pagina').css("backgroundColor","green").fadeIn(10000);

}

function validarResposta(opcaoCorreta,pin){
 	var solucao = getRadioValor('rbtnCount');
 	if (r[opcaoCorreta] == solucao) {
 		alert('O valor selecionado está correto!!!');
 		questao1(scorePlayer[pin],pin,1);
 	}else{
 		alert('O valor selecionado está errado!!');

 	}

  	$('#pergunta').html('<body style = "background-image: url("duvid.jpg");> </body> ');


 }
  
 function getRadioValor(name){
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }

