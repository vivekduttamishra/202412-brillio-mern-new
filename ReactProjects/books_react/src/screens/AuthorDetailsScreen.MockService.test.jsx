
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AuthorDetailsScreen from './AuthorDetailsScreen'
import App from '../App';
import axios, { AxiosError } from 'axios';
import {vi} from 'vitest';

import {_db} from '../services/InMemoryAuthorService'; //dummy data for actual test
import { delay } from '../utils/delay';

describe('AuthorDetailsScreen Mocked Axios', function () {

    //let mockedAxios;
    beforeEach(()=>{
        vi.mock('axios');
    })


    it('should display a loading image initially ',  () => {

        axios.get.mockImplementation(async()=>{
            await delay(100);
            return {
                response: {
                    data: _db[0],                    
                }
            }
        })

        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}>
                <AuthorDetailsScreen />
            </MemoryRouter>)

        let loading = screen.getByAltText(/loading/);
        expect(loading).toBeInTheDocument();


      
    })

    it('loading display should eventually disapear', async () => {
        
        axios.get.mockImplementation(async()=>{
            await delay(100);
            return {
                response: {
                    data: _db[0],                    
                }
            }
        })

        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}><App /></MemoryRouter>)

        let loading = screen.getByAltText('loading');
        expect(loading).toBeInTheDocument();

        //it should eventually disappear on next render.
        await waitFor(() => {
            
            expect(loading).not.toBeInTheDocument();
        })
    })

    it('should display a valid book on success', async () => {

        axios.get.mockImplementation(async()=>{
            await delay(100);
            return {
                    data: _db[0],
            }
        })

        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}><AuthorDetailsScreen /></MemoryRouter>)

        //this will not be immediate but after certain wait.

        let authorName =  await screen.findByRole('heading', { level:2, name: _db[0].name});
        expect(authorName).toBeInTheDocument();
    })

    it('should display 404 error with for invalid author id', async() => {
        
        axios.get.mockImplementation(async()=>{
            await delay(100);
            throw new Error('Not Found');
        })
        
        render(<MemoryRouter initialEntries={['/authors/invalid-id']}><App /></MemoryRouter>)

        let notFound = await screen.findByRole('heading', { name: /Not Found/i });
       
        expect(notFound).toBeInTheDocument();
        

    })

    it('should display network error if fails to connect to server', async() => {
        axios.get.mockImplementation(async()=>{
            await delay(100);
            throw new Error('Network Error');
        })
        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}><App /></MemoryRouter>)
        let networkError = await screen.findByRole('heading',{name:/Network Error/i})
        expect(networkError).toBeInTheDocument();
    })



})