// JavaScript para a página de blog

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade para as perguntas frequentes
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const icon = otherItem.querySelector('.toggle-icon i');
                    icon.className = 'fas fa-plus';
                }
            });
            
            // Alternar o estado do item atual
            item.classList.toggle('active');
            
            // Alternar o ícone
            const icon = item.querySelector('.toggle-icon i');
            if (item.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-plus';
            }
        });
    });
    
    // Funcionalidade para o formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Aqui seria implementada a lógica de envio do email para um serviço
                // Como é um exemplo, apenas mostraremos uma mensagem de sucesso
                
                // Limpar o campo
                emailInput.value = '';
                
                // Criar elemento de mensagem de sucesso
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Inscrição realizada com sucesso! Obrigado por se inscrever.';
                successMessage.style.color = 'white';
                successMessage.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                successMessage.style.padding = '10px';
                successMessage.style.borderRadius = '4px';
                successMessage.style.marginTop = '10px';
                
                // Adicionar mensagem após o formulário
                this.appendChild(successMessage);
                
                // Remover a mensagem após 3 segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }
    
    // Funcionalidade para os links "Continuar lendo"
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Como ainda não temos as páginas de artigos individuais,
            // vamos apenas mostrar um alerta por enquanto
            e.preventDefault();
            
            const articleTitle = this.closest('.post-content').querySelector('h2').textContent;
            alert(`Artigo completo "${articleTitle}" em desenvolvimento. Em breve estará disponível!`);
        });
    });
});
