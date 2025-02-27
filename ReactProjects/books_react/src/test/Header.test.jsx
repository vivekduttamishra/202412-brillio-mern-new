import {render,screen} from '@testing-library/react'
import Header from '../components/Header'

describe('Header',()=>{

    it('should display props.title in header',()=>{
        const title='Test Title'
        render(<Header title={title}/>)
        let element = screen.getByText(title);

        expect(element).toBeInTheDocument()
    })

    it('should display default title if props.title is not passed',()=>{
        render(<Header />)
        let element = screen.getByText('The Great Website');
        expect(element).toBeInTheDocument()
    })

    it('should display title in h1 tag',()=>{
        let title='My Title';
        render(<Header title={title}/>)
      
        //freturns null if no item is found
        let element = screen.queryByRole('heading',{level:2,name:title});        
        expect(element).toBeNull();

    })
})