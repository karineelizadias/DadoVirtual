// Seleciona os elementos do HTML
const botao = document.getElementById('rolar');
const resultado = document.getElementById('resultado');

// Função para gerar número aleatório de 1 a 6
function rolarDado() {
  const numero = Math.floor(Math.random() * 6) + 1;
  resultado.textContent = numero;

  // Pequena animação
  resultado.style.transform = 'scale(1.3)';
  setTimeout(() => resultado.style.transform = 'scale(1)', 150);
}

// Evento de clique no botão
botao.addEventListener('click', rolarDado);
