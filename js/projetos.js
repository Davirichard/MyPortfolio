

document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-link');
    const projects = document.querySelectorAll('.projetos');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const selectedTag = this.getAttribute('data-filter');

            // Remover a borda inferior e a cor laranja de todos os links
            filterLinks.forEach(link => {
                link.style.borderBottom = ''; // Remover a borda inferior
                link.style.color = ''; // Voltar à cor original (pode ser necessário ajustar isso com base no seu CSS)
            });

            // Adicionar a borda inferior e a cor laranja apenas ao link clicado
            this.style.borderBottom = '1px solid #F74B0A';
            this.style.color = '#F74B0A';

            // Otimização: percorrer os projetos uma vez e definir a exibição com base nas tags
            projects.forEach(project => {
                const projectTags = project.getAttribute('data-tags').split(' ');

                project.style.display = (projectTags.includes(selectedTag) || selectedTag === 'all') ? 'block' : 'none';
            });
        });
    });
});