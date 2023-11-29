document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-link');
    const projects = document.querySelectorAll('.projetos');
    const maxVisibleProjects = 6; // Defina o número máximo de projetos visíveis inicialmente

    // Ocultar projetos além do número máximo definido
    projects.forEach((project, index) => {
        project.style.display = index < maxVisibleProjects ? 'block' : 'none';
    });

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
            projects.forEach((project, index) => {
                const projectTags = project.getAttribute('data-tags').split(' ');

                if (selectedTag === 'all') {
                    // Se a tag selecionada for "all", mostrar todos os projetos
                    project.style.display = 'block';
                } else {
                    // Caso contrário, mostrar apenas os projetos com a tag correspondente
                    project.style.display = projectTags.includes(selectedTag) ? 'block' : 'none';
                }
            });
        });
    });
});
