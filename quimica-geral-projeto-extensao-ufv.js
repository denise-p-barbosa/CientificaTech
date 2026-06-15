
        const canvas = document.getElementById('canvas-materia');
        const ctx = canvas.getContext('2d');

        let particulas = [];
        const numParticulas = 80;
        let estadoAtual = 'solido'; 

        const btnSolido = document.getElementById('btn-solido');
        const btnLiquido = document.getElementById('btn-liquido');
        const btnGasoso = document.getElementById('btn-gasoso');

        class Particula {
            constructor(x, y) {
                this.baseX = x;
                this.baseY = y;
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.raio = 8;
                this.cor = '#2e8b57'; // Verde da paleta
            }

            atualizar() {
                if (estadoAtual === 'solido') {
                    // Vibração
                    this.x = this.baseX + (Math.random() - 0.5) * 2;
                    this.y = this.baseY + (Math.random() - 0.5) * 2;
                    this.cor = '#1c4a30'; // Verde escuro rígido
                } 
                else if (estadoAtual === 'liquido') {
                    // Movimento contido embaixo
                    this.x += this.vx * 0.8;
                    this.y += this.vy * 0.8;
                    this.cor = '#2e8b57'; // Verde fluido

                    if (this.x < this.raio || this.x > canvas.width - this.raio) this.vx *= -1;
                    if (this.y < canvas.height / 2 || this.y > canvas.height - this.raio) this.vy *= -1;
                } 
                else if (estadoAtual === 'gasoso') {
                    // Caos por todo o canvas
                    this.x += this.vx * 3.5;
                    this.y += this.vy * 3.5;
                    this.cor = '#a3e4be'; // Verde claro expansivo

                    if (this.x < this.raio || this.x > canvas.width - this.raio) this.vx *= -1;
                    if (this.y < this.raio || this.y > canvas.height - this.raio) this.vy *= -1;
                }
            }

            desenhar() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
                ctx.fillStyle = this.cor;
                ctx.fill();
                ctx.closePath();
            }
        }

        function iniciarParticulas() {
            particulas = [];
            let colunas = 12;
            let espacamento = 20;
            let offsetX = (canvas.width - (colunas * espacamento)) / 2;
            let offsetY = canvas.height - 130;

            for (let i = 0; i < numParticulas; i++) {
                let x = offsetX + (i % colunas) * espacamento;
                let y = offsetY + Math.floor(i / colunas) * espacamento;
                particulas.push(new Particula(x, y));
            }
        }

        function animar() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particulas.forEach(p => {
                p.atualizar();
                p.desenhar();
            });
            requestAnimationFrame(animar);
        }

        btnSolido.addEventListener('click', () => estadoAtual = 'solido');
        btnLiquido.addEventListener('click', () => estadoAtual = 'liquido');
        btnGasoso.addEventListener('click', () => estadoAtual = 'gasoso');

        iniciarParticulas();
        animar();
   