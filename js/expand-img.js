// Seleciona todos os CARDS em vez de apenas as imagens
const cards = document.querySelectorAll('.expandable');
const dialog = document.getElementById('preview-dialog');
const expandedImg = document.getElementById('expanded-img');
const expandedTitle = document.getElementById('expanded-title'); // Seleciona o novo título do modal
const closeBtn = document.getElementById('close-btn');

// Mapeia cada card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Busca a imagem e o título DENTRO do card que foi clicado
    const img = card.querySelector('.expandable-img');
    const title = card.querySelector('.expandable-title');

    // 1. Passa os dados da imagem para o modal (com uma checagem de segurança básica)
    if (img) {
      expandedImg.src = img.src; 
      expandedImg.alt = img.alt;
    }

    // 2. O SEGREDO ESTÁ AQUI: Verifica se o título existe neste card
    if (title) {
      expandedTitle.textContent = title.textContent; // Copia o texto
      expandedTitle.style.display = 'block';         // Garante que o H2 fique visível
    } else {
      expandedTitle.textContent = '';                // Limpa o texto antigo
      expandedTitle.style.display = 'none';          // Esconde o H2 para não sobrar espaço vazio
    }
    
    dialog.showModal(); // Abre o dialog
  });
});

// Fechar ao clicar no botão 'X'
closeBtn.addEventListener('click', () => {
  dialog.close();
});

// Fechar ao clicar no fundo escuro
dialog.addEventListener('click', (e) => {
  // Como agora o modal tem um texto, o clique fora deve checar se acertou o próprio dialog
  if (e.target === dialog) {
    dialog.close();
  }
});