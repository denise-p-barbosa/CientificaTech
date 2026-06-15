/* ======================================================= */
/* DADOS DOS MODELOS ATÔMICOS (Conteúdo Dinâmico)          */
/* ======================================================= */
const bancoModelos = {
    dalton: {
        titulo: "Modelo de Dalton (1808)",
        ideia: "O químico inglês John Dalton propôs que a matéria é formada por partículas extremamente pequenas chamadas átomos.",
        analogia: "Bola de Bilhar",
        estrutura: "<ul><li>Maciça (sem partes internas)</li><li>Indivisível e Indestrutível</li><li>Eletricamente neutra</li></ul>",
        postulados: "Toda matéria é formada por átomos. Átomos de um mesmo elemento são iguais. Reações químicas apenas reorganizam os átomos.",
        limitacao: "Posteriormente descobriu-se que o átomo possui partículas menores (elétrons, prótons e nêutrons), portanto ele não é indivisível."
    },
    thomson: {
        titulo: "Modelo de Thomson (1897)",
        ideia: "O físico inglês J. J. Thomson descobriu o elétron ($e^-$) através de experimentos com raios catódicos.",
        analogia: "Pudim de Passas",
        estrutura: "O átomo seria uma grande esfera de carga positiva (a massa do pudim) contendo elétrons negativos (as passas) espalhados em seu interior.",
        postulados: "Foi o primeiro modelo a provar e mostrar que o átomo não é maciço e possui partículas menores de carga negativa.",
        limitacao: "Não explicava como as cargas estavam organizadas nem os resultados observados posteriormente em experimentos de espalhamento."
    },
    rutherford: {
        titulo: "Modelo de Rutherford (1911)",
        ideia: "O físico Ernest Rutherford realizou o famoso experimento bombardeando uma fina folha de ouro com partículas alfa.",
        analogia: "Sistema Planetário",
        estrutura: "O átomo é quase todo vazio. Existe uma região central muito pequena, positiva e densa chamada <strong>núcleo</strong>, com elétrons girando ao redor.",
        postulados: "A maior parte das partículas atravessava a lâmina de ouro (espaço vazio), mas algumas poucas sofriam desvios drásticos ao bater no núcleo denso.",
        limitacao: "Segundo a Física clássica, elétrons em movimento orbital deveriam perder energia gradativamente e espiralar para dentro do núcleo, colapsando o átomo."
    },
    bohr: {
        titulo: "Modelo de Bohr (1913)",
        ideia: "O físico dinamarquês Niels Bohr aperfeiçoou o modelo aplicando conceitos de quantização de energia.",
        analogia: "Órbitas Estacionárias (Camadas)",
        estrutura: "Os elétrons giram ao redor do núcleo em órbitas específicas (camadas eletrônicas K, L, M...). Cada órbita possui uma quantidade fixa de energia.",
        postulados: "<ul><li>O elétron não pode ficar em qualquer lugar (ocupa níveis definidos).</li><li>Quando recebe energia, salta para uma camada mais externa.</li><li>Quando retorna, libera energia na forma de luz (fóton).</li></ul>",
        limitacao: "Funciona matematicamente muito bem para o Hidrogênio, mas não explica perfeitamente o comportamento de átomos com muitos elétrons (átomos polieletrônicos)."
    }
};

/* ======================================================= */
/* MOTOR GRÁFICO DO SIMULADOR (CANVAS)                     */
/* ======================================================= */
const canvas = document.getElementById('simulador-atomico');
const ctx = canvas.getContext('2d');
let animacaoFrame;
let modeloAtual = 'dalton';
let tempo = 0;

function redimensionarCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 350;
}
window.addEventListener('resize', redimensionarCanvas);
redimensionarCanvas();

// Renderizador principal do Canvas
function desenharModelo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    tempo += 0.02;

    if (modeloAtual === 'dalton') {
        // Efeito de esfera 3D maciça
        const gradiente = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, 70);
        gradiente.addColorStop(0, '#A0AEC0');
        gradiente.addColorStop(1, '#2D3748');
        
        ctx.beginPath();
        ctx.arc(cx, cy, 70, 0, Math.PI * 2);
        ctx.fillStyle = gradiente;
        ctx.fill();
        ctx.closePath();
    } 
    else if (modeloAtual === 'thomson') {
        // Massa positiva (Pudim)
        ctx.beginPath();
        ctx.arc(cx, cy, 80, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229, 62, 62, 0.3)'; // Vermelho suave
        ctx.fill();
        ctx.strokeStyle = '#E53E3E';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Sinal positivo grande no fundo
        ctx.fillStyle = 'rgba(229, 62, 62, 0.5)';
        ctx.font = '80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('+', cx, cy);

        // Elétrons (Passas) oscilando com seno/cosseno
        const posicoes = [
            { x: -30, y: -40, t: 0 }, { x: 40, y: -20, t: 1 }, { x: 0, y: 30, t: 2 },
            { x: -40, y: 20, t: 3 }, { x: 30, y: 40, t: 4 }, { x: 0, y: -60, t: 5 }
        ];

        posicoes.forEach(p => {
            let oscilacaoX = Math.sin(tempo * 2 + p.t) * 3;
            let oscilacaoY = Math.cos(tempo * 2 + p.t) * 3;
            
            ctx.beginPath();
            ctx.arc(cx + p.x + oscilacaoX, cy + p.y + oscilacaoY, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#3182CE'; // Azul para elétrons
            ctx.fill();
            
            ctx.fillStyle = '#FFF';
            ctx.font = '12px Arial';
            ctx.fillText('-', cx + p.x + oscilacaoX, cy + p.y + oscilacaoY + 1);
            ctx.closePath();
        });
    }
    else if (modeloAtual === 'rutherford') {
        // Núcleo central
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#E53E3E';
        ctx.fill();

        // Órbitas elípticas caóticas
        const orbitas = [
            { rx: 120, ry: 40, angulo: 0, vel: 2 },
            { rx: 120, ry: 40, angulo: Math.PI / 3, vel: 1.5 },
            { rx: 120, ry: 40, angulo: -Math.PI / 3, vel: 2.5 }
        ];

        orbitas.forEach((orb, index) => {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(orb.angulo);

            // Desenha a linha da órbita
            ctx.beginPath();
            ctx.ellipse(0, 0, orb.rx, orb.ry, 0, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Posição do elétron baseada no tempo
            let anguloEletron = tempo * orb.vel + index;
            let ex = orb.rx * Math.cos(anguloEletron);
            let ey = orb.ry * Math.sin(anguloEletron);

            // Desenha o elétron azul
            ctx.beginPath();
            ctx.arc(ex, ey, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#3182CE';
            ctx.fill();
            
            ctx.restore();
        });
    }
    else if (modeloAtual === 'bohr') {
        // Núcleo
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#E53E3E';
        ctx.fill();

        // Camadas Estacionárias (K, L, M)
        const camadas = [
            { raio: 40, nome: 'K', eletrons: 2, vel: 1.5 },
            { raio: 80, nome: 'L', eletrons: 8, vel: 1.0 },
            { raio: 130, nome: 'M', eletrons: 4, vel: 0.6 }
        ];

        camadas.forEach((camada, cIndex) => {
            // Linha da órbita circular
            ctx.beginPath();
            ctx.arc(cx, cy, camada.raio, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(46, 204, 113, 0.3)'; // Órbitas em verde para destacar
            ctx.lineWidth = 2;
            ctx.stroke();

            // Rótulo da camada
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.font = '12px Arial';
            ctx.fillText(camada.nome, cx + camada.raio + 10, cy);

            // Elétrons distribuídos igualmente ao redor da órbita
            for (let i = 0; i < camada.eletrons; i++) {
                let defasagem = (Math.PI * 2 / camada.eletrons) * i;
                let anguloAtual = tempo * camada.vel + defasagem;
                
                let ex = cx + Math.cos(anguloAtual) * camada.raio;
                let ey = cy + Math.sin(anguloAtual) * camada.raio;

                ctx.beginPath();
                ctx.arc(ex, ey, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#3182CE';
                ctx.fill();
            }
        });
    }

    animacaoFrame = requestAnimationFrame(desenharModelo);
}

// Injeção de Texto e Controle de Botões
function ativarModelo(id) {
    modeloAtual = id;
    
    // Remove a classe 'ativo' de todos os botões
    document.querySelectorAll('.btn-lab').forEach(b => {
        b.classList.remove('ativo');
        // Se o onclick do botão contiver a id clicada, pinta ele de verde
        if (b.getAttribute('onclick').includes(id)) {
            b.classList.add('ativo');
        }
    });

    const dados = bancoModelos[id];
    document.getElementById('texto-explicativo-lab').innerHTML = `
        <h3>${dados.titulo}</h3>
        <p class="tag-tipo">Analogia: ${dados.analogia}</p>
        <p class="descricao-substancia"><strong>Ideia Principal:</strong> ${dados.ideia}</p>
        <div class="descricao-substancia">
            <strong>Como era o átomo?</strong><br>
            ${dados.estrutura}
        </div>
        <div class="propriedades-substancia">
            <span><strong>Principais Postulados:</strong> ${dados.postulados}</span>
            <span style="color: #E53E3E; margin-top: 10px;"><strong>Limitação:</strong> ${dados.limitacao}</span>
        </div>
    `;

    // Aciona o MathJax para ler fórmulas LaTeX no novo texto
    if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise([document.getElementById('texto-explicativo-lab')]);
    }
}

// Inicializa a página no modelo de Dalton
ativarModelo('dalton');
desenharModelo();