var cont = 1;
var scorePlayer0=0;
var scorePlayer1=0;
		
		var p = new Array();
	    var r = new Array();
 		var opcoes = new Array(
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
	    r[1] = 'da primeira flor do planeta';
	    p[2] = "Uma Ave caracteristica do Geoparque do Araripe é ______ - do - Araripe.";
	    r[2] = 'o Soldadinho';
	    p[3] = "A primeira Floresta Nacional do Brasil foi criada na Chapada do Araripe, sendo conhecida como:";
	    r[3] = 'FLONA';
	    p[4] = "O Museu de Paleontologia de Santana do Cariri, foi fundado e inaugurado no dia 26 de julho de 1988, data esta que marca a sua doação por contrato de comodato a uma instituição de ensino da região, adicionando o nome da mesma ao nome do Museu. Qual a instituição de ensino responsável por administrar esse museu?";
	    r[4] = 'URCA';
	    p[5] = "O Museu de Paleontologia da região do cariri fica situado em qual cidade?";
	    r[5] = 'Santana do Cariri';
	    p[6] = "O Museu de Paleontologia da região do cariri é responsável por projetos de escavações permanantes na:";
	    r[6] = 'Chapada do Araripe';
	    p[7] = "O Luzeiro da Fé é uma torre de 113 metros de altura e foi concebido como uma homenagem:";
	    r[7] = 'aos Romeiros';
	    p[8] = "Em qual cidade fica localizado o Luzeiro da Fé?";
	    r[8] = 'Juazeiro do Norte';
	    p[9] = "O Luzeiro da Fé também é conhecido como:";
	    r[9] = 'Luzeiro do Cariri';
	    p[10] = "A estatua de Nossa Senhora de Fátima está situada em qual cidade do cariri?";
	    r[10] = 'Crato';
	    p[11] = "O monumento de Nossa Senhora de Fátima foi feito em homenagem a:"
	    r[11] = 'O Aniversário de 250 anos do Crato';
	    p[12] = "A estatua de Nossa Senhora de Fátima é considerado um dos maioiores monumentos do Brasil, sendo maior até que o monumento do Cristo Redentor. Qual o tamanho dessa estatua?"
	    r[12] = '45 Metros';
	    p[13] = "O monumento (estatua) em homenagem a Padre Cicero Romão Batista está localizada em qual cidade?"
	    r[13] = 'Juazeiro do Norte';
	    p[14] = "A estatua do Padre Cicero foi inaugurada no dia 1° de 1969, no alto da colina do horto, ou como é conhecida:"
	    r[14] = 'Serra do Catolé';
	    p[15] = "A estatua do Padre Cicero foi criada em homenagem ao grande lider religioso e politico da região do cariri, o qual é conhecido pelo:"
	    r[15] = 'Milagre da Hóstia';
	    p[16] = "A Igreja Matriz de São José foi nomeada em nome do padroeiro de uma cidade do cariri. Qual o nome dessa cidade?"
	    r[16] = 'Missão Velha';
	    p[17] = "A Igreja Matriz de São José de Missão Velha está localizada na praça principal de sua cidade. Qual o nome dessa praça?"
	    r[17] = 'Praça Monsenhor Horácio';
	    p[18] = "O Primeiro templo catolico da região do cariri foi construido em 1725 pelos portugueses, o qual recebeu o nome de:"
	    r[18] = 'Igreja Matriz de São José';
	    p[19] = "A festa do 'Pau da Bandeira', festividade anual popular da região do cariri, é realizada em qual cidade?"
	    r[19] = 'Barbalha';
	    p[20] = "A festa do 'Pau da Bandeira', festividade anual popular da região do cariri, é dedicada ao Santo Padroeiro de Barbalha. Qual o nome desse Santo?"
	    r[20] = 'Santo Antonio';
	    p[21] = "A festa do Santo Antonio de Barbalha, tem como principal atração a derrubada e transporte de um tronco que servirá como 'Pau da Bandeira'. Qual a Bandeira hasteada nessa comemoração?"
	    r[21] = 'Bandeira de Santo Antonio';

function sortearNumero(){
	var passoAtual=0;

	cont ++;
	
	var numeroSorteado = (Math.floor(Math.random() * 6))+ 1;

	document.getElementById("IpNumeroSorteado").value = numeroSorteado;

	

	if (cont % 2 == 0) {
		var pin = 0;
		scorePlayer0 += numeroSorteado;
		scorePlayer0 = eval(scorePlayer0);
		document.getElementById("IpPassoAtual").value = scorePlayer0;
		mover(scorePlayer0,numeroSorteado,pin);
		$("#jogadorAtual").html(' ');
		$("#jogadorAtual").append('<h1 style="color: blue;"> Vez do Jogador 01!</h1>');
		if (scorePlayer0 == 3 || scorePlayer0 == 8 || scorePlayer0 == 11 || scorePlayer0 == 16 || scorePlayer0 == 23 || scorePlayer0 == 30 || scorePlayer0 ==32) {
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
			//$("#pergunta").append('<form><input type="radio" name="respostas" value="'+o[1]+'"> '+o[1]'<input type="radio" name="respostas" value="'+o[2]+'">'+o[2]+'<input type="radio" name="respostas" value="'+o[3]+'">'+o[3]+'<input type="radio" name="respostas" value="'+o[4]+'">'+o[4]+'</form>'); 
			//$("#pergunta").append(questoesRespondidas);
	}else{
		var pin = 1;
		scorePlayer1 += numeroSorteado;
		scorePlayer1 = eval(scorePlayer1);
		document.getElementById("IpPassoAtual").value = scorePlayer1;
		mover(scorePlayer1,numeroSorteado,pin);
		$("#jogadorAtual").html(' ');
		$("#jogadorAtual").append('<h1 style="color: red;"> Vez do Jogador 02!</h1>');
		if (scorePlayer1 == 3 || scorePlayer1 == 8 || scorePlayer1 == 11 || scorePlayer1 == 16 || scorePlayer1 == 23 || scorePlayer1 == 30 || scorePlayer1 ==32) {
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
			//$("#pergunta").append('<form><input type="radio" name="respostas" value="'+o[1]+'"> '+o[1]'<input type="radio" name="respostas" value="'+o[2]+'">'+o[2]+'<input type="radio" name="respostas" value="'+o[3]+'">'+o[3]+'<input type="radio" name="respostas" value="'+o[4]+'">'+o[4]+'</form>'); 
			//$("#pergunta").append(questoesRespondidas);

	}
	var posicao;
	
	if (scorePlayer0>scorePlayer1)
		posicao = scorePlayer0;
	else
		posicao = scorePlayer1;

	mudarBackground(posicao);
}

function mover(passoAtual,numeroSorteado,pin){


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

