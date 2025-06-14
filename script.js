document.addEventListener("DOMContentLoaded", () => {
  // ===== Variáveis Globais =====
  const startDate = new Date("2019/07/05")
  const audioPlayer = document.getElementById("audio-player")
  let isPlaying = false

  // Array de mensagens românticas para exibição aleatória
  const romanticMessages = [
    "Seu popozão me deixa doido. Te amo muuuuito.",
    "Eu te amo mais a cada dia que passa. Você é o amor da minha vida e quero passar todos os meus dias ao seu lado. Feliz Dia dos Namorados!",
    "Cada momento ao seu lado é uma bênção. Seu sorriso ilumina meus dias e seu amor aquece meu coração. Te amo Dmaaaaaaais!",
    "Você é meu presente, meu futuro e meu para sempre. Obrigado por fazer parte da minha vida e torná-la tão especial.",
    "Nosso amor é como uma história sem fim, cheia de capítulos maravilhosos que escrevemos juntos. Mal posso esperar para ver o que vem pela frente.",
    "Você é o sonho que eu não sabia que tinha, a resposta para perguntas que eu ainda não havia feito. Te amo além das palavras.",
    "Meu coração bate mais forte quando estou com você. Cada momento juntos é um tesouro que guardo com carinho.",
    "Seu amor transformou minha vida de maneiras que eu nunca imaginei possíveis. Obrigado por ser exatamente quem você é.",
    "Você é o amor da minha vida, e cada vez me dá mais certeza de querer ser pai ao seu lado."
  ]

  // Array para armazenar mensagens adicionadas pelo usuário
  let userMessages = []

  // ===== Inicialização =====
  initHeader()
  initHearts()
  initCounter()
  initMusicPlayer()
  initCarousel()
  initDedicatorias()
  initTimeline()
  initInteractive()
  initFloatingMusicButton()
  initMessageModal()

  // ===== Header =====
  function initHeader() {
    const header = document.getElementById("header")
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileLinks = document.querySelectorAll(".mobile-menu a")

    // Scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none"
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `
      } else {
        mobileMenu.style.display = "block"
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `
      }
    })

    // Close mobile menu when clicking a link
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.style.display = "none"
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `
      })
    })
  }

  // ===== Animated Hearts Background =====
  function initHearts() {
    const heartsContainer = document.getElementById("hearts-bg")

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div")
      heart.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E94057" stroke="#E94057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-float" style="opacity: 0.2; position: absolute; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; width: ${Math.random() * 30 + 10}px; height: auto; animation-duration: ${Math.random() * 10 + 10}s; animation-delay: ${Math.random() * 10}s;">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      `
      heartsContainer.appendChild(heart)
    }
  }

  // ===== Counter =====
  function initCounter() {
    function updateCounter() {
      const now = new Date()
      const start = new Date(startDate)

      // Calcular anos completos
      let years = now.getFullYear() - start.getFullYear()

      // Verificar se o aniversário já passou este ano
      const thisYearAnniversary = new Date(now.getFullYear(), start.getMonth(), start.getDate())
      if (now < thisYearAnniversary) {
        years--
      }

      // Calcular meses completos desde o último aniversário
      let months = now.getMonth() - start.getMonth()
      if (now.getDate() < start.getDate()) {
        months--
      }

      // Ajustar se os meses ficaram negativos
      if (months < 0) {
        months += 12
      }

      // Calcular dias completos desde o último "mensiversário"
      let days = now.getDate() - start.getDate()

      // Se os dias ficaram negativos, calcular do mês anterior
      if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += lastMonth.getDate()
      }

      // Calcular horas, minutos e segundos do dia atual
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      // Atualizar os elementos na tela
      document.getElementById("years").textContent = years
      document.getElementById("months").textContent = months
      document.getElementById("days").textContent = days
      document.getElementById("hours").textContent = hours
      document.getElementById("minutes").textContent = minutes
      document.getElementById("seconds").textContent = seconds
    }

    updateCounter()
    setInterval(updateCounter, 1000)
  }

  // ===== Music Player =====
  function initMusicPlayer() {
    const playButton = document.querySelector(".play-button")
    const muteButton = document.querySelector(".mute-button")
    const progressBar = document.querySelector(".progress-bar")
    const currentTimeEl = document.querySelector(".current-time")
    const durationEl = document.querySelector(".duration")

    // Configurar volume inicial
    audioPlayer.volume = 0.3

    // Verificar se a música está tocando e atualizar estado
    audioPlayer.addEventListener("play", () => {
      isPlaying = true
      updatePlayButton()
      updateFloatingPlayButton()
    })

    audioPlayer.addEventListener("pause", () => {
      isPlaying = false
      updatePlayButton()
      updateFloatingPlayButton()
    })

    // Tentar iniciar autoplay após um pequeno delay
    setTimeout(() => {
      audioPlayer.play().catch((error) => {
        console.log("Autoplay bloqueado:", error)
        // Mostrar indicação visual de que a música está disponível
        const playButton = document.querySelector(".play-button")
        if (playButton) {
          playButton.style.animation = "pulse 2s infinite"
        }
      })
    }, 500)

    // Format time (seconds to MM:SS)
    function formatTime(time) {
      if (isNaN(time)) return "0:00"
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    // Update play button icon
    function updatePlayButton() {
      if (isPlaying) {
        playButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        `
      } else {
        playButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        `
      }
    }

    // Update floating play button icon
    function updateFloatingPlayButton() {
      const floatingPlayButton = document.querySelector(".floating-play-button")
      if (isPlaying) {
        floatingPlayButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        `
      } else {
        floatingPlayButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="play-icon">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        `
      }
    }

    // Toggle play/pause
    playButton.addEventListener("click", () => {
      if (isPlaying) {
        audioPlayer.pause()
        isPlaying = false
      } else {
        audioPlayer
          .play()
          .then(() => {
            isPlaying = true
          })
          .catch((error) => {
            console.log("Erro ao reproduzir:", error)
          })
      }
      updatePlayButton()
      updateFloatingPlayButton()
    })

    // Toggle mute
    muteButton.addEventListener("click", () => {
      audioPlayer.muted = !audioPlayer.muted
      if (audioPlayer.muted) {
        muteButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        `
      } else {
        muteButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        `
      }
    })

    // Update progress bar
    audioPlayer.addEventListener("timeupdate", () => {
      const currentTime = audioPlayer.currentTime
      const duration = audioPlayer.duration

      if (!isNaN(duration)) {
        progressBar.value = (currentTime / duration) * 100
        currentTimeEl.textContent = formatTime(currentTime)
      }
    })

    // Set audio time when progress bar is changed
    progressBar.addEventListener("input", () => {
      const seekTime = audioPlayer.duration * (progressBar.value / 100)
      audioPlayer.currentTime = seekTime
    })

    // Update duration display when metadata is loaded
    audioPlayer.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audioPlayer.duration)
      progressBar.max = 100
    })

    // Reset play button when audio ends (não é mais necessário com loop, mas mantemos para segurança)
    // O loop está configurado no HTML, mas mantemos como fallback
    audioPlayer.addEventListener("ended", () => {
      // Com loop ativado no HTML, isso não deveria acontecer
      if (!audioPlayer.loop) {
        audioPlayer.currentTime = 0
        audioPlayer.play()
      }
    })
  }

  // ===== Carousel =====
  function initCarousel() {
    // Sample images - replace with your own
    const images = [
      {
        src: "image/Parque.jpeg",
        alt: "Passeio ao Parque",
        caption: "Passeio ao Parque",
      },
      {
        src: "image/MomentoOutback.jpeg",
        alt: "Outback",
        caption: "Momentos inesquecíveis",
      },
      {
        src: "image/Maresias2025_4.jpeg",
        alt: "Passeio à Praia",
        caption: "Viagem perfeita",
      },
      {
        src: "image/FestaJunina_2.jpeg",
        alt: "Festa Junina.",
        caption: "Simples momentos juntos",
      },
    ]

    let currentSlide = 0
    let slideInterval

    const slidesContainer = document.getElementById("carousel-slides")
    const indicatorsContainer = document.getElementById("carousel-indicators")
    const thumbnailsContainer = document.getElementById("carousel-thumbnails")
    const prevButton = document.querySelector(".carousel-arrow.prev")
    const nextButton = document.querySelector(".carousel-arrow.next")
    const modal = document.getElementById("image-modal")
    const modalImage = document.getElementById("modal-image")
    const modalCaption = document.getElementById("modal-caption")
    const modalClose = document.querySelector(".modal-close")
    const modalPrev = document.querySelector(".modal-prev")
    const modalNext = document.querySelector(".modal-next")

     // Create slides
    images.forEach((image, index) => {
      // Create slide
      const slide = document.createElement("div")
      slide.className = `carousel-slide ${index === 0 ? "active" : ""}`
      slide.innerHTML = `
    <img src="${image.src}" alt="${image.alt}">
    <div class="carousel-caption">
      <p>${image.caption}</p>
    </div>
  `
      // Fix: Use a closure to capture the correct index
      slide.addEventListener(
        "click",
        ((slideIndex) => {
          return () => openModal(slideIndex)
        })(index),
      )
      slidesContainer.appendChild(slide)

      // Create indicator
      const indicator = document.createElement("button")
      indicator.className = `carousel-indicator ${index === 0 ? "active" : ""}`
      indicator.setAttribute("aria-label", `Slide ${index + 1}`)
      indicator.setAttribute("data-index", index)
      indicatorsContainer.appendChild(indicator)

      // Create thumbnail
      const thumbnail = document.createElement("button")
      thumbnail.className = `carousel-thumbnail ${index === 0 ? "active" : ""}`
      thumbnail.setAttribute("data-index", index)
      thumbnail.innerHTML = `<img src="${image.src}" alt="${image.alt}">`
      thumbnailsContainer.appendChild(thumbnail)
    })

    // Add event listeners after all elements are created
    document.querySelectorAll(".carousel-slide").forEach((slide) => {
      slide.addEventListener("click", (e) => {
        const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
        openModal(index)
      })
    })

    document.querySelectorAll(".carousel-indicator").forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
        goToSlide(index)
      })
    })

    document.querySelectorAll(".carousel-thumbnail").forEach((thumbnail) => {
      thumbnail.addEventListener("click", (e) => {
        const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
        goToSlide(index)
      })
    })


    // Next slide
    function nextSlide() {
      goToSlide((currentSlide + 1) % images.length)
    }

    // Previous slide
    function prevSlide() {
      goToSlide((currentSlide - 1 + images.length) % images.length)
    }

    // Go to specific slide
    function goToSlide(index) {
      // Update slides
      const slides = document.querySelectorAll(".carousel-slide")
      slides[currentSlide].classList.remove("active")
      slides[index].classList.add("active")

      // Update indicators
      const indicators = document.querySelectorAll(".carousel-indicator")
      indicators[currentSlide].classList.remove("active")
      indicators[index].classList.add("active")

      // Update thumbnails
      const thumbnails = document.querySelectorAll(".carousel-thumbnail")
      thumbnails[currentSlide].classList.remove("active")
      thumbnails[index].classList.add("active")

      currentSlide = index

      // Reset interval
      clearInterval(slideInterval)
      startSlideInterval()
    }

    // Start automatic slideshow
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 5000)
    }

    // Open modal
    function openModal(index) {
      modalImage.src = images[index].src
      modalCaption.textContent = images[index].caption
      modal.classList.add("active")
      document.body.style.overflow = "hidden"

      // Update current slide for modal navigation
      currentSlide = index
    }

    // Close modal
    function closeModal() {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    }

    // Event listeners
    prevButton.addEventListener("click", (e) => {
      e.stopPropagation()
      prevSlide()
    })

    nextButton.addEventListener("click", (e) => {
      e.stopPropagation()
      nextSlide()
    })

    modalClose.addEventListener("click", closeModal)

    modalPrev.addEventListener("click", (e) => {
      e.stopPropagation()
      const newIndex = (currentSlide - 1 + images.length) % images.length
      modalImage.src = images[newIndex].src
      modalCaption.textContent = images[newIndex].caption
      currentSlide = newIndex
    })

    modalNext.addEventListener("click", (e) => {
      e.stopPropagation()
      const newIndex = (currentSlide + 1) % images.length
      modalImage.src = images[newIndex].src
      modalCaption.textContent = images[newIndex].caption
      currentSlide = newIndex
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })

    // Start slideshow
    startSlideInterval()
  }

  // ===== Dedicatórias =====
  function initDedicatorias() {
    const messages = [
      {
        title: "Meu Amor",
        content:
          "Você é o amor da minha vida. Cada dia ao seu lado é uma nova aventura cheia de alegria e carinho. Obrigado por fazer parte da minha história.",
      },
      {
        title: "Razões para Te Amar",
        content:
          "Amo seu sorriso, seus olhos, sua força e determinação. Amo como você me faz sentir especial todos os dias. Amo cada pequeno detalhe que faz você ser quem é.",
      },
      {
        title: "Nossos Sonhos",
        content:
          "Sonho em continuar construindo uma vida incrível ao seu lado, cheia de conquistas e muito amor, e logo logo com mais um integrante à família. Juntos podemos realizar tudo o que desejamos.",
      },
      {
        title: "Momentos Inesquecíveis",
        content:
          "Nosso primeiro beijo, nossa primeira viagem, nossas risadas até tarde da noite assistindo Alanzoka, A compra do apartamento ... Cada momento com você se torna uma memória preciosa que guardarei para sempre.",
      },
      {
        title: "Meu Futuro",
        content:
          "Quando penso no futuro, só consigo imaginar você ao seu lado. Você é meu presente e meu amanhã, meu amor eterno.",
      },
      {
        title: "Gratidão",
        content:
          "Sou grato todos os dias por ter você em minha vida. Você me faz querer ser uma pessoa melhor a cada dia.",
      },
    ]

    const messagesGrid = document.getElementById("messages-grid")
    const addMessageBtn = document.getElementById("add-message-btn")
    const newMessageTextarea = document.getElementById("new-message")

    // Carregar mensagens do localStorage se existirem
    const savedMessages = localStorage.getItem("userMessages")
    if (savedMessages) {
      userMessages = JSON.parse(savedMessages)
    }

    // Função para renderizar todas as mensagens
    function renderMessages() {
      messagesGrid.innerHTML = ""

      // Renderizar mensagens predefinidas
      messages.forEach((message, index) => {
        createMessageCard(message, index)
      })

      // Renderizar mensagens do usuário
      userMessages.forEach((message, index) => {
        createMessageCard(message, messages.length + index)
      })
    }

    // Função para criar um card de mensagem
    function createMessageCard(message, index) {
      const card = document.createElement("div")
      card.className = "romantic-card message-card"
      card.innerHTML = `
        <div class="message-header">
          <h3>${message.title || "Mensagem Especial"}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-heart">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </div>
        <div class="message-content">
          <p>${message.content}</p>
        </div>
        <button class="message-button">
          Ler mensagem
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      `

      messagesGrid.appendChild(card)

      // Add event listeners
      const messageContent = card.querySelector(".message-content p")
      const messageButton = card.querySelector(".message-button")
      const messageHeart = card.querySelector(".message-heart")

      messageButton.addEventListener("click", () => {
        if (messageContent.classList.contains("expanded")) {
          messageContent.classList.remove("expanded")
          messageButton.innerHTML = `
            Ler mensagem
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          `
          messageHeart.classList.remove("active")
        } else {
          messageContent.classList.add("expanded")
          messageButton.innerHTML = "Fechar"
          messageHeart.classList.add("active")
        }
      })
    }

    // Adicionar nova mensagem
    addMessageBtn.addEventListener("click", () => {
      const content = newMessageTextarea.value.trim()
      if (content) {
        // Adicionar à lista de mensagens do usuário
        userMessages.push({
          title: "Mensagem Especial",
          content: content,
        })

        // Salvar no localStorage
        localStorage.setItem("userMessages", JSON.stringify(userMessages))

        // Adicionar às mensagens românticas para o modal
        romanticMessages.push(content)

        // Limpar textarea e renderizar mensagens
        newMessageTextarea.value = ""
        renderMessages()
      }
    })

    // Renderizar mensagens iniciais
    renderMessages()
  }

  // ===== Timeline =====
  function initTimeline() {
    const timelineEvents = [
      {
        date: "??/11/2018",
        title: "O Primeiro Beijo",
        description: "Aquele momento mágico que selou nosso destino juntos. <br> Ps.: Não achei foto do dia kkk.",
        location: "Parque Vila Lobos",
        image: "image/ConhecendoSuaFamilia.jpeg",
        memory:
          "Um momento de coragem que mudou tudo. Nunca esquecerei como meu coração batia forte e como o tempo pareceu parar quando nossos lábios se tocaram pela primeira vez. <br> Um dia maravilhoso por mais preocupado que eu estava com todo o tempo de espera, sem saber se você de fato apareceria, o celular descarredado e no fim as pernas torradas kkk.",
      },
      {
        date: "05/07/2019",
        title: "O Início de nós",
        description: "O dia em que de fato viramos um casal, e juntos, iniciamos nossa caminhada. <br> Ps.: Não achei foto do dia kkk.",
        location: "Estação Vila Olímpia",
        image: "image/Maresias2025_1.jpeg",
        memory:
          "Este foi um dos dias mais especiais da minha vida. Lembro de ter medo e receio de que não fosse aceito o meu pedido, estava inseguro, mas você aceitou",
      },
      {
        date: "01/01/2023",
        title: "Ano novo 2023",
        description: "Um novo ano, novas conquistas, nova trajetória.",
        location: "Jardim Damasceno",
        image: "image/AnoNovo2023_1.jpeg",
        memory:
          "Um momento de coragem que mudou tudo. Nunca esquecerei como meu coração batia forte e como o tempo pareceu parar quando nossos lábios se tocaram pela primeira vez.",
      },
      {
        date: "29/06/2024",
        title: "Entrega das Chaves",
        description: "A entrega das chaves do nosso tão conhado e planejado apartamento",
        location: "Apartamento Vivaz Estação Santa Marina - Casa",
        image: "image/EntregaChaves.jpeg",
        memory:
          "Desde o dia em que decidimos dar este passo, sonhamos e nos planejamos para essa enorme conquista que nesse dia se concretizou, pegando as tão sonhadas chaves do nosso cantinho.",
      },
      {
        date: "22/04/2025",
        title: "Última ida à Maresias",
        description: "Aproveitamos juntinhos nossas férias em um lugar espetacular.",
        location: "Praia de Maresias",
        image: "image/Maresias2025_4.jpeg",
        memory:
          "Após um longo tempo de obras, compras para nosso apartamento, um período de descanso com a melhor companhia do mundo. Solto sorrisos bobos só de lembrar que terei isso para sempre.",
      },
    ]

    const timelineContainer = document.getElementById("timeline-container")

    timelineEvents.forEach((event, index) => {
      const timelineItem = document.createElement("div")
      timelineItem.className = "timeline-item"

      timelineItem.innerHTML = `
        <div class="romantic-card timeline-card">
          <div class="timeline-header">
            <div class="timeline-date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>${event.date}</span>
            </div>
            <h3 class="timeline-title">${event.title}</h3>
            <div class="timeline-location">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${event.location}</span>
            </div>
          </div>
          
          <div class="timeline-content">
            <div class="timeline-description">
              <p>${event.description}</p>
              <button class="timeline-button" data-index="${index}">
                Ver mais
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            ${
              index === 0
                ? `
              <div class="timeline-image">
                <img src="${event.image}" alt="${event.title}">
              </div>
            `
                : ""
            }
          </div>
          
          <div class="timeline-memory" style="display: none;">
            <h4>Memória Especial</h4>
            <p>${event.memory}</p>
          </div>
        </div>
      `

      timelineContainer.appendChild(timelineItem)

      // Add event listener to the button
      const button = timelineItem.querySelector(".timeline-button")
      const memory = timelineItem.querySelector(".timeline-memory")
      const image = timelineItem.querySelector(".timeline-image")

      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index")

        if (memory.style.display === "none") {
          memory.style.display = "block"
          this.classList.add("active")
          this.innerHTML = `
            Ver menos
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          `

          // Add image if it doesn't exist and it's not the first item
          if (index !== "0") {
            const existingImage = timelineItem.querySelector(".timeline-image")
            if (!existingImage) {
              const imageDiv = document.createElement("div")
              imageDiv.className = "timeline-image"
              imageDiv.innerHTML = `<img src="${timelineEvents[index].image}" alt="${timelineEvents[index].title}">`
              timelineItem.querySelector(".timeline-content").appendChild(imageDiv)
            }
          }
        } else {
          memory.style.display = "none"
          this.classList.remove("active")
          this.innerHTML = `
            Ver mais
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          `

          // Remove image if not the first item (first item always keeps its image)
          if (index !== "0") {
            const existingImage = timelineItem.querySelector(".timeline-image")
            if (existingImage) {
              existingImage.remove()
            }
          }
        }
      })
    })
  }

  // ===== Interactive Section =====
  function initInteractive() {
    const surprises = [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>`,
        title: "Motivos para Te Amar",
        content: `
          <div class="love-reasons">
            <p>Existem infinitos motivos para te amar, mas aqui estão alguns dos meus favoritos:</p>
            <ul>
              <li>Seu sorriso ilumina meu dia</li>
              <li>Seus olhos me encantam</li>
              <li>Seu abraço é meu porto seguro</li>
              <li>Sua determinação me faz querer ser melhor</li>
              <li>Eu já amo braveza </li>
              <li>Seu amor me faz sentir o homem mais sortudo do mundo</li>
              <li>Sua companhia torna qualquer momento especial</li>
              <li>Seu apoio me dá forças para enfrentar qualquer desafio</li>
              <li>Seu jeito único de ser que me conquista todos os dias</li>
              <li>Seu coração que bate em sintonia com o meu</li>
            </ul>
          </div>
        `,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 12v10H4V12"></path>
                <path d="M2 7h20v5H2z"></path>
                <path d="M12 22V7"></path>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>`,
        title: "Surpresa Especial",
        content: `
          <div class="text-center">
            <p>Tenho uma surpresa especial preparada para você!</p>
            <div class="surprise-coupon">
              <h4>Cupom de Amor</h4>
              <p>Este cupom dá direito a um dia especial, planejado com todo carinho, para celebrarmos nosso amor. Inclui jantar romântico, passeio especial e muito mais!</p>
              <p class="small">Válido quando você quiser. Basta me avisar com antecedência.</p>
            </div>
          </div>
        `,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Corpo da câmera -->
  <rect x="3" y="7" width="18" height="14" rx="2" ry="2"/>
  
  <!-- Lente -->
  <circle cx="12" cy="14" r="4"/>
  
  <!-- Flash/visor -->
  <path d="M9 7l1-3h4l1 3"/>
</svg>

`,
        title: "Nossos Passatempos",
        content: `
          <div class="playlist">
            <p>Estes são os passatempos que contam nossa história</p>
            <div class="song-list">
              <div class="song-item">
                <div class="song-header">
                  <div class="song-info">
                    <h5>Passeio ao Parque</h5>
                    <p>Vila lobos, Ibirapuera, Parque do Carmo</p>
                  </div>
                  <span class="song-memory">Onde tudo começou.</span>
                </div>
              </div>
              <div class="song-item">
                <div class="song-header">
                  <div class="song-info">
                    <h5>Assistir vídeos juntos</h5>
                    <p>Alanzoka, Brino...</p>
                  </div>
                  <span class="song-memory">Nossas alegrias e risadas diárias</span>
                </div>
              </div>
              <div class="song-item">
                <div class="song-header">
                  <div class="song-info">
                    <h5>Almoço e jantar fora</h5>
                    <p>Outback, Nohar</p>
                  </div>
                  <span class="song-memory">Nossos momentos que não abro mão</span>
                </div>
              </div>
              <div class="song-item">
                <div class="song-header">
                  <div class="song-info">
                    <h5>Viagens</h5>
                    <p>Principalmente para Maresias</p>
                  </div>
                  <span class="song-memory">Nossa calmaria e descanso da mente</span>
                </div>
              </div>
              <div class="song-item">
                <div class="song-header">
                  <div class="song-info">
                    <h5>Jogar Juntos</h5>
                    <p>Principalmente MLBB</p>
                  </div>
                  <span class="song-memory">Momento que pode nos tirar a paz mas eu amo.</span>
                </div>
              </div>
            </div>
            <p class="playlist-quote">"Os passatempos é o que ajudam a tornar tudo mais leve."</p>
          </div>
        `,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                <path d="M12 14v.01"></path>
              </svg>`,
        title: "Mensagem Secreta",
        content: `
          <div class="secret-message">
            <p>Clique no botão abaixo para revelar uma mensagem especial:</p>
            <button class="romantic-button" id="secret-message-button">Revelar Mensagem Secreta</button>
          </div>
        `,
      },
    ]

    const tabsButtons = document.getElementById("tabs-buttons")
    const tabContent = document.getElementById("tab-content")

    // Create tab buttons
    surprises.forEach((surprise, index) => {
      const button = document.createElement("button")
      button.className = `romantic-card tab-button ${index === 0 ? "active" : ""}`
      button.setAttribute("data-tab", index)

      button.innerHTML = `
        <div class="tab-icon">${surprise.icon}</div>
        <span class="tab-title">${surprise.title}</span>
      `

      tabsButtons.appendChild(button)
    })

    // Set initial content
    tabContent.innerHTML = `
      <div class="romantic-card tab-pane">
        <h3>${surprises[0].title}</h3>
        ${surprises[0].content}
      </div>
    `

    // Add event listeners to tab buttons
    const tabButtons = document.querySelectorAll(".tab-button")
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabIndex = this.getAttribute("data-tab")

        // Update active button
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")

        // Update content
        tabContent.innerHTML = `
          <div class="romantic-card tab-pane">
            <h3>${surprises[tabIndex].title}</h3>
            ${surprises[tabIndex].content}
          </div>
        `

        // Add event listener for secret message button if it exists
        const secretButton = document.getElementById("secret-message-button")
        if (secretButton) {
          secretButton.addEventListener("click", () => {
            window.showRandomMessage()
          })
        }
      })
    })

    // Set empty state if no tab is selected
    if (!document.querySelector(".tab-button.active")) {
      tabContent.innerHTML = `
        <div class="tab-content-empty">
          <p>Clique em uma das surpresas acima para revelar seu conteúdo especial.</p>
        </div>
      `
    }
  }

  // ===== Floating Music Button =====
  function initFloatingMusicButton() {
    const floatingButton = document.querySelector(".floating-button")
    const floatingPanel = document.getElementById("floating-music-panel")
    const floatingPlayButton = document.querySelector(".floating-play-button")

    // Toggle panel
    floatingButton.addEventListener("click", () => {
      floatingPanel.classList.toggle("active")
    })

    // Toggle play/pause
    floatingPlayButton.addEventListener("click", () => {
      if (isPlaying) {
        audioPlayer.pause()
      } else {
        audioPlayer.play()
      }
      isPlaying = !isPlaying
      window.updatePlayButton()
      window.updateFloatingPlayButton()
    })
  }

  // ===== Message Modal =====
  function initMessageModal() {
    const messageModal = document.getElementById("message-modal")
    const randomMessage = document.getElementById("random-message")
    const closeButton = document.getElementById("close-message-modal")
    const modalClose = document.querySelector(".message-modal-close")

    // Função para mostrar uma mensagem aleatória
    window.showRandomMessage = () => {
      // Combinar mensagens predefinidas e do usuário
      const allMessages = [...romanticMessages, ...userMessages.map((msg) => msg.content)]

      // Selecionar uma mensagem aleatória
      const randomIndex = Math.floor(Math.random() * allMessages.length)
      const message = allMessages[randomIndex]

      // Exibir a mensagem no modal
      randomMessage.textContent = message

      // Mostrar o modal
      messageModal.classList.add("active")
      document.body.style.overflow = "hidden"
    }

    // Fechar o modal
    closeButton.addEventListener("click", () => {
      messageModal.classList.remove("active")
      document.body.style.overflow = ""
    })

    modalClose.addEventListener("click", () => {
      messageModal.classList.remove("active")
      document.body.style.overflow = ""
    })

    // Fechar o modal ao clicar fora do conteúdo
    messageModal.addEventListener("click", (e) => {
      if (e.target === messageModal) {
        messageModal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Make updatePlayButton and updateFloatingPlayButton available globally
  window.updatePlayButton = () => {
    const playButton = document.querySelector(".play-button")
    if (isPlaying) {
      playButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `
    } else {
      playButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `
    }
  }

  window.updateFloatingPlayButton = () => {
    const floatingPlayButton = document.querySelector(".floating-play-button")
    if (isPlaying) {
      floatingPlayButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `
    } else {
      floatingPlayButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="play-icon">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `
    }
  }
})
