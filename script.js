
// Criação do observador de interseção (IntersectionObserver)
const myObserver = new IntersectionObserver(function(entries) {
  // Para cada entrada (elemento observado)
  entries.forEach(entries) => {
    // Se o elemento estiver visível na tela
    if (entry.isIntersecting) {
      entries.target.classList.add('aparece'); // Adiciona a classe 'aparece'
    } else {
      entries.target.classList.remove('aparece'); // Remove a classe se sair da tela
    }
  });
});
