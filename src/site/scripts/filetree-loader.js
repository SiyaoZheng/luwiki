(function () {
  const mount = document.getElementById("filetree-mount");
  if (!mount) return;

  const normalizePath = (value) => {
    try {
      const path = new URL(value, window.location.origin).pathname;
      return decodeURI(path).replace(/\/+$/, "") || "/";
    } catch {
      return value;
    }
  };

  const initializeWidgets = (root) => {
    if (window.Alpine && !root._x_dataStack) window.Alpine.initTree(root);
    if (window.lucide) {
      window.lucide.createIcons({ attrs: { class: ["svg-icon"] } });
    }
  };

  fetch(mount.dataset.filetreeUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`filetree HTTP ${response.status}`);
      return response.text();
    })
    .then((html) => {
      mount.innerHTML = html;
      const root = mount.querySelector("[data-filetree-root]");
      if (!root) throw new Error("filetree root missing");

      const currentPath = normalizePath(window.location.pathname);
      root.querySelectorAll("a.filename").forEach((link) => {
        if (normalizePath(link.href) === currentPath) {
          link.closest(".notelink")?.classList.add("active-note");
        }
      });

      if (window.Alpine) {
        initializeWidgets(root);
      } else {
        document.addEventListener(
          "alpine:initialized",
          () => initializeWidgets(root),
          { once: true }
        );
      }

      if (!window.lucide) {
        window.addEventListener("load", () => initializeWidgets(root), {
          once: true,
        });
      }
    })
    .catch((error) => {
      console.error("Unable to load filetree", error);
      mount.remove();
    });
})();
