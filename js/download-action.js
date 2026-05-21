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
    const nomeArquivo = urlDaImagem.split('/').pop() || 'imagem_expandida.jpg';
    
    baixarArquivo(urlDaImagem, nomeArquivo);
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
    
    baixarArquivo(urlPdf, nomePdf);
  });
});