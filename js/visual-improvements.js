// JavaScript para melhorias visuais e interatividade

document.addEventListener('DOMContentLoaded', function() {
    // Efeito de rolagem para o cabeçalho
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Adicionar classe active ao link de navegação atual
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html' && linkPath !== '/') {
            link.classList.add('active');
        } else if ((currentLocation === '/' || currentLocation.includes('index.html')) && (linkPath === 'index.html' || linkPath === '/')) {
            link.classList.add('active');
        }
    });
    
    // Animações de entrada para elementos
    const animateElements = document.querySelectorAll('.service-card, .project-card, .expertise-card, .equipment-item, .blog-post, .testimonial-item');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Função para adicionar classes de animação
    function handleScrollAnimation() {
        animateElements.forEach((el, index) => {
            if (isElementInViewport(el) && !el.classList.contains('animate-fadeInUp')) {
                el.classList.add('animate-fadeInUp');
                el.classList.add(`delay-${(index % 5 + 1) * 100}`);
            }
        });
    }
    
    // Verificar elementos visíveis no carregamento inicial
    handleScrollAnimation();
    
    // Verificar elementos visíveis durante a rolagem
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Funcionalidade para o menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Alternar ícone do menu
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            
            // Restaurar ícone do menu
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            
            // Restaurar ícone do menu
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        }
    });
});
