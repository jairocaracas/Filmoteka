let list = document.querySelector('#pag');

function element(totalPages, page) {
  let liTag = '';
  let activeItem;

  let beforePages, afterPages, lowerLimit, higherLimit;
  let showedPages = 7; // Debe ser impar
  let middlePage = 4;

  if (page > 1) {
    liTag += `<li class="pagination__item pagination__item--arrow" id="back" onclick="element(20,${
      page - 1
    })"><i class="fas fa-arrow-left"></i></li>`;
  }

  if (page <= middlePage) {
    afterPages = showedPages - page;
    beforePages = showedPages - afterPages;
    (lowerLimit = 1), (higherLimit = showedPages);
  } else {
    beforePages = Number(page) - 3;
    afterPages = Number(page) + 3;
    lowerLimit = beforePages;
    higherLimit = afterPages;
  }

  for (let pageLength = lowerLimit; pageLength <= higherLimit; pageLength++) {
    if (pageLength == page) {
      activeItem = 'pagination__item--active';
    } else {
      activeItem = '';
    }
    liTag += `<li class="pagination__item pagination__item--number ${activeItem}"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="pagination__item pagination__item--arrow" id="next"><i class="fa-solid fa-arrow-right"></i></li>`;
  }
  list.innerHTML = liTag;
}

export { element };
