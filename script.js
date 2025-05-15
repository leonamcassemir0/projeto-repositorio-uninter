// Função para criar efeito de digitação
function digitacao(elemento, texto, speed) {
  let i = 0;
  
  // Limpa o elemento antes de começar
  elemento.innerHTML = '';
  
  // Função que adiciona um caractere por vez
  function addCaracter() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(addCaracter, speed = 300);
    }
  }
  
  // Inicia o efeito
  addCaracter();
}


document.addEventListener('DOMContentLoaded', function() {
  const tituloId = document.getElementById('titulo');
  const texto = "Leonam Cassemiro";
  
  // Inicia o efeito quando a página carregar
  digitacao(tituloId, texto, 50);
});