import http from '../../utils/http';

const  baseUrl= 'https://localhost:4000/api/authors';

export default class AuthorService{
    async getAll(){
        let authors = await http.get(baseUrl)
        console.log('AuthorService.getAll',authors.data);
        return authors.data;
    }
}

