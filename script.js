// ===== Countdown timer =====
// Counts down to midnight (resets daily) to reinforce "today only" urgency.
function startCountdown() {
  const hrsEl = document.getElementById("cd-hrs");
  const minEl = document.getElementById("cd-min");
  const secEl = document.getElementById("cd-sec");
  if (!hrsEl || !minEl || !secEl) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = Math.max(0, midnight - now);

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    hrsEl.textContent = pad(hrs);
    minEl.textContent = pad(mins);
    secEl.textContent = pad(secs);
  }

  tick();
  setInterval(tick, 1000);
}

// ===== Sticky bottom bar =====
// Shows after the visitor scrolls past the hero section.
function initStickyBar() {
  const bar = document.getElementById("stickyBar");
  const hero = document.querySelector(".hero");
  if (!bar || !hero) return;

  function onScroll() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      bar.classList.add("visible");
    } else {
      bar.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((faq) => {
        faq.classList.remove("active");
      });

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  startCountdown();
  initStickyBar();
  initFaqAccordion();
});
