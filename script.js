// Scroll progress + navbar blur on scroll
const bar = document.getElementById("scrollBar");
const navbar = document.getElementById("navbar");

function onScroll() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (bar) bar.style.width = `${progress}%`;
  if (navbar) navbar.classList.toggle("is-scrolled", scrollTop > 8);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Fake form submission
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();

  if (note)
    note.textContent = `Thanks${
      name ? `, ${name}` : ""
    }! Message captured (prototype only).`;

  form.reset();
});
