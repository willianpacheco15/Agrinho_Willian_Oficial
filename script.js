// esse código espera a página carregar completamente para executar as ações
document.addEventListener("DOMContentLoaded", function() {

    // mensagem no console 
    console.log("JS carregado! Página #Agrinho pronta para uso.");

    // alerta de boas-vindas 
    setTimeout(function() {
        alert("🌱 Olá! Essa é a estrutura do concurso #Agrinho.");
    }, 500);

    // selecionando todos os cards (blocos de informação)
    const cards = document.querySelectorAll(".card");

    // para cada card, adicionamos um evento de clique
    cards.forEach(function(card, indice) {
        card.addEventListener("click", function() {
            // pega o título do card que foi clicado
            let titulo = card.querySelector("h2").innerText;
            console.log("clicou no card: " + titulo);
            // pode adicionar um alerta opcional (descomentar se quiser)
            // alert("Você clicou em: " + titulo);
        });
    });

    // efeito simples no rodapé: muda cor ao passar o mouse
    const rodape = document.querySelector("footer");
    if (rodape) {
        rodape.style.transition = "background-color 0.3s";
        
        rodape.addEventListener("mouseenter", function() {
            rodape.style.backgroundColor = "#0f2a14";
        });
        
        rodape.addEventListener("mouseleave", function() {
            rodape.style.backgroundColor = "#1f3b21";
        });
    }

    // mensagem extra mostrando quantos cards tem na página
    console.log("Total de cards na página: " + cards.length);
});