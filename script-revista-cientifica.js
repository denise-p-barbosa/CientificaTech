document.addEventListener("DOMContentLoaded", function() {
    
    // Pegar elementos pelos IDs novos (-EGF)
    const btnAssuntos = document.getElementById('btn-assuntos-EGF');
    const painelAssuntos = document.getElementById('painel-topicos-EGF');
    const seta = document.querySelector('.seta-indicadora-EGF');

    // Se o botão não existir na página, para o script para não dar erro
    if (!btnAssuntos) return;

    // Função de clique
    btnAssuntos.addEventListener('click', function(e) {
        e.stopPropagation(); // Previne que o clique feche imediatamente
        painelAssuntos.classList.toggle('mostrar-painel-EGF');
        seta.classList.toggle('ativo-rotacao-EGF');
    });

    // Fechar se clicar fora do menu
    document.addEventListener('click', function(e) {
        if (!painelAssuntos.contains(e.target) && !btnAssuntos.contains(e.target)) {
            painelAssuntos.classList.remove('mostrar-painel-EGF');
            seta.classList.remove('ativo-rotacao-EGF');
        }
    });
});