// Carrusel pillars
const pillarsInner = document.getElementById('pillarsInner');
const pillarPrev = document.getElementById('pillarPrev');
const pillarNext = document.getElementById('pillarNext');

if (pillarPrev && pillarNext && pillarsInner) {
    pillarNext.addEventListener('click', () => {
        pillarsInner.scrollBy({ left: 300, behavior: 'smooth' });
    });
    pillarPrev.addEventListener('click', () => {
        pillarsInner.scrollBy({ left: -300, behavior: 'smooth' });
    });
}

// Carrusel projects
const projectsGrid = document.getElementById('projectsGrid');
const projectPrev = document.getElementById('projectPrev');
const projectNext = document.getElementById('projectNext');

if (projectPrev && projectNext && projectsGrid) {
    projectNext.addEventListener('click', () => {
        projectsGrid.scrollBy({ left: 300, behavior: 'smooth' });
    });
    projectPrev.addEventListener('click', () => {
        projectsGrid.scrollBy({ left: -300, behavior: 'smooth' });
    });
}