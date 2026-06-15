/* ======================================================= */
/* BANCO DE DADOS CIENTÍFICO (API Local)                   */
/* ======================================================= */
// Adicione os demais seguindo essa exata estrutura
/* ======================================================= */
/* BANCO DE DADOS CIENTÍFICO (118 Elementos)               */
/* ======================================================= */
const elementosDB = [
    // Período 1
    { num: 1, sim: "H", nome: "Hidrogênio", massa: "1,008", grupo: 1, periodo: 1, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 2, sim: "He", nome: "Hélio", massa: "4,002", grupo: 18, periodo: 1, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" },
    
    // Período 2
    { num: 3, sim: "Li", nome: "Lítio", massa: "6,94", grupo: 1, periodo: 2, cat: "metal-alcalino", cor: "var(--cor-metal-alcalino)" },
    { num: 4, sim: "Be", nome: "Berílio", massa: "9,012", grupo: 2, periodo: 2, cat: "alcalino-terroso", cor: "var(--cor-alcalino-terroso)" },
    { num: 5, sim: "B", nome: "Boro", massa: "10,81", grupo: 13, periodo: 2, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 6, sim: "C", nome: "Carbono", massa: "12,011", grupo: 14, periodo: 2, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 7, sim: "N", nome: "Nitrogênio", massa: "14,007", grupo: 15, periodo: 2, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 8, sim: "O", nome: "Oxigênio", massa: "15,999", grupo: 16, periodo: 2, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 9, sim: "F", nome: "Flúor", massa: "18,998", grupo: 17, periodo: 2, cat: "halogenio", cor: "var(--cor-halogenio)" },
    { num: 10, sim: "Ne", nome: "Neônio", massa: "20,180", grupo: 18, periodo: 2, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" },
    
    // Período 3
    { num: 11, sim: "Na", nome: "Sódio", massa: "22,990", grupo: 1, periodo: 3, cat: "metal-alcalino", cor: "var(--cor-metal-alcalino)" },
    { num: 12, sim: "Mg", nome: "Magnésio", massa: "24,305", grupo: 2, periodo: 3, cat: "alcalino-terroso", cor: "var(--cor-alcalino-terroso)" },
    { num: 13, sim: "Al", nome: "Alumínio", massa: "26,982", grupo: 13, periodo: 3, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 14, sim: "Si", nome: "Silício", massa: "28,085", grupo: 14, periodo: 3, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 15, sim: "P", nome: "Fósforo", massa: "30,974", grupo: 15, periodo: 3, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 16, sim: "S", nome: "Enxofre", massa: "32,06", grupo: 16, periodo: 3, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 17, sim: "Cl", nome: "Cloro", massa: "35,45", grupo: 17, periodo: 3, cat: "halogenio", cor: "var(--cor-halogenio)" },
    { num: 18, sim: "Ar", nome: "Argônio", massa: "39,95", grupo: 18, periodo: 3, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" },
    
    // Período 4
    { num: 19, sim: "K", nome: "Potássio", massa: "39,098", grupo: 1, periodo: 4, cat: "metal-alcalino", cor: "var(--cor-metal-alcalino)" },
    { num: 20, sim: "Ca", nome: "Cálcio", massa: "40,078", grupo: 2, periodo: 4, cat: "alcalino-terroso", cor: "var(--cor-alcalino-terroso)" },
    { num: 21, sim: "Sc", nome: "Escândio", massa: "44,956", grupo: 3, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 22, sim: "Ti", nome: "Titânio", massa: "47,867", grupo: 4, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 23, sim: "V", nome: "Vanádio", massa: "50,942", grupo: 5, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 24, sim: "Cr", nome: "Cromo", massa: "51,996", grupo: 6, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 25, sim: "Mn", nome: "Manganês", massa: "54,938", grupo: 7, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 26, sim: "Fe", nome: "Ferro", massa: "55,845", grupo: 8, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 27, sim: "Co", nome: "Cobalto", massa: "58,933", grupo: 9, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 28, sim: "Ni", nome: "Níquel", massa: "58,693", grupo: 10, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 29, sim: "Cu", nome: "Cobre", massa: "63,546", grupo: 11, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 30, sim: "Zn", nome: "Zinco", massa: "65,38", grupo: 12, periodo: 4, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 31, sim: "Ga", nome: "Gálio", massa: "69,723", grupo: 13, periodo: 4, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 32, sim: "Ge", nome: "Germânio", massa: "72,630", grupo: 14, periodo: 4, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 33, sim: "As", nome: "Arsênio", massa: "74,922", grupo: 15, periodo: 4, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 34, sim: "Se", nome: "Selênio", massa: "78,971", grupo: 16, periodo: 4, cat: "ametal", cor: "var(--cor-ametal)" },
    { num: 35, sim: "Br", nome: "Bromo", massa: "79,904", grupo: 17, periodo: 4, cat: "halogenio", cor: "var(--cor-halogenio)" },
    { num: 36, sim: "Kr", nome: "Criptônio", massa: "83,798", grupo: 18, periodo: 4, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" },
    
    // Período 5
    { num: 37, sim: "Rb", nome: "Rubídio", massa: "85,468", grupo: 1, periodo: 5, cat: "metal-alcalino", cor: "var(--cor-metal-alcalino)" },
    { num: 38, sim: "Sr", nome: "Estrôncio", massa: "87,62", grupo: 2, periodo: 5, cat: "alcalino-terroso", cor: "var(--cor-alcalino-terroso)" },
    { num: 39, sim: "Y", nome: "Ítrio", massa: "88,906", grupo: 3, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 40, sim: "Zr", nome: "Zircônio", massa: "91,224", grupo: 4, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 41, sim: "Nb", nome: "Nióbio", massa: "92,906", grupo: 5, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 42, sim: "Mo", nome: "Molibdênio", massa: "95,95", grupo: 6, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 43, sim: "Tc", nome: "Tecnécio", massa: "98", grupo: 7, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 44, sim: "Ru", nome: "Rutênio", massa: "101,07", grupo: 8, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 45, sim: "Rh", nome: "Ródio", massa: "102,91", grupo: 9, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 46, sim: "Pd", nome: "Paládio", massa: "106,42", grupo: 10, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 47, sim: "Ag", nome: "Prata", massa: "107,87", grupo: 11, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 48, sim: "Cd", nome: "Cádmio", massa: "112,41", grupo: 12, periodo: 5, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 49, sim: "In", nome: "Índio", massa: "114,82", grupo: 13, periodo: 5, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 50, sim: "Sn", nome: "Estanho", massa: "118,71", grupo: 14, periodo: 5, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 51, sim: "Sb", nome: "Antimônio", massa: "121,76", grupo: 15, periodo: 5, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 52, sim: "Te", nome: "Telúrio", massa: "127,60", grupo: 16, periodo: 5, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 53, sim: "I", nome: "Iodo", massa: "126,90", grupo: 17, periodo: 5, cat: "halogenio", cor: "var(--cor-halogenio)" },
    { num: 54, sim: "Xe", nome: "Xenônio", massa: "131,29", grupo: 18, periodo: 5, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" },
    
    // Período 6 (Metais Principais)
    { num: 55, sim: "Cs", nome: "Césio", massa: "132,91", grupo: 1, periodo: 6, cat: "metal-alcalino", cor: "var(--cor-metal-alcalino)" },
    { num: 56, sim: "Ba", nome: "Bário", massa: "137,33", grupo: 2, periodo: 6, cat: "alcalino-terroso", cor: "var(--cor-alcalino-terroso)" },
    
    // Lantanídeos (Visualmente na linha 9, colunas 4 a 18)
    { num: 57, sim: "La", nome: "Lantânio", massa: "138,91", grupo: 3, periodo: 6, coluna: 4, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 58, sim: "Ce", nome: "Cério", massa: "140,12", grupo: 3, periodo: 6, coluna: 5, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 59, sim: "Pr", nome: "Praseodímio", massa: "140,91", grupo: 3, periodo: 6, coluna: 6, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 60, sim: "Nd", nome: "Neodímio", massa: "144,24", grupo: 3, periodo: 6, coluna: 7, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 61, sim: "Pm", nome: "Promécio", massa: "145", grupo: 3, periodo: 6, coluna: 8, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 62, sim: "Sm", nome: "Samário", massa: "150,36", grupo: 3, periodo: 6, coluna: 9, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 63, sim: "Eu", nome: "Európio", massa: "151,96", grupo: 3, periodo: 6, coluna: 10, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 64, sim: "Gd", nome: "Gadolínio", massa: "157,25", grupo: 3, periodo: 6, coluna: 11, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 65, sim: "Tb", nome: "Térbio", massa: "158,93", grupo: 3, periodo: 6, coluna: 12, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 66, sim: "Dy", nome: "Disprósio", massa: "162,50", grupo: 3, periodo: 6, coluna: 13, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 67, sim: "Ho", nome: "Hólmio", massa: "164,93", grupo: 3, periodo: 6, coluna: 14, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 68, sim: "Er", nome: "Érbio", massa: "167,26", grupo: 3, periodo: 6, coluna: 15, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 69, sim: "Tm", nome: "Túlio", massa: "168,93", grupo: 3, periodo: 6, coluna: 16, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 70, sim: "Yb", nome: "Itérbio", massa: "173,05", grupo: 3, periodo: 6, coluna: 17, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },
    { num: 71, sim: "Lu", nome: "Lutécio", massa: "174,97", grupo: 3, periodo: 6, coluna: 18, linha: 9, cat: "lantanideo", cor: "var(--cor-lantanideo)" },

    // Período 6 (Continuação)
    { num: 72, sim: "Hf", nome: "Háfnio", massa: "178,49", grupo: 4, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 73, sim: "Ta", nome: "Tântalo", massa: "180,95", grupo: 5, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 74, sim: "W", nome: "Tungstênio", massa: "183,84", grupo: 6, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 75, sim: "Re", nome: "Rênio", massa: "186,21", grupo: 7, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 76, sim: "Os", nome: "Ósmio", massa: "190,23", grupo: 8, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 77, sim: "Ir", nome: "Irídio", massa: "192,22", grupo: 9, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 78, sim: "Pt", nome: "Platina", massa: "195,08", grupo: 10, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 79, sim: "Au", nome: "Ouro", massa: "196,97", grupo: 11, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 80, sim: "Hg", nome: "Mercúrio", massa: "200,59", grupo: 12, periodo: 6, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 81, sim: "Tl", nome: "Tálio", massa: "204,38", grupo: 13, periodo: 6, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 82, sim: "Pb", nome: "Chumbo", massa: "207,2", grupo: 14, periodo: 6, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 83, sim: "Bi", nome: "Bismuto", massa: "208,98", grupo: 15, periodo: 6, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 84, sim: "Po", nome: "Polônio", massa: "209", grupo: 16, periodo: 6, cat: "semimetal", cor: "var(--cor-semimetal)" },
    { num: 85, sim: "At", nome: "Astato", massa: "210", grupo: 17, periodo: 6, cat: "halogenio", cor: "var(--cor-halogenio)" },
    { num: 86, sim: "Rn", nome: "Radônio", massa: "222", grupo: 18, periodo: 6, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" },
    
    // Período 7 (Metais Principais)
    { num: 87, sim: "Fr", nome: "Frâncio", massa: "223", grupo: 1, periodo: 7, cat: "metal-alcalino", cor: "var(--cor-metal-alcalino)" },
    { num: 88, sim: "Ra", nome: "Rádio", massa: "226", grupo: 2, periodo: 7, cat: "alcalino-terroso", cor: "var(--cor-alcalino-terroso)" },

    // Actinídeos (Visualmente na linha 10, colunas 4 a 18)
    { num: 89, sim: "Ac", nome: "Actínio", massa: "227", grupo: 3, periodo: 7, coluna: 4, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 90, sim: "Th", nome: "Tório", massa: "232,04", grupo: 3, periodo: 7, coluna: 5, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 91, sim: "Pa", nome: "Protactínio", massa: "231,04", grupo: 3, periodo: 7, coluna: 6, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 92, sim: "U", nome: "Urânio", massa: "238,03", grupo: 3, periodo: 7, coluna: 7, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 93, sim: "Np", nome: "Netúnio", massa: "237", grupo: 3, periodo: 7, coluna: 8, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 94, sim: "Pu", nome: "Plutônio", massa: "244", grupo: 3, periodo: 7, coluna: 9, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 95, sim: "Am", nome: "Amerício", massa: "243", grupo: 3, periodo: 7, coluna: 10, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 96, sim: "Cm", nome: "Cúrio", massa: "247", grupo: 3, periodo: 7, coluna: 11, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 97, sim: "Bk", nome: "Berquélio", massa: "247", grupo: 3, periodo: 7, coluna: 12, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 98, sim: "Cf", nome: "Califórnio", massa: "251", grupo: 3, periodo: 7, coluna: 13, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 99, sim: "Es", nome: "Einstênio", massa: "252", grupo: 3, periodo: 7, coluna: 14, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 100, sim: "Fm", nome: "Férmio", massa: "257", grupo: 3, periodo: 7, coluna: 15, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 101, sim: "Md", nome: "Mendelévio", massa: "258", grupo: 3, periodo: 7, coluna: 16, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 102, sim: "No", nome: "Nobélio", massa: "259", grupo: 3, periodo: 7, coluna: 17, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },
    { num: 103, sim: "Lr", nome: "Laurêncio", massa: "266", grupo: 3, periodo: 7, coluna: 18, linha: 10, cat: "actinideo", cor: "var(--cor-actinideo)" },

    // Período 7 (Continuação)
    { num: 104, sim: "Rf", nome: "Rutherfórdio", massa: "267", grupo: 4, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 105, sim: "Db", nome: "Dúbnio", massa: "268", grupo: 5, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 106, sim: "Sg", nome: "Seabórgio", massa: "269", grupo: 6, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 107, sim: "Bh", nome: "Bóhrio", massa: "270", grupo: 7, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 108, sim: "Hs", nome: "Hássio", massa: "277", grupo: 8, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 109, sim: "Mt", nome: "Meitnério", massa: "278", grupo: 9, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 110, sim: "Ds", nome: "Darmstádtio", massa: "281", grupo: 10, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 111, sim: "Rg", nome: "Roentgênio", massa: "282", grupo: 11, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 112, sim: "Cn", nome: "Copernício", massa: "285", grupo: 12, periodo: 7, cat: "metal-transicao", cor: "var(--cor-metal-transicao)" },
    { num: 113, sim: "Nh", nome: "Nihônio", massa: "286", grupo: 13, periodo: 7, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 114, sim: "Fl", nome: "Fleróvio", massa: "289", grupo: 14, periodo: 7, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 115, sim: "Mc", nome: "Moscóvio", massa: "290", grupo: 15, periodo: 7, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 116, sim: "Lv", nome: "Livermório", massa: "293", grupo: 16, periodo: 7, cat: "metal-pos-transicao", cor: "var(--cor-pos-transicao)" },
    { num: 117, sim: "Ts", nome: "Tenessino", massa: "294", grupo: 17, periodo: 7, cat: "halogenio", cor: "var(--cor-halogenio)" },
    { num: 118, sim: "Og", nome: "Oganessônio", massa: "294", grupo: 18, periodo: 7, cat: "gas-nobre", cor: "var(--cor-gas-nobre)" }
];

/* ======================================================= */
/* RENDERIZAÇÃO DINÂMICA DO GRID                           */
/* ======================================================= */
const grid = document.getElementById('tabela-grid');
const tooltip = document.getElementById('tooltip-elemento');

function renderizarTabela() {
    elementosDB.forEach(el => {
        const card = document.createElement('div');
        card.className = `elemento-card ${el.cat}`;
        
        // Atualização Crucial: Ele usa 'coluna' e 'linha' se existirem (para puxar a série dos lantanídeos para baixo)
        // Caso não existam, ele usa o comportamento padrão de 'grupo' e 'periodo'
        card.style.gridColumn = el.coluna || el.grupo;
        card.style.gridRow = el.linha || el.periodo;
        
        card.style.borderColor = el.cor;
        card.style.color = el.cor; 

        card.innerHTML = `
            <span class="el-numero">${el.num}</span>
            <span class="el-massa">${el.massa}</span>
            <div class="el-simbolo">${el.sim}</div>
            <div class="el-nome" style="color: var(--texto-principal)">${el.nome}</div>
        `;

        card.addEventListener('mousemove', (e) => mostrarTooltip(e, el));
        card.addEventListener('mouseleave', esconderTooltip);
        card.addEventListener('click', () => abrirModalLaboratorio(el));

        grid.appendChild(card);
    });
}

/* ======================================================= */
/* SISTEMA DE TOOLTIP E INTERAÇÕES                         */
/* ======================================================= */
function mostrarTooltip(e, el) {
    tooltip.classList.remove('oculto');
    
    // Faz o tooltip seguir o mouse (offset para não piscar embaixo do ponteiro)
    tooltip.style.left = e.clientX + 15 + 'px';
    tooltip.style.top = e.clientY + 15 + 'px';

    // Preenche os dados
    document.getElementById('tt-numero').innerText = `Z: ${el.num}`;
    document.getElementById('tt-massa').innerHTML = `$${el.massa}\\text{ u}$`; // Formatação LaTeX
    document.getElementById('tt-simbolo').innerText = el.sim;
    document.getElementById('tt-simbolo').style.color = el.cor;
    document.getElementById('tt-nome').innerText = el.nome;
    
    const catBadge = document.getElementById('tt-categoria');
    catBadge.innerText = el.cat.toUpperCase().replace('-', ' ');
    catBadge.style.backgroundColor = el.cor;
    catBadge.style.color = '#fff';

    // Dispara a re-renderização do MathJax para formatar o 'u' da massa atômica
    if (window.MathJax) { MathJax.typesetPromise([document.getElementById('tt-massa')]); }
}

function esconderTooltip() {
    tooltip.classList.add('oculto');
}

/* ======================================================= */
/* SISTEMA DE BUSCA E FILTROS NEON                         */
/* ======================================================= */
document.getElementById('busca-elemento').addEventListener('input', function(e) {
    const termo = e.target.value.toLowerCase();
    document.querySelectorAll('.elemento-card').forEach(card => {
        const nome = card.querySelector('.el-nome').innerText.toLowerCase();
        const sim = card.querySelector('.el-simbolo').innerText.toLowerCase();
        const num = card.querySelector('.el-numero').innerText;
        
        if (nome.includes(termo) || sim.includes(termo) || num === termo) {
            card.classList.remove('inativo');
        } else {
            card.classList.add('inativo');
        }
    });
});

document.querySelectorAll('.btn-filtro').forEach(btn => {
    btn.addEventListener('click', function() {
        const categoria = this.getAttribute('data-categoria');
        
        document.querySelectorAll('.elemento-card').forEach(card => {
            if (categoria === 'todos' || card.classList.contains(categoria)) {
                card.classList.remove('inativo');
            } else {
                card.classList.add('inativo');
            }
        });
    });
});

// Inicialização da Aplicação
renderizarTabela();
function abrirModalLaboratorio(el) {
    console.log("Preparando laboratório para: " + el.nome);
    // Código do Modal Gigante será implementado na Etapa 2
}