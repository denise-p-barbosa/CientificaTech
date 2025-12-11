// ======================================================
// ÁREA DA CURADORA - CINE CIÊNCIA
// ======================================================
// Aqui você edita os filmes, textos e notas.
// Não precisa mexer no HTML. O site puxa tudo daqui.
// ======================================================

const catalogoCuradoria = [
    {
        id: 1, // Número da bolinha (ordem)
        titulo: "Até o Último Samurai",
        imagem: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZlJEtUskh6iK8lIGqgy6MJlQmeEJzND55UY2UDBbtLr3hrq1695imTR_cHbdGkXWj2ntYja-jgz1zqAxCMM9YzWJ5A_JyQEHExU.jpg?r=cda",
        estrelas: "★★★★★",
        autor: "Denise (Eng. Física - UFV)",
        
        // Escreva o texto abaixo entre as aspas. Pode ser longo.
        depoimento: "Essa série é perfeita! Para quem gosta de anime, caiu como uma luva. O estilo lembra muito um anime. Eu passei a série toda com pena da Futaba Katsuk… rsrsrs. Toda vez que eu via ela tentando aprender a lutar sozinha, eu torcia para alguém ajudar ela. Gostei muito da personagem e de toda a história, mas eu sou suspeita para falar, já que eu amo a cultura japonesa e chinesa"
    },
    
    // {
    //     id: 2,
    //     titulo: "A Origem",
    //     imagem: "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Beatriz (Arquitetura)",
    //     depoimento: "O conceito de desenhar sonhos é surreal. Nolan é gênio. Eu fiquei desenhando labirintos no caderno a semana toda depois de ver. A ideia de que uma ideia é o vírus mais resistente... isso mudou meu jeito de pensar. E aquele peão no final? Caiu ou não caiu?"
    // },

    // {
    //     id: 3,
    //     titulo: "Matrix",
    //     imagem: "https://image.tmdb.org/t/p/w300/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Ana (Sistemas)",
    //     depoimento: "Basicamente o motivo de eu ter escolhido computação. Não é só tiro e câmera lenta, é filosofia pura. O mito da caverna de Platão versão cyberpunk. 'Não existe colher'. Assisti em 1999 e assisto todo ano. Keanu Reeves imortal."
    // },

    // {
    //     id: 4,
    //     titulo: "Oppenheimer",
    //     imagem: "https://image.tmdb.org/t/p/w300/c0DCmfC7Et2K3URnCa4VOsowaix.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Prof. Ricardo (Física)",
    //     depoimento: "Um estudo de personagem denso e necessário. Mostra o peso da consciência de criar algo que pode destruir o mundo. Cillian Murphy entregou tudo. A cena do teste Trinity, o silêncio antes da onda de choque... cinema puro. Importante para entendermos a ética na ciência."
    // },

    // {
    //     id: 5,
    //     titulo: "O Senhor dos Anéis",
    //     imagem: "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOtrC.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Lucas (RPG UFV)",
    //     depoimento: "A trilogia perfeita. Não tem CGI moderno que supere o carinho que colocaram aqui. As armaduras, os cenários da Nova Zelândia, a jornada do Frodo. É sobre amizade acima de tudo. 'Eu não posso carregar o anel, Sr. Frodo, mas posso carregar você'. Chorei largado."
    // },

    // {
    //     id: 6,
    //     titulo: "Blade Runner 2049",
    //     imagem: "https://image.tmdb.org/t/p/w300/gAjx94GAe171qC0y6yX05b4sU7q.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Sofia (Design)",
    //     depoimento: "Visualmente é o filme mais lindo da década. Cada frame dá um quadro na parede. A paleta de cores laranja e azul neon é absurda. É lento, contemplativo, fala sobre o que nos torna humanos. O Ryan Gosling tá incrível como sempre."
    // },

    // {
    //     id: 7,
    //     titulo: "Clube da Luta",
    //     imagem: "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    //     estrelas: "★★★★☆",
    //     autor: "Pedro (Computação)",
    //     depoimento: "A primeira regra é não falar sobre o clube, né? Kkkk. Mas sério, esse filme bugou minha mente. A crítica ao consumismo bateu forte. O final é insano, tive que ver duas vezes pra entender."
    // },

    // {
    //     id: 8,
    //     titulo: "A Chegada",
    //     imagem: "https://image.tmdb.org/t/p/w300/piz09d84w9x1d3XGj4q4Xp4L8x.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Clara (Letras)",
    //     depoimento: "Não é filme de alienígena dando tiro. É sobre linguagem e comunicação. A hipótese de Sapir-Whorf aplicada no cinema: se você aprende uma língua nova, muda sua forma de pensar o tempo? Lindo, triste e esperançoso ao mesmo tempo."
    // },

    // {
    //     id: 9,
    //     titulo: "Duna: Parte 2",
    //     imagem: "https://image.tmdb.org/t/p/w300/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    //     estrelas: "★★★★★",
    //     autor: "João (Agronomia)",
    //     depoimento: "Fui no cinema sem expectativa e saí tremendo. A escala disso é gigantesca. O som das naves, os vermes de areia... é uma experiência sensorial. A jornada do Paul Atreides de herói para algo meio assustador é muito bem feita."
    // },

    // {
    //     id: 10,
    //     titulo: "Homem-Aranha",
    //     imagem: "https://image.tmdb.org/t/p/w300/8vt6qn9Q285z36J0_mvlQ27C0mQ.jpg",
    //     estrelas: "★★★★★",
    //     autor: "Felipe (Artes)",
    //     depoimento: "Uma obra de arte em movimento. Eles misturam estilos de animação diferentes na mesma tela e funciona! A trilha sonora é impecável. A história do Miles Morales crescendo e lidando com responsabilidade é muito identificável."
    // }
];