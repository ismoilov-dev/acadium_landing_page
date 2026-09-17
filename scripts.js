/* =========================================================
   Acadium — landing page scripts (vanilla JS, kutubxonasiz)
   ========================================================= */
(function () {
  "use strict";

  // Scroll-reveal CSS faqat JS ishlaganda yoqiladi (JS o'chiq bo'lsa kontent ko'rinib turadi)
  document.documentElement.classList.add("js");

  const header = document.querySelector(".site-header");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("mainNav");

  /* ---------- 1. Header: scroll qilganda soya ---------- */
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 2. Mobil menyu (hamburger) ---------- */
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menyuni yopish" : "Menyuni ochish");
  }
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 860) setMenu(false); });

  /* ---------- 3. Smooth scroll (anchor linklar) ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;               // href="#" — placeholder linklar
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      setMenu(false);
    });
  });

  /* ---------- 4. Scroll animatsiyalar (Intersection Observer) ---------- */
  // Bir guruhdagi elementlarga kichik kechikish (stagger) beramiz
  document.querySelectorAll(".problem-grid, .features-grid, .timeline, .stats-grid").forEach((group) => {
    group.querySelectorAll(".reveal").forEach((el, i) => el.style.setProperty("--stagger", `${i * 80}ms`));
  });

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- 5. Statistika raqamlarini sanash ---------- */
  function countUp(el) {
    const target = Number(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);   // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll("[data-target]");
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach(countUp);
  }

  /* ---------- 6. Rollar bo'limi — tablar ---------- */
  const tabs = Array.from(document.querySelectorAll(".tab"));
  function activateTab(tab) {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activateTab(tab));
    // Klaviatura: chap/o'ng strelka bilan tablar orasida yurish
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
      activateTab(next);
      next.focus();
    });
  });

  /* ---------- 7. Forma submit (FormSubmit orqali emailga yuboriladi) ---------- */
  const form = document.getElementById("leadForm");
  const msg = document.getElementById("formMsg");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // Oddiy validatsiya
    let valid = true;
    form.querySelectorAll("input:not([type=hidden]):not([name=_honey])").forEach((input) => {
      const value = input.value.trim();
      const bad = input.name === "phone" ? value.replace(/\D/g, "").length < 9 : value.length < 2;
      input.classList.toggle("is-invalid", bad);
      if (bad) valid = false;
    });

    if (!valid) {
      msg.textContent = "Barcha maydonlarni to\u2018ldiring: telefon raqam kamida 9 ta raqamdan iborat bo\u2018lsin.";
      return;
    }

    const btnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Yuborilmoqda\u2026";
    msg.textContent = "";

    try {
      // FormSubmit AJAX endpoint — forma action\u2019idagi email manzilga yuboradi
      const endpoint = form.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok || String(result.success) !== "true") throw new Error(result.message || "Yuborishda xatolik");

      msg.textContent = `Rahmat, ${data.name}! So\u2018rovingiz qabul qilindi \u2014 tez orada bog\u2018lanamiz.`;
      form.reset();
    } catch (err) {
      console.error("Acadium \u2014 forma yuborilmadi:", err);
      msg.textContent = "Kechirasiz, so\u2018rov yuborilmadi. Iltimos, qayta urinib ko\u2018ring yoki Telegram orqali yozing.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = btnText;
    }
  });

  form.addEventListener("input", (e) => e.target.classList.remove("is-invalid"));

  /* ---------- 8. Footer yili ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();