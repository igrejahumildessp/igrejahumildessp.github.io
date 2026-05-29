// Seleciona todos os CARDS para agrupar a imagem e o título corretamente
const cards = document.querySelectorAll('.expandable');
const dialog = document.getElementById('preview-dialog');
const expandedImg = document.getElementById('expanded-img');
const expandedTitle = document.getElementById('expanded-title'); 
const closeBtn = document.getElementById('close-btn');

// Mapeia cada card
cards.forEach(card => {
  // Busca a imagem e o título DENTRO do card atual
  const img = card.querySelector('.expandable-img');
  const title = card.querySelector('.expandable-title');

  // Adiciona o evento de clique APENAS na imagem (se ela existir), e não no card inteiro
  if (img) {
    img.addEventListener('click', () => {
      // 1. Passa os dados da imagem para o modal
      expandedImg.src = img.src; 
      expandedImg.alt = img.alt;

      // 2. Verifica se o título existe neste card
      if (title) {
        expandedTitle.textContent = title.textContent; 
        expandedTitle.style.display = 'block';         
      } else {
        expandedTitle.textContent = '';                
        expandedTitle.style.display = 'none';          
      }
      
      dialog.showModal(); 
    });
  }
});

// Fechar ao clicar no botão 'X'
closeBtn.addEventListener('click', () => {
  dialog.close();
});

// Fechar ao clicar no fundo escuro
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});