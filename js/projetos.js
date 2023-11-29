document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-links');
    const projects = document.querySelectorAll('.projetos');

    const initialVisibleProjects = 6;
    let showAllProjects = false;

    // Mostrar apenas os primeiros projetos iniciais
    projects.forEach((project, index) => {
        project.style.display = index < initialVisibleProjects ? 'block' : 'none';
    });

    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const selectedTag = this.getAttribute('data-filter');

            // Remover a borda inferior e a cor laranja de todos os links
            filterLinks.forEach(link => {
                link.style.borderBottom = '';
                link.style.color = '';
            });

            // Adicionar a borda inferior e a cor laranja apenas ao link clicado
            this.style.borderBottom = '1px solid #F74B0A';
            this.style.color = '#F74B0A';

            // Alterar o texto do link "Todos" com base no estado atual
            if (selectedTag === 'all') {
                showAllProjects = !showAllProjects;
                this.textContent = showAllProjects ? 'Ver Menos' : 'Ver Todos';
            }

            // Exibir todos os projetos se "Todos" for clicado; caso contrário, filtrar com base na tag selecionada
            projects.forEach((project, index) => {
                const projectTags = project.getAttribute('data-tags').split(' ');

                if (selectedTag === 'all') {
                    // Se "Todos" for clicado, mostrar todos os projetos ou apenas os iniciais
                    project.style.display = showAllProjects ? 'block' : (index < initialVisibleProjects ? 'block' : 'none');
                } else {
                    // Caso contrário, exibir ou ocultar com base na tag selecionada
                    project.style.display = projectTags.includes(selectedTag) ? 'block' : 'none';
                }
            });
        });
    });
});
