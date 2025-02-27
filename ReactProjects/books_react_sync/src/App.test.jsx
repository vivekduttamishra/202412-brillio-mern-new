import { screen, fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import authorService from './services/AuthorService'


import App from './App'
import { beforeEach, it } from 'vitest'

describe('App', () => {

    beforeEach(() => {

    })

    it('should render Author List by default', () => {
        render(<MemoryRouter><App /></MemoryRouter>)
        let pageTitle = screen.queryByRole('heading', { name: /Author List/ })
        expect(pageTitle).not.toBeNull()
        expect(pageTitle).toBeInTheDocument()
    })

    it('should display login screen on click of "login" link ', () => {
        render(<MemoryRouter><App /></MemoryRouter>)

        let loginLink = screen.getByRole('link', { name: /login/i })
        expect(loginLink).toBeInTheDocument()

        fireEvent.click(loginLink)
        let loginScreenTitle = screen.queryByRole('heading', { name: /login/i })
        expect(loginScreenTitle).toBeInTheDocument()
    })

    it('should goto login screen if we use /login url', () => {
        render(<MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>)

        let loginScreenTitle = screen.queryByRole('heading', { name: /login/i })
        expect(loginScreenTitle).toBeInTheDocument()
    })

    it('should return not found for invalid url',()=>{
        render(<MemoryRouter initialEntries={['/invalid']}>
            <App />
        </MemoryRouter>)

        let notFoundScreen = screen.queryByRole('heading',{name:/not found/i})
        expect(notFoundScreen).toBeInTheDocument()
    })

    it('should return valid author info using valid author id',()=>{

        let _author = authorService.getAllAuthors()[0];

        render(<MemoryRouter initialEntries={['/authors/'+_author.id]}>
            <App />
        </MemoryRouter>)

        let authorName = screen.queryByRole('heading',{name:_author.name})

    })

    it('should return not found for invalid author id',()=>{
        render(<MemoryRouter initialEntries={['/authors/invalid']}>
            <App />
        </MemoryRouter>)
        let notFoundScreen = screen.queryByRole('heading',{name:/not found/i})
        expect(notFoundScreen).toBeInTheDocument()
    })



})