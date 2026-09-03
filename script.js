document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleção dos elementos principais
  const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  if (!likeBtn) return;

  const likeSvg = likeBtn.querySelector("svg");

  // 2. Estado inicial de curtidas
  let baseLikes = 9500;
  let isLiked = false;

  // Cria o elemento para exibir a quantidade de curtidas
  let likesCountSpan = document.createElement("span");
  likesCountSpan.className = "likes-count";
  likeBtn.appendChild(likesCountSpan);

  // 3. Formatação dos números (ex: 9500 -> 9.5K)
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  // Define o valor inicial formatado
  likesCountSpan.textContent = formatLikes(baseLikes);

  // 4. Aplica estilo e animação de clique ao coração
  function applyLikeStyle() {
    if (isLiked) {
      likeSvg.style.fill = "#ef4444";
      likeSvg.style.stroke = "#ef4444";
    } else {
      likeSvg.style.fill = "none";
      likeSvg.style.stroke = "currentColor";
    }

    // Animação de pulso
    likeSvg.style.transition = "transform 0.15s ease";
    likeSvg.style.transform = "scale(1.3)";
    setTimeout(() => {
      likeSvg.style.transform = "scale(1)";
    }, 150);
  }

  // 5. Adiciona curtida
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likesCountSpan.textContent = formatLikes(baseLikes);
      applyLikeStyle();
    }
  }

  // 6. Alterna curtida ao clicar no ícone de coração
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likesCountSpan.textContent = formatLikes(baseLikes);
      applyLikeStyle();
    } else {
      addLike();
    }
  });

  // 7. Curte ao clicar na imagem da publicação
  if (postMedia) {
    postMedia.addEventListener("click", () => {
      addLike();
    });
  }

  // 8. Botão de salvar (Bookmark)
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;

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


