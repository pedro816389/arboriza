// JavaScript para a página de portfólio

document.addEventListener('DOMContentLoaded', function() {
    // Filtro de projetos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Modal de projetos
    const projectLinks = document.querySelectorAll('.view-project');
    const modals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('href');
            const modal = document.querySelector(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Impedir rolagem da página
            }
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.project-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar rolagem da página
        });
    });
    
    // Fechar modal ao clicar fora do conteúdo
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Slider de depoimentos
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = testimonialItems.length;
    
    function updateSlider() {
        testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });
    }
    
    // Galeria de imagens no modal
    const mainImages = document.querySelectorAll('.main-image');
    const thumbImages = document.querySelectorAll('.gallery-thumbs img');
    
    thumbImages.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const mainImage = this.closest('.project-gallery').querySelector('.main-image');
            const thumbSrc = this.getAttribute('src');
            const mainSrc = mainImage.getAttribute('src');
            
            // Trocar imagens
            mainImage.setAttribute('src', thumbSrc);
            this.setAttribute('src', mainSrc);
        });
    });
});
