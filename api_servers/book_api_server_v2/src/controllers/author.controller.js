const {injector} = require('ca-webutils');

const createAuthorController =()=>{

    const authorService = injector.getService("authorService");
    
    
    const getAllAuthors=async()=>{
      let authors = await authorService.getAllAuthors();
      
      return authors.map( author=> ({id:author.id, name:author.name, photo:author.photo}));
    }
    
    const getAuthorById=async ({id}) =>await authorService.getAuthorById(id);    
    
    const createAuthor=async ({body}) =>{
          return  await authorService.addAuthor(body);       
    }

    const deleteAuthorById = async({id}) =>{
      try{
          await authorService.deleteAuthor(id);
          
      }catch(err){
          console.error("Error deleting author",err);
          
      }
    }  
    
    return {
        getAllAuthors,
        getAuthorById,
        createAuthor,
        deleteAuthorById,
     };
}

module.exports=createAuthorController;

