const key = '56fbaac7fd77013cc072d285a17ec005'

const requests = {
    //MOVIES
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&langukeyage=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrailers: `https://api.themoviedb.org/3/movie/893370/videos?api_key=${key}&language=en-US`,

    //TVShows
    requestPopularShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrendingShows: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`,
    requestHorrorShows: `https://api.themoviedb.org/3/search/tv?api_key=${key}&langukeyage=en-US&query=horror&page=1&include_adult=false`,
    requestUpcomingShows: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
    requestAiringToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,


}

export default requests