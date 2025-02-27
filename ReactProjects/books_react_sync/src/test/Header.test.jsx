import {render,screen} from '@testing-library/react'
import Header from '../components/Header'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'

describe('Header',()=>{

   

    it('should display props.title in header',()=>{
        const title='Test Title'
        
        render(<MemoryRouter>
                    <Header title={title}/>
                </MemoryRouter>)

        let element = screen.getByText(title);

        expect(element).toBeInTheDocument()
    })

    it('should display default title if props.title is not passed',()=>{
        render(<MemoryRouter>
                    <Header />
                </MemoryRouter>)

            
        let element = screen.getByText('The Great Website');
        expect(element).toBeInTheDocument()
    })

    it('should display title in h1 tag',()=>{
        let title='My Title';
        render(<MemoryRouter>
            <Header title={title}/>
        </MemoryRouter>)
      
        //freturns null if no item is found
        let element = screen.queryByRole('heading',{level:2,name:title});        
        expect(element).toBeNull();

    })

    it('should render Header with necessary Links',()=>{
        render(<MemoryRouter>
            <Header />
        </MemoryRouter>)

        let links = screen.getAllByRole('link');
        expect(links.length).toBe(3);

        let expectedLinks = ["Authors","Login","About"];
        let actualLinks = links.map( link=>link.textContent);

        expect(expectedLinks.length).toBe(actualLinks.length);

        expectedLinks.forEach( link=>
            expect(actualLinks).toContain(link)
        )



        // expect(links[0]).toHaveTextContent('Authors');
        // expect(links[1]).toHaveTextContent('Login');
        // expect(links[2]).toHaveTextContent('About');
      
    })
})