// Seleciona todos os CARDS em vez de apenas as imagens
const cards = document.querySelectorAll('.notice-card');
const dialog = document.getElementById('preview-dialog');
const expandedImg = document.getElementById('expanded-img');
const expandedTitle = document.getElementById('expanded-title'); // Seleciona o novo título do modal
const closeBtn = document.getElementById('close-btn');

// Mapeia cada card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Busca a imagem e o título DENTRO do card que foi clicado
    const img = card.querySelector('.notice-img');
    const title = card.querySelector('.notice-title');

    // Passa os dados para o modal
    expandedImg.src = img.src; 
    expandedImg.alt = img.alt; 
    expandedTitle.textContent = title.textContent; // Copia o texto do título
    
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