document.addEventListener("DOMContentLoaded", () => {
    // 1. Limpeza de URL ao carregar a página (vindo de outro arquivo)
    // Se a URL tiver "index.html" OU se tiver uma âncora (hash, ex: #avisos)
    if (window.location.href.includes("index.html") || window.location.hash) {
        
        // Pega o caminho atual (ex: /index.html) e tira o index.html
        const pathLimpo = window.location.pathname.replace("index.html", "");
        
        // Reconstrói a URL limpa (mantendo apenas parâmetros de busca, se houver)
        const urlLimpa = pathLimpo + window.location.search;
        
        // Atualiza a barra de navegação sem recarregar a página
        window.history.replaceState(null, "", urlLimpa);
    }

    // 2. Aplica o scroll suave para links clicados DENTRO da própria página
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Rola suavemente até o elemento
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Mantém a URL limpa ao clicar
                const pathLimpo = window.location.pathname.replace("index.html", "");
                window.history.replaceState(null, "", pathLimpo + window.location.search);
            }
        });
    });
});