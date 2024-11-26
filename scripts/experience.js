
const experienceData = [
    {
        info: "Development of a software for crypto asset management, contributing to the front-end with technologies like React, Next.js, and Tailwind. My work on this project allowed me to create interactive, efficient, and visually appealing user interfaces, enhancing the user experience in the application.",
        skills: ["React", "JavaScript", "Tailwind", "Next.js"],
        image: "./img/criptoportfolio.png",
        alt: "Logo de CryptoPortfolio"
    },
    {
        info: "Full Stack Developer at a renewable energy company, where I worked on enterprise and client applications using PHP. I handled the full development cycle, from business logic implementation to creating functional interfaces, optimizing internal processes with technological solutions.",
        skills: ["PHP", "Laravel", "CSS", "JavaScript", "SQL"],
        image: "./img/e4e.jpg",
        alt: "Logo de E4E Solutions"
    },
    {
        info: "Online university where I was responsible for managing content management systems like WordPress and creating a CRM. My role included platform customization, integration of specific features, and improving the interaction between students and administrative staff.",
        skills: ["Python", "PHP", "WordPress", "CSS"],
        image: "./img/tech.jpg",
        alt: "Logo de Tech University"
    },
    {
        info: "Contribution to the education of small investors, guiding them in understanding and leveraging the opportunities offered by the blockchain ecosystem.",
        skills: ["Blockchain", "Crypto", "Sales"],
        image: "./img/mundoCrypto.png",
        alt: "Logo de Blockmatica"
    }
];

const items = document.querySelectorAll('.experience__item');
const infoParagraph = document.querySelector('.experience__information');
const skillsContainer = document.querySelector('.experience__skills');
const imageContainer = document.querySelector('.experience__img');


function updateInfo(index) {
    const experience = experienceData[index];


    infoParagraph.innerHTML = `
        <p>${experience.info}</p>
    `;

    skillsContainer.innerHTML = experience.skills
        .map(skill => `<p class="experience__skill">${skill}</p>`)
        .join('');


    imageContainer.src = experience.image;
    imageContainer.alt = experience.alt;
}


items.forEach((item, index) => {
    item.addEventListener('click', () => {

        items.forEach(el => el.classList.remove('active'));

        item.classList.add('active');


        updateInfo(index);
    });
});
