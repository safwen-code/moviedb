//get the most rated movie
export const fetchMovies = async () => {
  const cleapi = 'ca7772cab3600a541ec81c6af24f6645';

  // Make API request or fetch data from your desired source
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=' + cleapi,
  );
  const data = await response.json();

  // return data
  return data.results;
};

// recuperer les image
export function getimage(name) {
  return 'https://image.tmdb.org/t/p/w500/' + name;
}

//get film by id
export function getFilmDetail(id) {
  const cleapi = 'ca7772cab3600a541ec81c6af24f6645';
  return fetch(
    'https://api.themoviedb.org/3/movie/' +
      id +
      '?api_key=' +
      cleapi +
      '&language=fr',
  )
    .then(response => response.json())
    .catch(error => console.error(error));
}
