document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleção dos elementos do DOM
  const actionButtons = document.querySelectorAll(".left-actions .action-btn");
  const likeBtn = actionButtons[0]; // Primeiro botão (Coração)
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  if (!likeBtn) return;

  const likeSvg = likeBtn.querySelector("svg");

  // 2. Estado inicial de curtidas
  let baseLikes = 9500;
  let isLiked = false;

  // Cria/seleciona o span para a contagem numérica
  let likesCountSpan = likeBtn.querySelector(".likes-count");
  if (!likesCountSpan) {
    likesCountSpan = document.createElement("span");
    likesCountSpan.className = "likes-count";
    likeBtn.appendChild(likesCountSpan);
  }

  // 3. Função para formatar números (ex: 9500 -> 9.5K)
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  // Exibe o número inicial de curtidas
  likesCountSpan.textContent = formatLikes(baseLikes);

  // 4. Função para aplicar o estilo visual e a animação
  function applyLikeStyle() {
    if (isLiked) {
      likeSvg.style.fill = "#ef4444";
      likeSvg.style.stroke = "#ef4444";
    } else {
      likeSvg.style.fill = "none";
      likeSvg.style.stroke = "currentColor";
    }

    // Efeito visual de animação (bounce) no coração
    likeSvg.style.transition = "transform 0.15s ease";
    likeSvg.style.transform = "scale(1.4)";
    setTimeout(() => {
      likeSvg.style.transform = "scale(1)";
    }, 150);
  }

  // 5. Função para Incrementar a Curtida
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");

      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }

      applyLikeStyle();
    }
  }

  // 6. Evento de clique no BOTÃO DE CORAÇÃO (Curte ou Descurte)
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      // Se já estava curtido, descurte (-1)
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likeBtn.classList.remove("liked");
      
      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }

      applyLikeStyle();
    } else {
      // Se não estava curtido, adiciona curtida (+1)
      addLike();
    }
  });

  // 7. Evento de clique na IMAGEM PRINCIPAL (Sempre incrementa a curtida)
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // 8. Evento no botão de SALVAR (Bookmark)
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const bookmarkSvg = bookmarkBtn.querySelector("svg");
      if (bookmarkSvg) {
        bookmarkSvg.style.fill = isBookmarked ? "currentColor" : "none";
        bookmarkSvg.style.transition = "transform 0.15s ease";
        bookmarkSvg.style.transform = "scale(1.2)";
        setTimeout(() => {
          bookmarkSvg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }
});