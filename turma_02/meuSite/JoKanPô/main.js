function portugues() {
    //ITENS UTILIZADOS
    const itens = ["Pedra", "Papel", "Tesoura"]

    //PERGUNTA DO JOGADOR
    const jogador = parseInt(prompt("Escolha uma opcao para jogar:\n[0] Pedra\n[1] Papel\n[2]Tesoura\nDigite sua escolha:"))

    //CONTAGEM DO PEDRA PAPEL TESOURA
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    sleep(1000).then(() => {document.write("PEDRA");});
    sleep(2000).then(() => {document.write("<br>PAPEL");});
    sleep(3000).then(() => {document.write("<br>TESOURA");});

    //NUMERO RANDOMICO DO COMPUTADOR
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const computador = getRandomInt(0,2)

    //VALIDAR OPCAO ESCOLHIDA
    if (jogador < 0 || jogador > 2) {
        sleep(3500).then(() => {document.write("<br>Sua opção é invalida.<br>[F5] Para jogar novamente!"); });
    } else {
        //JOGADAS DO COMPUTADOR E DO JOGADOR(VOCE)
        sleep(4000).then(() => { document.write("<br><br>Você Jogou: " + itens[jogador]); });
        sleep(4500).then(() => { document.write("<br>Computador Jogou: " + itens[computador]); });
        //COMPARACOES DO JOGO
        if (computador == 0) {
            if (jogador == 0) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Empate!"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else if (jogador == 1) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Você venceu"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else if (jogador == 2) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Você perdeu"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else {
                sleep(5900).then(() => { document.write("<br>Operacao invalida"); });
            }
        } else if (computador == 1) {
            if (jogador == 0) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Você perdeu"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else if (jogador == 1) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Empate!"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else if (jogador == 2){
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Você venceu"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else {
                sleep(5900).then(() => { document.write("<br>Operacao invalida"); });
            }
        } else if (computador == 2) {
            if (jogador == 0) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Você perdeu"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else if (jogador == 1) {
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Você venceu"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else if (jogador == 2) { 
                sleep(5900).then(() => { document.write("<br>=========="); });
                sleep(5900).then(() => { document.write("<br>Empate!"); });
                sleep(5900).then(() => { document.write("<br>=========="); });
            } else {
                sleep(5900).then(() => { document.write("<br>Operacao invalida"); });
            }
        } else {
            sleep(5900).then(() => { document.write("<br>Operacao invalida"); });
        }
    }
    sleep(3200).then(() => {document.write(computador);});
}
//FUNCAO PARA GAME EM INGLES
function ingles() {
        //ITENS UTILIZADOS
        const itens = ["Jo", "ken", "Pô"]

        //PERGUNTA DO JOGADOR
        const jogador = parseInt(prompt("Choose an option to play:\n[0] Jo\n[1] Ken\n[2]Pô\nEnter your choice:"))

        //CONTAGEM JO KEN PÔ
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        sleep(1000).then(() => { document.write("JO"); });
        sleep(2000).then(() => { document.write("<br>KEN"); });
        sleep(3000).then(() => { document.write("<br>PÔ"); });

        //NUMERO RANDOMICO DO COMPUTADOR
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const computador = getRandomIntInclusive(0,2)

        //VALIDAR OPCAO ESCOLHIDA
        if (jogador < 0 || jogador > 2) {
            sleep(3500).then(() => { document.write("<br>Your option is invalid.<br>[F5] to reload!"); });
        } else {
            //JOGADAS DO COMPUTADOR E DO JOGADOR(VOCE)
            sleep(4000).then(() => { document.write("<br><br>You played: " + itens[jogador]); });
            sleep(4500).then(() => { document.write("<br>Computer played: " + itens[computador]); });
            //COMPARACOES DO JOGO
            if (computador == 0) {
                if (jogador == 0) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>Drawn!"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else if (jogador == 1) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>You Lose"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else if (jogador == 2) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>You Win"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else {
                    sleep(5900).then(() => { document.write("<br>Invalid operation"); });
                }
            } else if (computador == 1) {
                if (jogador == 0) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>You Win"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else if (jogador == 1) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>Drawn!"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else if (jogador == 2){
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>You Lose"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else {
                    sleep(5900).then(() => { document.write("<br>Invalid operation"); });
                }
            } else if (computador == 2) {
                if (jogador == 0) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>You Lose"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else if (jogador == 1) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>You Win"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else if (jogador == 2) {
                    sleep(5900).then(() => { document.write("<br>=========="); });
                    sleep(5900).then(() => { document.write("<br>Drawn!"); });
                    sleep(5900).then(() => { document.write("<br>=========="); });
                } else {
                    sleep(5900).then(() => { document.write("<br>Invalid operation"); });
                }
            } else {
                sleep(5900).then(() => { document.write("<br>Invalid operation"); });
            }
        }
    //document.write(computador)
}

//PERGUNTA DO IDIOMA DO GAME
const idioma = parseInt(prompt("Escolha um IDIOMA:\n[1] INGLES\n[2] PORTUGUES\nDigite sua escolha:"))
// CONDICAO DO IDIOMA DO GAME
if (idioma == 1) {
    ingles();
} else {
    portugues();
}