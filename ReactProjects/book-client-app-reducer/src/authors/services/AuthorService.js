import http from '../../utils/http';
import delay from '../../utils/delay';
const  baseUrl= 'https://localhost:4000/api/authors';

export default class AuthorService{
    async getAll(){
        await delay(2000);
        let authors = await http.get(baseUrl)
      //  console.log('AuthorService.getAll',authors.data);
        return authors.data;
    }

    async getById(id){
        await delay(2000); 
        let response = await http.get(`${baseUrl}/${id}`)
        let author = response.data;
        return author;
    }
}

