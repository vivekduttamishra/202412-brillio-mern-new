
const _db=[
    {
        "id": "mahatma-gandhi",
        "name": "Mohan Das Karmchand Mahatma Gandhi",
        "photo": "https://pbs.twimg.com/profile_images/185517358/mahatmagandhi_400x400.jpg"
      },
      {
        "id": "vivek-dutta-mishra",
        "name": "Vivek Dutta Mishra",
        "photo": "https://m.media-amazon.com/images/S/amzn-author-media-prod/2fuqj5h433n56ucdr3s5j1k2j9._SY450_CR0%2C0%2C450%2C450_.jpg"
      },
      {
        "id": "ramdhari-singh-dinkar",
        "name": "Ramdhari Singh Dinkar",
        "photo": "https://www.prabhatkhabar.com/wp-content/uploads/2024/01/ramdhari-singh.jpg"
      }
]

class AuthorService{
    constructor(){
        this.authors=_db;
    }

    getAllAuthors(){
        return this.authors;
    }

    getAuthorById(id){
        return this.authors.find(author=>author.id===id);
    }
}

export default new AuthorService();