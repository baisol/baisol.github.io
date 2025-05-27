window.addEventListener("load", () => {
    const gallery = document.querySelector(".gallery");
    const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
    const gap = parseInt(window.getComputedStyle(gallery).getPropertyValue('gap'));
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
      const img = item.querySelector("img");
      const itemHeight = img.getBoundingClientRect().height;
      const rowSpan = Math.ceil((itemHeight + gap) / (rowHeight + gap));
      item.style.gridRowEnd = `span ${rowSpan}`;
    });
  });