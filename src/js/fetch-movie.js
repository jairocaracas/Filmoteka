function fetchMovie(e) {
  e.preventDefault;
  if (e.target.nodeName === 'IMG') {
    console.log(e.target.getAttribute('id'));
  }
}

export { fetchMovie };
