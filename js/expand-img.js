const dialog = document.getElementById('preview-dialog');
const expandedImg = document.getElementById('expanded-img');
const expandedTitle = document.getElementById('expanded-title'); 
const closeBtn = document.getElementById('close-btn');

// Escutamos os cliques no CORPO INTEIRO do site (funciona na Index e na Galeria)
document.body.addEventListener('click', function(e) {
    // Verifica se o elemento clicado tem a classe da imagem
    if (e.target.classList.contains('expandable-img')) {
        const img = e.target;
        // Procura o card em volta da imagem clicada
        const card = img.closest('.expandable');
        
        // Verifica se encontrou o card e o título dentro dele
        let title = null;
        if (card) {
            title = card.querySelector('.expandable-title');
        }

        // Passa os dados para o modal
        expandedImg.src = img.src; 
        expandedImg.alt = img.alt;

        if (title) {
            expandedTitle.textContent = title.textContent; 
            expandedTitle.style.display = 'block';         
        } else {
            expandedTitle.textContent = '';                
            expandedTitle.style.display = 'none';          
        }
        
        dialog.showModal(); 
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