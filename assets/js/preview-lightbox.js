// Publication thumbnails: open the original figure, at its own aspect ratio
// and full resolution, in an overlay. Click anywhere or press Esc to close.
document.addEventListener("click", function (event) {
  const link = event.target.closest("a.preview-box");
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey) return;
  event.preventDefault();

  const overlay = document.createElement("div");
  overlay.className = "preview-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", "Enlarged figure");
  const img = document.createElement("img");
  img.src = link.getAttribute("href");
  img.alt = link.querySelector("img")?.alt || "";
  overlay.appendChild(img);

  const close = function () {
    overlay.classList.remove("open");
    document.removeEventListener("keydown", onKey);
    setTimeout(function () {
      overlay.remove();
    }, 200);
  };
  const onKey = function (e) {
    if (e.key === "Escape") close();
  };
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(overlay);
  requestAnimationFrame(function () {
    overlay.classList.add("open");
  });
});
