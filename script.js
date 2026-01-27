/* ========================================
   DARK MODE (Modo Escuro)
   ======================================== */

// Seleciona o botão de dark mode pelo ID
const btn = document.getElementById("darkModeBtn");

// Adiciona um evento de clique ao botão
btn.addEventListener("click", () => {
    // Toggle = adiciona a classe "dark" se não existir, remove se existir
    document.body.classList.toggle("dark");
    
    // Muda o ícone do botão dependendo do modo ativo
    // Se tiver a classe "dark", mostra o sol ☀️, senão mostra a lua 🌙
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


/* ========================================
   BOTÃO VOLTAR AO TOPO
   ======================================== */

// Seleciona o botão de voltar ao topo
const backToTopBtn = document.getElementById("backToTop");

// Adiciona um evento que executa sempre que o utilizador faz scroll
window.addEventListener("scroll", () => {
    // Se o scroll vertical for maior que 300px
    if (window.scrollY > 300) {
        // Mostra o botão
        backToTopBtn.style.display = "block";
    } else {
        // Esconde o botão
        backToTopBtn.style.display = "none";
    }
});

// Quando clicar no botão de voltar ao topo
backToTopBtn.addEventListener("click", () => {
    // Faz scroll até ao topo da página
    window.scrollTo({
        top: 0,              // Posição 0 = topo
        behavior: "smooth"   // Scroll suave (animado)
    });
});


/* ========================================
   ANIMAÇÕES AO FAZER SCROLL
   (Elementos aparecem quando entram na tela)
   ======================================== */

// Opções para o observador de interseção
const observerOptions = {
    threshold: 0.1,                    // Ativa quando 10% do elemento estiver visível
    rootMargin: "0px 0px -50px 0px"    // Ativa 50px antes de entrar totalmente na tela
};

// Cria um Intersection Observer (observa quando elementos entram na viewport)
const observer = new IntersectionObserver((entries) => {
    // Para cada elemento observado
    entries.forEach(entry => {
        // Se o elemento está visível na tela (intersecting)
        if (entry.isIntersecting) {
            // Adiciona a classe "visible" que ativa a animação no CSS
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Seleciona todos os elementos com a classe "fade-in"
// e adiciona cada um deles ao observador
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


/* ========================================
   SMOOTH SCROLL PARA OS LINKS INTERNOS
   (Scroll suave quando clicar em links #sobre, #skills, etc.)
   ======================================== */

// Seleciona todos os links que começam com "#" (links internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Adiciona evento de clique a cada link
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Encontra o elemento de destino usando o href do link
        const target = document.querySelector(this.getAttribute('href'));
        
        // Se o elemento existir
        if (target) {
            // Faz scroll até ele de forma suave
            target.scrollIntoView({
                behavior: 'smooth',  // Animação suave
                block: 'start'       // Alinha ao topo da tela
            });
        }
    });
});


