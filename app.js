/* CaptainPepe portfolio — i18n + Framer-grade motion */
(function () {
  "use strict";

  const STORAGE_KEY = "captainpepe-lang";

  const dict = {
    en: {
      skip: "Skip to content",
      "nav.now": "Now",
      "nav.cysic": "Cysic",
      "nav.projects": "Projects",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.kicker": "OPERATOR · OG · CYRUNNER",
      "hero.sub": "Purkov · CaptainPepe",
      "hero.lead":
        "I run GPU nodes, write the bots that keep them honest, grow communities, and ship memes for official pages.",
      "cta.telegram": "Telegram",
      "cta.x": "X",
      "pill.gpu": "GPU ops",
      "pill.memes": "Memes",
      "hero.badge": "GPU online",
      "now.eyebrow": "Infrastructure",
      "now.title": "Now / Stack",
      "now.desc": "Hardware that ships nodes. Tools that keep the fleet honest.",
      "hw.epyc.title": "Dual EPYC",
      "hw.xeon.title": "Xeon Workhorse",
      "hw.mac.title": "MacBook",
      "hw.ram": "RAM",
      "hw.gpu": "GPU",
      "hw.role": "Role",
      "hw.mac.role": "Daily driver",
      "skills.title": "Skills & tools",
      "skills.llms": "Local LLMs",
      "skills.ai": "Local AI assistant",
      "skills.scripts": "Scripts / bots",
      "skills.nodes": "Node ops",
      "skills.logs": "Log analysis",
      "skills.sybil": "Anti-sybil",
      "skills.infra": "Infrastructure",
      "cysic.eyebrow": "Flagship",
      "cysic.title": "Cysic — OG & CyRunner",
      "cysic.body":
        "Cysic — OG & CyRunner Ambassador. Community + official memes for @cysic_xyz. GPU nodes. Found attack vectors and helped the team shut them down.",
      "cysic.banner.cap": "CyRunner Ambassador · Duo",
      "cysic.project.body":
        "Ambassador + GPU nodes. Community memes for the official page. Attack-vector hunting with the team.",
      "badge.community": "Community",
      "badge.memes": "Official memes",
      "badge.gpu": "GPU nodes",
      "cysic.link.site": "cysic.xyz",
      "cysic.link.program": "Ambassador program →",
      "projects.eyebrow": "Selected work",
      "projects.title": "Projects",
      "projects.desc": "Nodes, bots, anti-sybil, community — no invented trophies.",
      "ptb.title": "Portal to Bitcoin",
      "ptb.body":
        ">10k gas tokens. Telegram node bots (ideas later used in the official Discord bot). Anti-sybil + tens of GB of logs. Meetup.",
      "ptb.b1": "Gas tokens",
      "ptb.b2": "Node bots",
      "ptb.b3": "Anti-sybil",
      "dill.title": "Dill",
      "dill.body": "Nodes and event roles — keeping the network honest from the ground up.",
      "dill.b1": "Nodes",
      "dill.b2": "Events",
      "inf.title": "Inference",
      "inf.aka": "GPU fleet",
      "inf.body": "Long-term GPU nodes — consistently near the top of the dashboard.",
      "inf.b1": "GPU nodes",
      "inf.b2": "Top dashboard",
      "team.eyebrow": "Crew",
      "team.title": "Begunki Uzlov",
      "team.desc": "Infra, anti-sybil, automation — the team behind the nodes.",
      "team.name": "Begunki Uzlov",
      "team.body":
        "A tight crew focused on infrastructure, anti-sybil detection, and automation that keeps GPU and chain nodes reliable at scale.",
      "team.t1": "Infrastructure",
      "team.t2": "Anti-sybil",
      "team.t3": "Automation",
      "contact.eyebrow": "Say hello",
      "contact.title": "Let's talk nodes & memes",
      "contact.desc": "Telegram is fastest. X for public signals. Discord for DMs.",
      "footer.brand": "Evgeny Purkov · CaptainPepe",
      "footer.note": "Built with vanilla HTML/CSS/JS",
    },
    ru: {
      skip: "К содержимому",
      "nav.now": "Сейчас",
      "nav.cysic": "Cysic",
      "nav.projects": "Проекты",
      "nav.team": "Команда",
      "nav.contact": "Контакт",
      "hero.kicker": "ОПЕРАТОР · OG · CYRUNNER",
      "hero.sub": "Purkov · CaptainPepe",
      "hero.lead":
        "Кручу GPU-ноды, пишу ботов, веду коммьюнити и делаю мемы для официальных страниц.",
      "cta.telegram": "Telegram",
      "cta.x": "X",
      "pill.gpu": "GPU ops",
      "pill.memes": "Мемы",
      "hero.badge": "GPU онлайн",
      "now.eyebrow": "Инфраструктура",
      "now.title": "Сейчас / Стек",
      "now.desc": "Железо, на котором крутятся ноды. Инструменты, которые держат флот честным.",
      "hw.epyc.title": "Dual EPYC",
      "hw.xeon.title": "Xeon Workhorse",
      "hw.mac.title": "MacBook",
      "hw.ram": "ОЗУ",
      "hw.gpu": "GPU",
      "hw.role": "Роль",
      "hw.mac.role": "Основной",
      "skills.title": "Навыки и инструменты",
      "skills.llms": "Локальные LLM",
      "skills.ai": "Локальный AI-ассистент",
      "skills.scripts": "Скрипты / боты",
      "skills.nodes": "Ноды",
      "skills.logs": "Анализ логов",
      "skills.sybil": "Антисибил",
      "skills.infra": "Инфраструктура",
      "cysic.eyebrow": "Флагман",
      "cysic.title": "Cysic — OG & CyRunner",
      "cysic.body":
        "Cysic — OG и амбассадор CyRunners. Работа с коммьюнити и мемы для официальной страницы в X. GPU-ноды. Нашёл уязвимости, которые использовали в атаке, помог команде закрыть векторы.",
      "cysic.banner.cap": "Амбассадор CyRunner · Duo",
      "cysic.project.body":
        "Амбассадор + GPU-ноды. Мемы для официальной страницы. Поиск векторов атаки вместе с командой.",
      "badge.community": "Комьюнити",
      "badge.memes": "Офиц. мемы",
      "badge.gpu": "GPU-ноды",
      "cysic.link.site": "cysic.xyz",
      "cysic.link.program": "Программа амбассадоров →",
      "projects.eyebrow": "Избранное",
      "projects.title": "Проекты",
      "projects.desc": "Ноды, боты, антисибил, комьюнити — без выдуманных трофеев.",
      "ptb.title": "Portal to Bitcoin",
      "ptb.body":
        ">10k gas-токенов. Telegram-боты для нод (идеи позже легли в официальный Discord-бот). Антисибил + десятки ГБ логов. Митап.",
      "ptb.b1": "Gas-токены",
      "ptb.b2": "Боты нод",
      "ptb.b3": "Антисибил",
      "dill.title": "Dill",
      "dill.body": "Ноды и роли на ивентах — держим сеть честной с земли.",
      "dill.b1": "Ноды",
      "dill.b2": "Ивенты",
      "inf.title": "Inference",
      "inf.aka": "GPU-флот",
      "inf.body": "Долгосрочные GPU-ноды — стабильно в топе дашборда.",
      "inf.b1": "GPU-ноды",
      "inf.b2": "Топ дашборда",
      "team.eyebrow": "Экипаж",
      "team.title": "Бегунки Узлов",
      "team.desc": "Инфра, антисибил, автоматизация — команда за нодами.",
      "team.name": "Бегунки Узлов",
      "team.body":
        "Плотная команда: инфраструктура, антисибил-детекция и автоматизация, чтобы GPU- и чейн-ноды работали надёжно на масштабе.",
      "team.t1": "Инфраструктура",
      "team.t2": "Антисибил",
      "team.t3": "Автоматизация",
      "contact.eyebrow": "Напиши",
      "contact.title": "Поговорим о нодах и мемах",
      "contact.desc": "Telegram — быстрее всего. X — для публичных сигналов. Discord — в личку.",
      "footer.brand": "Евгений Purkov · CaptainPepe",
      "footer.note": "Собрано на чистом HTML/CSS/JS",
    },
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---- Hero name (Safari-safe: always visible solid white) ---- */
  function getHeroName(lang) {
    const h1 = document.getElementById("hero-name");
    if (!h1) return lang === "ru" ? "Евгений" : "Evgeny";
    return lang === "ru"
      ? h1.getAttribute("data-name-ru") || "Евгений"
      : h1.getAttribute("data-name-en") || "Evgeny";
  }

  function setHeroName(lang) {
    const h1 = document.getElementById("hero-name");
    const textEl = h1 && h1.querySelector(".hero__name-text");
    if (!h1 || !textEl) return;

    const name = getHeroName(lang);
    h1.setAttribute("aria-label", name);
    textEl.textContent = name;
    textEl.style.opacity = "1";
    textEl.style.color = "#ffffff";
    textEl.style.webkitTextFillColor = "#ffffff";
  }

  /* ---- i18n ---- */
  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ru") return saved;
    return "en";
  }

  function setLang(lang) {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    setHeroName(lang);
  }

  /* ---- Page-load motion gate ---- */
  function initPageReady() {
    document.body.classList.remove("is-loading");
    if (reduceMotion) {
      document.body.classList.add("is-ready");
      document.querySelectorAll(".hero-enter, .reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }
    // Double-rAF so first paint is settled before entrance anims fire
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add("is-ready");
      });
    });
  }

  /* ---- Scroll reveal + stagger ---- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (reduceMotion) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -56px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---- Cursor glow ---- */
  function initCursor() {
    const glow = document.querySelector(".cursor-glow");
    if (!glow || !finePointer || reduceMotion) return;
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0;
    let visible = false;

    window.addEventListener(
      "pointermove",
      (e) => {
        tx = e.clientX;
        ty = e.clientY;
        if (!visible) {
          visible = true;
          glow.style.opacity = "1";
        }
      },
      { passive: true }
    );

    window.addEventListener("pointerleave", () => {
      glow.style.opacity = "0";
      visible = false;
    });

    function frame() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      glow.style.left = x + "px";
      glow.style.top = y + "px";
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---- Magnetic buttons — pull + scale + glow ---- */
  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll(".magnetic").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px) scale(1.045)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* ---- Card tilt + lift ---- */
  function initTilt() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * 6;
        const ry = (px - 0.5) * 7;
        card.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px) scale(1.01)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ---- Mobile nav ---- */
  function initMobileNav() {
    const burger = document.querySelector(".nav__burger");
    const panel = document.getElementById("mobile-nav");
    if (!burger || !panel) return;

    function close() {
      burger.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    }

    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", open ? "false" : "true");
      panel.hidden = open;
    });

    panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  /* ---- Lang toggle ---- */
  function initLangToggle() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ---- Lucide ---- */
  function initIcons() {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  /* ---- Section enter/exit transitions + parallax ---- */
  function initSectionMotion() {
    const sections = document.querySelectorAll("[data-section]");
    if (!sections.length) return;

    if (reduceMotion) {
      sections.forEach((el) => {
        el.classList.add("is-inview");
        el.classList.remove("is-exiting");
        el.style.setProperty("--parallax-y", "0");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("is-inview");
            el.classList.remove("is-exiting");
          } else {
            // Soft exit when section leaves toward the top (scrolled past)
            const leavingUp = entry.boundingClientRect.bottom < 0;
            if (leavingUp && el.classList.contains("is-inview")) {
              el.classList.add("is-exiting");
            }
            // Reset if it went fully below viewport (scroll back up re-enters)
            if (entry.boundingClientRect.top > (window.innerHeight || 0)) {
              el.classList.remove("is-inview", "is-exiting");
            }
          }
        });
      },
      { threshold: [0, 0.12, 0.22], rootMargin: "0px 0px -6% 0px" }
    );
    sections.forEach((el) => io.observe(el));

    // Scroll-linked parallax on section heads (richer travel)
    let ticking = false;
    function updateParallax() {
      ticking = false;
      const vh = window.innerHeight || 1;
      sections.forEach((el) => {
        if (!el.classList.contains("is-inview") || el.classList.contains("is-exiting")) return;
        const head = el.querySelector(".section__head");
        if (!head) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height * 0.22;
        const offset = ((mid - vh * 0.32) / vh) * -28;
        const clamped = Math.max(-34, Math.min(28, offset));
        head.style.setProperty("--parallax-y", String(clamped.toFixed(2)));
      });
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* ---- Scroll progress bar ---- */
  function initScrollProgress() {
    const bar = document.querySelector(".scroll-progress");
    if (!bar) return;
    let ticking = false;
    function update() {
      ticking = false;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      bar.style.setProperty("--sp", max > 0 ? (el.scrollTop / max).toFixed(4) : "0");
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ---- Card spotlight — cursor coords for CSS glow ---- */
  function initSpotlight() {
    if (!finePointer) return;
    document.querySelectorAll(".glass-card").forEach((card) => {
      card.addEventListener(
        "pointermove",
        (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
          card.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
        },
        { passive: true }
      );
    });
  }

  /* ---- Scroll-spy — highlight active nav link ---- */
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll(".nav__links a"));
    if (!links.length) return;
    const map = new Map();
    links.forEach((a) => {
      const sec = document.querySelector(a.getAttribute("href"));
      if (sec) map.set(sec, a);
    });
    if (!map.size) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.remove("is-active"));
          const a = map.get(en.target);
          if (a) a.classList.add("is-active");
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    map.forEach((_a, sec) => io.observe(sec));
  }

  /* ---- Boot ---- */
  document.addEventListener("DOMContentLoaded", () => {
    setLang(getLang());
    initPageReady();
    initReveal();
    initSectionMotion();
    initCursor();
    initMagnetic();
    initTilt();
    initMobileNav();
    initLangToggle();
    initIcons();
    initScrollProgress();
    initSpotlight();
    initScrollSpy();
  });
})();
