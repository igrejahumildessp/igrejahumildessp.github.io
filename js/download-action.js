// Função genérica que força o download de qualquer URL passada para ela
function baixarArquivo(url, nomeSugerido) {
  const link = document.createElement('a'); // Cria um link <a> invisível
  link.href = url;                          // Define o caminho do arquivo
  link.download = nomeSugerido || 'download'; // Adiciona o atributo que força o download
  
  document.body.appendChild(link);          // Coloca o link na página (escondido)
  link.click();                             // Simula o clique do usuário
  document.body.removeChild(link);          // Remove o link para não sujar o HTML
}

// =======================================================
// LÓGICA 1: Baixar a imagem que está aberta no Modal
// =======================================================
const downloadBtn = document.getElementById('download-btn');
const imgExpandida = document.getElementById('expanded-img');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const urlDaImagem = imgExpandida.src;
    
    // Pega o nome do arquivo direto da URL (ex: "festa-pentecostes-2026.jpeg")
    const nomeArquivo = urlDaImagem.split('/').pop() || 'imagem_expandida.webp';

    // --- FEEDBACK VISUAL NO BOTÃO DO MODAL ---
    const textoOriginal = downloadBtn.innerHTML; // Salva o texto ou ícone original
    downloadBtn.innerText = 'Iniciando download...';
    downloadBtn.style.opacity = '0.7'; // Visual de "ocupado"
    downloadBtn.disabled = true;       // Trava o botão contra cliques duplos
    
    baixarArquivo(urlDaImagem, nomeArquivo);
    
    // --- RESTAURAÇÃO DO BOTÃO ---
    // Faz o botão voltar ao normal após 2.5 segundos
    setTimeout(() => {
      downloadBtn.innerHTML = textoOriginal;
      downloadBtn.style.opacity = '1';
      downloadBtn.disabled = false;
    }, 2500);
  });
}

// =======================================================
// LÓGICA 2: Baixar PDFs ou outros arquivos direto dos cards
// =======================================================
const botoesPdf = document.querySelectorAll('.download-pdf-btn');

botoesPdf.forEach(botao => {
  botao.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique no botão abra o modal sem querer
    
    const urlPdf = botao.getAttribute('data-url');
    const nomePdf = botao.getAttribute('data-name') || 'documento.pdf';
    
    // --- FEEDBACK VISUAL NO BOTÃO DO CARD ---
    const textoOriginal = botao.innerHTML; // Salva o texto original do card
    botao.innerText = 'Baixando...';
    botao.style.opacity = '0.7';           // Visual de "ocupado"
    
    baixarArquivo(urlPdf, nomePdf); // (Seu código original)
    
    // --- RESTAURAÇÃO DO BOTÃO ---
    // Faz o botão do card voltar ao normal após 2.5 segundos
    setTimeout(() => {
      botao.innerHTML = textoOriginal;
      botao.style.opacity = '1';
    }, 2500);
  });
});