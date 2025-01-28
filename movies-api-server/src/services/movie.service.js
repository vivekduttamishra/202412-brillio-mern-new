class MovieService{
    constructor(movieRepository){
        this.movieRepository = movieRepository;
    }

    async getMovies(){
        const movies = await this.movieRepository.getAll();
        return movies;
    }

    async addMovie(movie){
        return await this.movieRepository.create(movie);
        
    }

    async getMovieById(id){
        return await this.movieRepository.getOne({id});
    }
}

MovieService._dependencies =[ 'movieRepository' ];

module.exports = MovieService;