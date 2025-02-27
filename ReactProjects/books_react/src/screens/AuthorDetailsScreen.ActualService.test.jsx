
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AuthorDetailsScreen from './AuthorDetailsScreen'
import App from '../App';

describe.skip('AuthorDetailsScreen Against Actual Service', function () {


    it('should display a loading image initially ', () => {
        render(<MemoryRouter initialEntries={['/authors/vivek-dutta-mishra']}><AuthorDetailsScreen /></MemoryRouter>)

        let loading = screen.getByAltText('loading');
        expect(loading).toBeInTheDocument();
    })

    it('loading display should eventually disapear', async () => {
        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}><App /></MemoryRouter>)

        let loading = screen.getByAltText('loading');
        expect(loading).toBeInTheDocument();

        //it should eventually disappear on next render.
        await waitFor(() => {
            
            expect(loading).not.toBeInTheDocument();
        })
    })

    it('should display a valid book on success', async () => {
        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}><App /></MemoryRouter>)

        //this will not be immediate but after certain wait.

        let authorName =  await screen.findByRole('heading', { name: /Mahatma Gandhi/ });
        expect(authorName).toBeInTheDocument();
    })

    it('should display 404 error with for invalid author id', async() => {
        render(<MemoryRouter initialEntries={['/authors/invalid-id']}><App /></MemoryRouter>)


        let notFound = await screen.findByRole('heading', { name: /Not Found/i });
        let invalidId = await screen.findByText(/invalid-id/);
        expect(notFound).toBeInTheDocument();
        expect(invalidId).toBeInTheDocument();

    })

    it('should display network error if fails to connect to server', async() => {
        render(<MemoryRouter initialEntries={['/authors/mahatma-gandhi']}><App /></MemoryRouter>)
        let networkError = await screen.findByRole('heading',{name:/Network Error/i})
        expect(networkError).toBeInTheDocument();
    })



})