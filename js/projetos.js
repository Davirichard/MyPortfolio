document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-links');
    const projects = document.querySelectorAll('.projetos');

    const initialVisibleProjects = 6;
    let showAllProjects = false;

    function showInitialProjects() {
        projects.forEach((project, index) => {
            project.style.display = index < initialVisibleProjects ? 'block' : 'none';
        });
    }

    function updateLinkStyles(clickedLink) {
        filterLinks.forEach(link => {
            link.style.borderBottom = '';
            link.style.color = '';
        });

        clickedLink.style.borderBottom = '1px solid #F74B0A';
        clickedLink.style.color = '#F74B0A';
    }

    function toggleAllProjectsLinkText(selectedTag) {
        if (selectedTag === 'all') {
            showAllProjects = !showAllProjects;
            filterLinks.forEach(link => {
                if (link.getAttribute('data-filter') === 'all') {
                    link.textContent = showAllProjects ? 'Ver Menos' : 'Ver Todos';
                }
            });
        }
    }
    

    function filterProjects(selectedTag) {
        projects.forEach((project, index) => {
            const projectTags = project.getAttribute('data-tags').split(' ');

            if (selectedTag === 'all') {
                project.style.display = showAllProjects ? 'block' : (index < initialVisibleProjects ? 'block' : 'none');
            } else {
                project.style.display = projectTags.includes(selectedTag) ? 'block' : 'none';
            }
        });
    }

    showInitialProjects();

    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const selectedTag = this.getAttribute('data-filter');

            updateLinkStyles(this);

            toggleAllProjectsLinkText(selectedTag);

            filterProjects(selectedTag);
        });
    });
});
