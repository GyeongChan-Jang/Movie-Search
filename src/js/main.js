import '../scss/main.scss'

// Getting Movies from Api
async function getMovies(title) {
  const URL = `https://www.omdbapi.com/?apikey=7035c60c&s=${title}`
  const apikey = '7035c60c'

  let res = await fetch(`${URL}`)
  res = await res.json()
  console.log(res)
}
getMovies('frozen')
