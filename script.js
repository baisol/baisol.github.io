// script.js

document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.gallery');
  
    imagesLoaded(grid, function () {
      new Masonry(grid, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-sizer',
        percentPosition: true,
        gutter: 10
      });
    });
  });

  