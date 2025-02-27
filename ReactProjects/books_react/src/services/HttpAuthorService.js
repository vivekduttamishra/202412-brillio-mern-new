
import axios from 'axios';
import { delay } from '../utils/delay';

let baseUrl = 'http://localhost:4000/api/authors';

class HttpAuthorService {


    getAllAuthors = async () => {
        await delay(10);
        const response = await axios.get(baseUrl);
        return response.data;
    }

    getAuthorById = async (id) => {
        await delay(10);
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    }
}

export default new HttpAuthorService();