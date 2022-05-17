import '../scss/main.scss'

// DOM 요소
const movieInputEl = document.querySelector('#movie-search-box')
const searchListEl = document.querySelector('.search-list')
const resultGridEl = document.querySelector('.result-grid')
const detailContainerEl = document.querySelector('.details-container')

// 영화 정보를 요청해서 받아옴 from API
async function getMovies(searchTerm) {
  const URL = `https://www.omdbapi.com/?apikey=7035c60c&s=${searchTerm}&page=1`
  const res = await fetch(`${URL}`)
  const data = await res.json()
  if (data.Response === 'True') displayMovieList(data.Search)
}
// findMovies함수 -> input에 값 입력시 search-list를 visible
function findMovies() {
  let searchTerm = movieInputEl.value.trim()
  if (searchTerm.length > 0) {
    searchListEl.classList.remove('hide-search-list')
    getMovies(searchTerm) // data.Search가 반환됨
  } else {
    searchListEl.classList.add('hide-search-list')
  }
}

// input에 findMovies 함수 등록 /  click 할 때도 검색 리스트 출력
movieInputEl.onkeyup = () => {
  findMovies()
}

movieInputEl.onclick = () => {
  searchListEl.classList.add('hide-search-list')
}

// 받아온 데이터를 html요소를 만들어 화면에 출력
function displayMovieList(movies) {
  searchListEl.innerHTML = '' // 단어가 완성되면 해당 단어로 업데이트 되게 하기 위해
  // movies에는 data.Search 데이터가 들어있음
  for (let i = 0; i < movies.length; i++) {
    let movieListItem = document.createElement('div')
    // div 요소의 id의 omdb-id 값 넣기 for 그 영화의 다른 정보에 접근
    movieListItem.dataset.id = movies[i].imdbID
    movieListItem.classList.add('search-list-item')
    let moviePoster = movies[i].Poster
    if (movies[i].Poster === 'N/A')
      moviePoster = './images/NotFound.png'
    movieListItem.innerHTML = `
    <div class="search-item-thumbnail">
      <img src="${moviePoster}" alt="movie-poster">
    </div>
    <div class="search-item-info">
      <h3>${movies[i].Title}</h3>
      <p>${movies[i].Year}</p>
    </div>`
    searchListEl.appendChild(movieListItem)
  }
  loadMovieDetails()
}

function loadMovieDetails() {
  const searchListMoives = searchListEl.querySelectorAll(
    '.search-list-item',
  )
  searchListMoives.forEach((movie) => {
    movie.addEventListener('click', async () => {
      // console.log(movie.dataset.id)
      searchListEl.classList.add('hide-search-list')
      movieInputEl.value = ''
      const res = await fetch(
        `https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=7035c60c`,
      )
      const movieDetails = await res.json()
      displayMovieDetails(movieDetails)
      console.log(movieDetails)
    })
  })
}
function displayMovieDetails(details) {
  resultGridEl.innerHTML = `
  <div class="movie-poster">
            <img src="${
              details.Poster !== 'N/A'
                ? requestDiffSizeUmage(details.Poster)
                : './images/NotFound.png'
            }">
          </div>
          <div class="movie-info">
            <h3 class="movie-title">
              ${details.Title}
            </h3>
            <ul class="movie-misc-info">
            <li class="rated"><span>Ratings:</span> ${
              details.Ratings[0].Value
            }</li>
            <li class="released"><span>Released:</span> ${
              details.Released
            }</li>
            </ul>
            <div class="genre">
              <p>Genre</p>${details.Genre}
            </div>
            <div class="writer">
              <p>Writer</p>
              ${details.Writer}
            </div>
            <div class="actors">
              <p>Actors</p> ${details.Actors}
            </div>
            <div class="plot">
              <p>Plot</p>${details.Plot}
            </div>
            <div class="language">
              <span>Language</span>
              ${details.Language}
            </div>
            <p class="awards">
              <i class="fas fa-award"></i>${details.Awards}
            </p>
          </div>
  `
}

// 더 높은 해상도의 이미지를 가져오는 함수
function requestDiffSizeUmage(url, size = 700) {
  return url.replace('SX300', 'SX${size}')
}

// // 배경을 클릭했을 때 검색 리스트 창 닫기
// window.addEventListener('click', (e) => {
//   if (e.target.classList !== 'from-control') {
//     searchListEl.classList.add('hide-search-list')
//   }
// })
