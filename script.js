document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.projects a');
    
    const modal = document.createElement('div');
    modal.id = 'projectModal';
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    
    const modalTitle = document.createElement('h2');
    const modalDescription = document.createElement('p');
    
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const project = this.parentElement;
            const projectTitle = project.querySelector('h3').textContent;
            
            let projectDescription = '';
            if (projectTitle.includes('Твиттер')) {
                projectDescription = 'Веб-сайт, созданный по подобию Twitter. Реализованы основные функции: создание постов, лента новостей. Использованы технологии: HTML, CSS, JavaScript';
            } else if (projectTitle.includes('крестики-нолики')) {
                projectDescription = 'Классическая игра "Крестики-нолики" с возможностью игры вдвоем на одном устройстве. Использованы технологии: Pygame';
            } else if (projectTitle.includes('Doodle jump')) {
                projectDescription = 'Клон популярной мобильной игры Doodle Jump. Реализована физика прыжков, генерация платформ и система подсчета очков. Использованы технологии: Pygame.';
            }
            
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;
            
            modal.style.display = 'block';
        });
    });
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});