/* ======================================================= */
/* 1. LÓGICA DO MAPA MENTAL CLICÁVEL                       */
/* ======================================================= */

// Banco de dados com as explicações de cada botão
const dadosMapa = {
    materia: {
        titulo: "Matéria",
        texto: "É tudo que tem massa e ocupa lugar no espaço. Ela pode ser classificada de acordo com a sua composição em Substâncias Puras ou Misturas."
    },
    substancia: {
        titulo: "Substância Pura",
        texto: "Possui composição química fixa e propriedades constantes (como temperatura de fusão e ebulição exatas)."
    },
    mistura: {
        titulo: "Misturas",
        texto: "Formadas por duas ou mais substâncias puras. Suas propriedades variam durante o aquecimento."
    },
    simples: {
        titulo: "Substância Simples",
        texto: "Formada por átomos de um único elemento químico. Exemplo: Gás Oxigênio ($O_2$)."
    },
    composta: {
        titulo: "Substância Composta",
        texto: "Formada por átomos de dois ou mais elementos químicos diferentes. Exemplo: Água ($H_2O$)."
    },
    homogenea: {
        titulo: "Mistura Homogênea (Solução)",
        texto: "Apresenta uma única fase (aspecto visual uniforme). Exemplo: Água com sal totalmente dissolvido."
    },
    heterogenea: {
        titulo: "Mistura Heterogênea",
        texto: "Apresenta duas ou mais fases (aspectos visuais diferentes). Exemplo: Água e óleo."
    }
};

// Função acionada ao clicar nos botões do mapa
function mostrarInfo(chave) {
    const painel = document.getElementById('painel-info');
    
    // Altera o HTML interno do painel com base na chave clicada
    painel.innerHTML = `
        <h3>${dadosMapa[chave].titulo}</h3>
        <p>${dadosMapa[chave].texto}</p>
    `;
}

/* ======================================================= */
/* 2. LÓGICA DE ARRASTAR E SOLTAR (DRAG & DROP)            */
/* ======================================================= */

// Selecionamos todas as peças e todas as caixas
const pecas = document.querySelectorAll('.peca-arrastavel');
const caixas = document.querySelectorAll('.caixa-alvo');

// Etapa A: O que acontece quando o aluno COMEÇA a arrastar a peça
pecas.forEach(peca => {
    peca.addEventListener('dragstart', (evento) => {
        // Armazenamos o ID da peça na memória do navegador para usarmos depois
        evento.dataTransfer.setData('text/plain', evento.target.id);
        evento.target.style.opacity = '0.5'; // Deixa a peça meio transparente ao mover
    });

    peca.addEventListener('dragend', (evento) => {
        evento.target.style.opacity = '1'; // Volta ao normal quando soltar
    });
});

// Etapa B: O que acontece nas caixas quando a peça passa por cima delas
caixas.forEach(caixa => {
    // É necessário cancelar o comportamento padrão do navegador para permitir soltar
    caixa.addEventListener('dragover', (evento) => {
        evento.preventDefault(); 
    });

    // Etapa C: O momento em que o aluno SOLTA a peça dentro da caixa
    caixa.addEventListener('drop', (evento) => {
        evento.preventDefault();
        
        // Recuperamos o ID da peça que estava na memória
        const idPeca = evento.dataTransfer.getData('text/plain');
        const pecaArrastada = document.getElementById(idPeca);
        
        // Comparamos a classificação: O 'data-tipo' da peça bate com o 'data-aceita' da caixa?
        const tipoPeca = pecaArrastada.getAttribute('data-tipo');
        const tipoCaixa = caixa.getAttribute('data-aceita');

        if (tipoPeca === tipoCaixa) {
            // Se acertou: Movemos a peça para dentro da caixa
            caixa.appendChild(pecaArrastada);
            caixa.classList.add('caixa-correta'); // Fica verde
            
            // Removemos a opção de arrastar de novo para finalizar o jogo
            pecaArrastada.setAttribute('draggable', 'false');
            pecaArrastada.style.cursor = 'default';
        } else {
            // Se errou: Alerta rápido e a peça volta para o banco
            alert('Ops! Tente novamente. Reveja o mapa mental acima se precisar.');
        }
    });

    
});

/* ======================================================= */
/* MOTOR GRÁFICO DO SIMULADOR MOLECULAR                    */
/* ======================================================= */
const canvas = document.getElementById('simulador-molecular');
const ctx = canvas.getContext('2d');

// Ajusta a resolução interna do canvas para evitar borrões
function redimensionarCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 350;
}
redimensionarCanvas();
window.addEventListener('resize', redimensionarCanvas);

let particulas = [];
let modoAtual = 'oxigenio';

// Banco de dados explicativo das simulações
const dadosSubstancias = {
    oxigenio: {
        titulo: "Gás Oxigênio ($O_2$)",
        tipo: "Substância Simples",
        desc: "Formado por moléculas diatômicas isoladas flutuando livremente no espaço com alta energia cinética. Cada molécula é composta por dois átomos idênticos ligados quimicamente. Processos físicos como compressão aproximam essas moléculas, mas não alteram sua identidade.",
        pf: "$-218,8^\\circ\\text{C}$", pe: "$-183^\\circ\\text{C}$", dens: "$1,429\\text{ g/L}$"
    },
    hidrogenio: {
        titulo: "Gás Hidrogênio ($H_2$)",
        tipo: "Substância Simples",
        desc: "A menor e mais leve molécula simples está presente aqui. Por possuir uma massa molecular extremamente reduzida, suas partículas movem-se com velocidades médias muito elevadas em temperatura ambiente.",
        pf: "$-259,1^\\circ\\text{C}$", pe: "$-252,8^\\circ\\text{C}$", dens: "$0,089\\text{ g/L}$"
    },
    agua: {
        titulo: "Água Pura ($H_2O$)",
        tipo: "Substância Composta",
        desc: "Exemplo clássico de substância composta de relevância vital. Cada molécula individual é rigidamente constituída por dois elementos químicos combinados em uma proporção estequiométrica inflexível de $2:1$ — um átomo central de Oxigênio ligado a dois de Hidrogênio.",
        pf: "$0^\\circ\\text{C}$", pe: "$100^\\circ\\text{C}$", dens: "$1,00\\text{ g/cm}^3$"
    },
    sal: {
        titulo: "Sal de Cozinha Puro ($NaCl$)",
        tipo: "Substância Composta",
        desc: "O cloreto de sódio puro forma uma estrutura cristalina iônica rígida em estado sólido. Em vez de moléculas isoladas, os íons de Sódio ($Na^+$) e Cloro ($Cl^-$) organizam-se de forma alternada e estável.",
        pf: "$801^\\circ\\text{C}$", pe: "$1465^\\circ\\text{C}$", dens: "$2,16\\text{ g/cm}^3$"
    },
    diamante: {
        titulo: "Carbono Diamante ($C$)",
        tipo: "Elemento Puro (Não Decomponível)",
        desc: "Uma substância elementar pura que não pode ser clivada em entidades químicas mais simples por métodos químicos normais. Os átomos de Carbono ligam-se de forma tetraédrica tridimensional extremamente compacta, conferindo máxima dureza mecânica.",
        pf: "$3550^\\circ\\text{C}$", pe: "$4827^\\circ\\text{C}$", dens: "$3,51\\text{ g/cm}^3$"
    },
    ouro: {
        titulo: "Ouro Puro ($Au$)",
        tipo: "Elemento Puro (Não Decomponível)",
        desc: "Substância pura metálica constituída estritamente por átomos de $Au$. Organiza-se em uma rede cristalina metálica densa onde os elétrons livres fluem ao redor dos núcleos estáveis. Fios de cobre puro trabalham sob essa mesma lógica física ordenada.",
        pf: "$1064^\\circ\\text{C}$", pe: "$2856^\\circ\\text{C}$", dens: "$19,3\\text{ g/cm}^3$"
    },
    'estados-agua': {
        titulo: "Mudanças de Estado Físico",
        tipo: "Transformação Física",
        desc: "Processos térmicos (fusão e ebulição) alteram as forças intermoleculares e o grau de agitação das partículas, mas mantêm a identidade química idêntica. A água no estado gelo, líquido ou vapor permanece sendo rigorosamente compostas por moléculas de $H_2O$.",
        pf: "$0^\\circ\\text{C}$", pe: "$100^\\circ\\text{C}$", dens: "Variável"
    },
    'mistura-homo': {
        titulo: "Mistura Homogênea (Solução)",
        tipo: "Mistura",
        desc: "Sistemas monofásicos onde o soluto encontra-se completamente dissolvido e distribuído de forma homogênea no solvente a nível molecular (como açúcar refinado purificado dissolvido em água). Suas propriedades físicas de fusão e ebulição deixam de ser constantes.",
        pf: "Não constante", pe: "Não constante", dens: "Variável"
    },
    'mistura-hetero': {
        titulo: "Mistura Heterogênea",
        tipo: "Mistura",
        desc: "Sistemas polifásicos que apresentam duas ou mais fases visíveis distintas devido à imiscibilidade das substâncias envolvidas (ex: água e óleo). As partículas agrupam-se separadamente mantendo suas identidades e densidades individuais isoladas.",
        pf: "Múltiplos", pe: "Múltiplos", dens: "Descontínua"
    }
};

// Gerador de partículas químicas na tela
function inicializarParticulas(modo) {
    particulas = [];
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    if (modo === 'oxigenio' || modo === 'hidrogenio') {
        const cor = modo === 'oxigenio' ? '#3182CE' : '#E2E8F0';
        const raio = modo === 'oxigenio' ? 8 : 5;
        const velMax = modo === 'oxigenio' ? 2 : 4;
        
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * (canvas.width - 40) + 20;
            let y = Math.random() * (canvas.height - 40) + 20;
            let dx = (Math.random() - 0.5) * velMax;
            let dy = (Math.random() - 0.5) * velMax;
            particulas.push({ x, y, dx, dy, raio, cor, tipo: 'diatomica' });
        }
    } 
    else if (modo === 'agua') {
        for (let i = 0; i < 15; i++) {
            particulas.push({
                x: Math.random() * (canvas.width - 50) + 25,
                y: Math.random() * (canvas.height - 50) + 25,
                dx: (Math.random() - 0.5) * 1.5,
                dy: (Math.random() - 0.5) * 1.5,
                tipo: 'agua'
            });
        }
    } 
    else if (modo === 'sal' || modo === 'diamante' || modo === 'ouro') {
        let colunas = modo === 'sal' ? 10 : 12;
        let linhas = 5;
        let espacamento = 30;
        let inicioX = (canvas.width - (colunas * espacamento)) / 2;
        let inicioY = (canvas.height - (linhas * espacamento)) / 2;

        for (let c = 0; c < colunas; c++) {
            for (let l = 0; l < linhas; l++) {
                let cor = '#2ECC71';
                if (modo === 'sal') cor = (c + l) % 2 === 0 ? '#E53E3E' : '#4A5568';
                if (modo === 'ouro') cor = '#D69E2E';
                if (modo === 'diamante') cor = '#A0AEC0';

                particulas.push({
                    x: inicioX + c * espacamento,
                    y: inicioY + l * espacamento,
                    ox: inicioX + c * espacamento,
                    oy: inicioY + l * espacamento,
                    cor: cor,
                    tipo: 'solido',
                    raio: modo === 'sal' ? ((c + l) % 2 === 0 ? 8 : 11) : 9
                });
            }
        }
    }
    else if (modo === 'estados-agua') {
        // Simulação dividida em três regiões (Sólido, Líquido, Gás)
        for (let i = 0; i < 30; i++) {
            particulas.push({
                x: (Math.random() * (canvas.width/3)),
                y: canvas.height - 50 + (Math.random() - 0.5)*30,
                tipo: 'estado-solido'
            });
            particulas.push({
                x: (canvas.width/3) + (Math.random() * (canvas.width/3)),
                y: canvas.height - 30 - Math.random()*40,
                dx: (Math.random() - 0.5) * 0.8,
                dy: (Math.random() - 0.5) * 0.2,
                tipo: 'estado-liquido'
            });
            particulas.push({
                x: (2 * canvas.width/3) + (Math.random() * (canvas.width/3)),
                y: Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 3,
                dy: (Math.random() - 0.5) * 3,
                tipo: 'estado-gas'
            });
        }
    }
    else if (modo === 'mistura-homo' || modo === 'mistura-hetero') {
        for (let i = 0; i < 30; i++) {
            particulas.push({
                x: Math.random() * canvas.width,
                y: modo === 'mistura-hetero' ? (Math.random() * (canvas.height/2) + canvas.height/2) : Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 1.5,
                dy: (Math.random() - 0.5) * 1.5,
                cor: '#3182CE', raio: 7, tipo: 'simples-m'
            });
            particulas.push({
                x: Math.random() * canvas.width,
                y: modo === 'mistura-hetero' ? (Math.random() * (canvas.height/2)) : Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 1.5,
                dy: (Math.random() - 0.5) * 1.5,
                cor: '#D69E2E', raio: 6, tipo: 'simples-m'
            });
        }
    }
}

// Loop contínuo de animação física do simulador
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particulas.forEach(p => {
        if (p.tipo === 'diatomica') {
            // Move e rebate nas paredes do canvas
            p.x += p.dx; p.y += p.dy;
            if (p.x < 15 || p.x > canvas.width - 15) p.dx *= -1;
            if (p.y < 15 || p.y > canvas.height - 15) p.dy *= -1;

            // Desenha o primeiro átomo da molécula diatômica
            ctx.beginPath(); ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
            ctx.fillStyle = p.cor; ctx.fill(); ctx.closePath();

            // Desenha a ligação química e o segundo átomo acoplado lateralmente
            let offsetX = 12;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + offsetX, p.y);
            ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 3; ctx.stroke();

            ctx.beginPath(); ctx.arc(p.x + offsetX, p.y, p.raio, 0, Math.PI * 2);
            ctx.fillStyle = p.cor; ctx.fill(); ctx.closePath();
        } 
        else if (p.tipo === 'agua') {
            p.x += p.dx; p.y += p.dy;
            if (p.x < 20 || p.x > canvas.width - 20) p.dx *= -1;
            if (p.y < 20 || p.y > canvas.height - 20) p.dy *= -1;

            // Oxigênio Central (Maior e Vermelho)
            ctx.beginPath(); ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
            ctx.fillStyle = '#E53E3E'; ctx.fill(); ctx.closePath();

            // Dois Hidrogênios acoplados em ângulo angular
            let angulos = [0.7, 2.4];
            angulos.forEach(ang => {
                let hx = p.x + Math.cos(ang) * 12;
                let hy = p.y + Math.sin(ang) * 12;
                ctx.beginPath(); ctx.arc(hx, hy, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#FFFFFF'; ctx.fill(); ctx.closePath();
            });
        }
        else if (p.tipo === 'solido') {
            // Vibração térmica microscópica realista baseada em estados sólidos
            p.x = p.ox + (Math.random() - 0.5) * 0.8;
            p.y = p.oy + (Math.random() - 0.5) * 0.8;

            ctx.beginPath(); ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
            ctx.fillStyle = p.cor; ctx.fill(); ctx.closePath();
        }
        else if (p.tipo === 'estado-solido') {
            ctx.beginPath(); ctx.arc(p.x + (Math.random() - 0.5)*0.5, p.y + (Math.random() - 0.5)*0.5, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#63B3ED'; ctx.fill(); ctx.closePath();
        }
        else if (p.tipo === 'estado-liquido') {
            p.x += p.dx; p.y += p.dy;
            if (p.x < canvas.width/3 || p.x > 2*canvas.width/3) p.dx *= -1;
            ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#4299E1'; ctx.fill(); ctx.closePath();
        }
        else if (p.tipo === 'estado-gas') {
            p.x += p.dx; p.y += p.dy;
            if (p.x < 2*canvas.width/3 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#90CDF4'; ctx.fill(); ctx.closePath();
        }
        else if (p.tipo === 'simples-m') {
            p.x += p.dx; p.y += p.dy;
            let yMin = p.tipoY === 'topo' ? 0 : 0;
            if (p.x < 10 || p.x > canvas.width - 10) p.dx *= -1;
            if (p.y < 10 || p.y > canvas.height - 10) p.dy *= -1;

            ctx.beginPath(); ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
            ctx.fillStyle = p.cor; ctx.fill(); ctx.closePath();
        }
    });

    requestAnimationFrame(animar);
}

// Gerencia a troca de estados do painel informacional e visual
function ativarSimulacao(id) {
    modoAtual = id;
    
    // Atualiza os botões ativos
    document.querySelectorAll('.btn-lab').forEach(b => b.classList.remove('ativo'));
    event.currentTarget.classList.add('ativo');

    // Altera os textos explicativos injetando os dados estruturados
    const dados = dadosSubstancias[id];
    document.getElementById('texto-explicativo-lab').innerHTML = `
        <h3>${dados.titulo}</h3>
        <p class="tag-tipo">${dados.tipo}</p>
        <p class="descricao-substancia">${dados.desc}</p>
        <div class="propriedades-substancia">
            <span><strong>Ponto de Fusão:</strong> ${dados.pf}</span>
            <span><strong>Ponto de Ebulição:</strong> ${dados.pe}</span>
            <span><strong>Densidade:</strong> ${dados.dens}</span>
        </div>
    `;

    inicializarParticulas(id);
}

// Inicializa a primeira renderização do sistema
inicializarParticulas('oxigenio');
animar();


