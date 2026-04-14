const allSkils = document.getElementById("skils")

const menuIcon = document.querySelector(".material-symbols-outlined");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});


const minhasHabilidades = [
    {
        titulo: "Comunicação",
        descricao: "Capacidade de transmitir ideias de forma clara, objetiva e eficiente em diferentes contextos."
    },
    {
        titulo: "Programação Web",
        descricao: "Desenvolvimento de aplicações utilizando HTML, CSS, JavaScript e integração com back-end."
    },
    {
        titulo: "Trabalho em Equipe",
        descricao: "Colaboração eficaz com outros profissionais para alcançar objetivos comuns."
    },
    {
        titulo: "Resolução de Problemas",
        descricao: "Análise e solução de problemas de forma lógica e estruturada."
    },
    {
        titulo: "Organização",
        descricao: "Gerenciamento eficiente de tarefas, tempo e prioridades."
    }
];


minhasHabilidades.forEach((habilidade) => {
    allSkils.innerHTML += componentCardHabilidades(habilidade);
});

function componentCardHabilidades(habilidade) {
    return (`
        <li>
           <h2 class="title-skills">${habilidade.titulo}</h2>
          <p class="about">${habilidade.descricao}</p>
        </li>
       ` )
}