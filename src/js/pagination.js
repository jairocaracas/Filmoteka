let list = document.querySelector('#pag');

function element(totalPages, page) {
  let liTag = '';
  let activeItem;

  let beforePages, afterPages, lowerLimit, higherLimit;
  let showedPages = 9; // Debe ser impar
  let middlePage = 5;

  //condicionales para los limites
  if (totalPages <= showedPages) {
    (lowerLimit = 1), (higherLimit = totalPages);
  } else {
    if (page <= middlePage) {
      (lowerLimit = 1), (higherLimit = showedPages);
      if (totalPages > showedPages) {
        higherLimit = showedPages - 2;
      }
    } else if (page >= totalPages - middlePage + 1) {
      (lowerLimit = totalPages - showedPages + 3), (higherLimit = totalPages);
      console.log('acas');
    } else {
      // beforePages = Number(page) - 3;
      // afterPages = Number(page) + 3;
      lowerLimit = Number(page) - 2;
      higherLimit = Number(page) + 2;
    }
  }

  //Condicionales para  habilitar o deshabilitar los botones de flecha
  if (page > 1) {
    liTag += `<li class="pagination__item pagination__item--arrow" id="back"></li>`;
  }

  //condicionales para mostrar la primera pagina y los puntos
  if (page > middlePage && totalPages > showedPages) {
    liTag += `<li class="pagination__item pagination__item--number"><span>1</span></li>
    <li class="pagination__item pagination__item--dots"><span>...</span></li>`;
  }

  for (let pageLength = lowerLimit; pageLength <= higherLimit; pageLength++) {
    if (pageLength == page) {
      activeItem = 'pagination__item--active';
    } else {
      activeItem = '';
    }
    liTag += `<li class="pagination__item pagination__item--number ${activeItem}"><span>${pageLength}</span></li>`;
  }

  //condicionales para mostrar la ultima pagina y los puntos
  if (page < totalPages - middlePage + 1 && totalPages > showedPages) {
    liTag += `<li class="pagination__item pagination__item--dots"><span>...</span></li>
    <li class="pagination__item pagination__item--number"><span>${totalPages}</span></li>`;
  }

  //Condicionales para  habilitar o deshabilitar los botones de flecha

  if (page < totalPages) {
    liTag += `<li class="pagination__item pagination__item--arrow" id="next"></li>`;
  }

  list.innerHTML = liTag;
}

export { element };
