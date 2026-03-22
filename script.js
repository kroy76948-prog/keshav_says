const photoNameCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base"
});

const photoFiles = [
  "red-top.jpeg",
  "rooftop-flower.jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.35 AM.jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.36 AM.jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (1).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (10).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (11).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (12).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (13).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (14).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (15).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (16).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (17).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (18).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (19).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (2).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (20).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (21).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (22).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (23).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (24).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (3).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (4).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (5).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (6).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (7).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (8).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM (9).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.40 AM.jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (1).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (10).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (11).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (12).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (2).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (3).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (4).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (5).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (6).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (7).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (8).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM (9).jpeg",
  "WhatsApp Image 2026-03-22 at 9.23.41 AM.jpeg"
].sort((left, right) => photoNameCollator.compare(left, right));

const siteContent = {
  yourName: "keshav kumar",
  herName: "davyam kumari",
  nickname: "momo",
  anniversary: "2024-02-14",
  heroTitle: "A little corner of the internet made only for us.",
  heroText:
    "Every laugh, every late-night call, every soft moment somehow made life brighter. This page is my small way of saying that you matter to me more than words usually manage to say.",
  memoryTitle: "You make ordinary days feel golden.",
  memoryText:
    "The best part of my day is still hearing from you and knowing we get to keep building something beautiful together.",
  letterIntro:
    "My love, thank you for being the kind of person who makes the world gentler just by being in it.",
  letterBody:
    "You bring calm to my chaos, warmth to my cold days, and a kind of happiness that feels both exciting and peaceful at the same time. I love your heart, your smile, your mind, and all the little details that make you who you are.",
  letterClosing:
    "If life ever feels noisy, I hope this page reminds you that there is someone out here loving you very loudly.",
  promiseTitle: "I will keep loving you in ways you can feel.",
  heroPhotoCaption: "A moment I would keep close no matter where life takes us.",
  galleryCaptionOne: "One of the many photos that deserved its own spotlight.",
  galleryCaptionTwo: "A little more of your smile, style, and magic in one place.",
  reasons: [
    {
      title: "Your laugh",
      text: "It can pull me out of a bad mood in seconds."
    },
    {
      title: "Your kindness",
      text: "You care deeply, and that shows in everything you do."
    },
    {
      title: "Your honesty",
      text: "With you, everything feels real and safe."
    },
    {
      title: "Your little habits",
      text: "Even the smallest things about you have become my favorite details."
    },
    {
      title: "Your strength",
      text: "You handle so much with grace, and I admire that more than I can say."
    },
    {
      title: "Your heart",
      text: "You love sincerely, and that changes the atmosphere around you."
    }
  ],
  timeline: [
    {
      date: "Day One",
      title: "The first conversation",
      text: "Something about that first real moment together felt easy in the best way."
    },
    {
      date: "A Favorite Memory",
      title: "The night we could not stop smiling",
      text: "It felt like time slowed down just enough for us to notice how happy we were."
    },
    {
      date: "Every day since",
      title: "Choosing us again and again",
      text: "I still get excited for all the tiny moments we have not even had yet."
    }
  ],
  promises: [
    "I will listen carefully.",
    "I will cheer for your dreams.",
    "I will keep making room for joy with you."
  ]
};

const photos = photoFiles.map((fileName, index) => ({
  fileName,
  src: `assets/photos/${fileName}`,
  alt: `Photo ${String(index + 1).padStart(2, "0")} of ${
    siteContent.herName.trim() || "my favorite person"
  }`
}));

const photoLookup = new Map(photos.map((photo) => [photo.fileName, photo]));

const featuredPhotoFiles = {
  heroMain: "red-top.jpeg",
  heroMini: "rooftop-flower.jpeg",
  galleryOne: "WhatsApp Image 2026-03-22 at 9.23.41 AM.jpeg",
  galleryTwo: "WhatsApp Image 2026-03-22 at 9.23.40 AM.jpeg"
};

const setText = (id, value) => {
  const element = document.getElementById(id);

  if (element && value) {
    element.textContent = value;
  }
};

const setImage = (id, photo) => {
  const element = document.getElementById(id);

  if (!element || !photo) {
    return;
  }

  element.src = photo.src;
  element.alt = photo.alt;
};

const removeContactSheetArtifacts = () => {
  document
    .querySelectorAll(
      'img[src*="photo-contact-sheet.jpg"], a[href*="photo-contact-sheet.jpg"]'
    )
    .forEach((element) => element.remove());
};

const getPhoto = (fileName, fallbackIndex) =>
  photoLookup.get(fileName) || photos[fallbackIndex] || null;

const renderFeaturedPhotos = () => {
  const heroMainPhoto = getPhoto(featuredPhotoFiles.heroMain, 0);
  const heroMiniPhoto = getPhoto(featuredPhotoFiles.heroMini, 1);
  const galleryOnePhoto = getPhoto(featuredPhotoFiles.galleryOne, 2);
  const galleryTwoPhoto = getPhoto(featuredPhotoFiles.galleryTwo, 3);

  setImage("hero-photo-main", heroMainPhoto);
  setImage("hero-photo-mini", heroMiniPhoto);
  setImage("gallery-feature-one", galleryOnePhoto);
  setImage("gallery-feature-two", galleryTwoPhoto);
  setText("hero-photo-caption", siteContent.heroPhotoCaption);
  setText("gallery-caption-one", siteContent.galleryCaptionOne);
  setText("gallery-caption-two", siteContent.galleryCaptionTwo);
};

const renderReasons = () => {
  const reasonsGrid = document.getElementById("reasons-grid");

  if (!reasonsGrid) {
    return;
  }

  reasonsGrid.innerHTML = siteContent.reasons
    .map(
      (reason, index) => `
        <article class="reason-card">
          <span class="reason-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${reason.title}</h3>
          <p>${reason.text}</p>
        </article>
      `
    )
    .join("");
};

const renderTimeline = () => {
  const timelineList = document.getElementById("timeline-list");

  if (!timelineList) {
    return;
  }

  timelineList.innerHTML = siteContent.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-date">${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
};

const renderPromises = () => {
  const promiseList = document.getElementById("promise-list");

  if (!promiseList) {
    return;
  }

  promiseList.innerHTML = siteContent.promises
    .map((promise) => `<p>${promise}</p>`)
    .join("");
};

const renderAlbum = () => {
  const albumGrid = document.getElementById("album-grid");
  const photoCount = document.getElementById("photo-count");

  if (!albumGrid) {
    return;
  }

  if (photoCount) {
    photoCount.textContent = String(photos.length);
  }

  albumGrid.innerHTML = photos
    .map(
      (photo, index) => `
        <button
          class="album-card"
          type="button"
          data-photo-index="${index}"
          aria-label="Open photo ${String(index + 1).padStart(2, "0")}"
        >
          <img
            src="${photo.src}"
            alt="${photo.alt}"
            loading="lazy"
            decoding="async"
          />
          <span class="album-badge">${String(index + 1).padStart(2, "0")}</span>
        </button>
      `
    )
    .join("");
};

const updateDaysCounter = () => {
  const daysCounter = document.getElementById("days-counter");

  if (!daysCounter) {
    return;
  }

  const startDate = new Date(siteContent.anniversary);
  const today = new Date();
  const diff = today.getTime() - startDate.getTime();

  if (Number.isNaN(diff) || diff < 0) {
    daysCounter.textContent = "countless moments";
    return;
  }

  const daysTogether = Math.floor(diff / (1000 * 60 * 60 * 24));
  daysCounter.textContent = `${daysTogether.toLocaleString()} days`;
};

const setupScrollButtons = () => {
  const buttons = document.querySelectorAll("[data-scroll]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selector = button.getAttribute("data-scroll");
      const target = selector ? document.querySelector(selector) : null;

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
};

const setupAlbumLightbox = () => {
  const albumGrid = document.getElementById("album-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  if (
    !albumGrid ||
    !lightbox ||
    !lightboxImage ||
    !lightboxCaption ||
    !lightboxClose ||
    !lightboxPrev ||
    !lightboxNext ||
    photos.length === 0
  ) {
    return;
  }

  let activePhotoIndex = 0;

  const renderActivePhoto = () => {
    const photo = photos[activePhotoIndex];

    if (!photo) {
      return;
    }

    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;
    lightboxCaption.textContent = `Photo ${String(activePhotoIndex + 1).padStart(
      2,
      "0"
    )} of ${photos.length}`;
  };

  const openLightbox = (index) => {
    activePhotoIndex = index;
    renderActivePhoto();
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
    document.body.classList.remove("lightbox-open");
  };

  const showNextPhoto = (direction) => {
    activePhotoIndex = (activePhotoIndex + direction + photos.length) % photos.length;
    renderActivePhoto();
  };

  albumGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-photo-index]");

    if (!trigger) {
      return;
    }

    openLightbox(Number(trigger.getAttribute("data-photo-index")));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showNextPhoto(-1));
  lightboxNext.addEventListener("click", () => showNextPhoto(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showNextPhoto(-1);
    }

    if (event.key === "ArrowRight") {
      showNextPhoto(1);
    }
  });
};

const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
};

const createHeartBurst = (x, y) => {
  const count = 14;

  for (let index = 0; index < count; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 220}px`);
    heart.style.setProperty("--y", `${-40 - Math.random() * 180}px`);
    heart.style.animationDelay = `${index * 22}ms`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
};

const setupHeartButton = () => {
  const heartButton = document.getElementById("heart-button");

  if (!heartButton) {
    return;
  }

  heartButton.addEventListener("click", () => {
    const rect = heartButton.getBoundingClientRect();
    createHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
};

const applyContent = () => {
  const herName = siteContent.herName.trim() || "My Favorite Person";
  const yourName = siteContent.yourName.trim() || "Your Name";

  document.title = `For ${herName}`;

  setText("her-name-inline", herName);
  setText("her-name-footer", herName);
  setText("your-name-signature", yourName);
  setText("your-name-footer", yourName);
  setText("nickname", siteContent.nickname);
  setText("hero-title", siteContent.heroTitle);
  setText("hero-text", siteContent.heroText);
  setText("memory-title", siteContent.memoryTitle);
  setText("memory-text", siteContent.memoryText);
  setText("letter-intro", siteContent.letterIntro);
  setText("letter-body", siteContent.letterBody);
  setText("letter-closing", siteContent.letterClosing);
  setText("promise-title", siteContent.promiseTitle);
};

applyContent();
removeContactSheetArtifacts();
renderFeaturedPhotos();
renderReasons();
renderTimeline();
renderPromises();
renderAlbum();
updateDaysCounter();
setupScrollButtons();
setupAlbumLightbox();
setupRevealAnimations();
setupHeartButton();
removeContactSheetArtifacts();
