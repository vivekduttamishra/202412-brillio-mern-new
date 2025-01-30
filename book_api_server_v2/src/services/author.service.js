class AuthorService{
    constructor(authorRepository){
        this.authorRepository = authorRepository;

        this.getAllAuthors = this.getAllAuthors.bind(this);
        this.getAuthorById = this.getAuthorById.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);
        this.deleteAuthor = this.deleteAuthor.bind(this);

    }

    async getAllAuthors(){
        return await this.authorRepository.getAll();
    }

    async getAuthorById(id){
        return await this.authorRepository.getById(id);
    }

    async addAuthor(author){
        return await this.authorRepository.create(author);
    }

    async updateAuthor(id, updatedAuthor){
        return await this.authorRepository.update(id, ()=> updatedAuthor);
    }

    async deleteAuthor(id){
        return await this.authorRepository.model.findOneAndDelete({id});
    }
    
}

AuthorService._dependencies = ["authorRepository"]


module.exports = AuthorService;