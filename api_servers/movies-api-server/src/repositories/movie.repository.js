

class MovieRepository{
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.find();
    }
    
    async getMovieById(id) {
        return await this.model.findOne({id});
    }
    
    async createMovie(movieData) {
        return await this.model.create(movieData);
    }
}


MovieRepository._dependencies =["movie"];

module.exports = MovieRepository;