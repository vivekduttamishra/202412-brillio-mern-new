import {render,screen, fireEvent} from '@testing-library/react';
import AuthorListScreen from './AuthorListScreen';
import authorService from '../services/AuthorService';
import { it } from 'vitest';

describe.skip('AuthorListScreen',()=>{

    let _authors;
    let container;
    
    beforeEach(()=>{
        _authors=authorService.getAllAuthors();
        let rendered = render(<AuthorListScreen/>)
        container=rendered.container;
       
    })

    it('should include Header Author List',()=>{
        //render(<AuthorListScreen/>);
        const authorListElement = screen.queryByRole('heading',{name:/Author list/i});
        expect(authorListElement).toBeInTheDocument();
    });    
    
    it('should display all authors',()=>{
        // let _authors = authorService.getAllAuthors();
        // render(<AuthorListScreen/>);

       let names = screen.queryAllByTestId('author-card');

        expect(names).toHaveLength(_authors.length);
    })

    it('should display images of all authors', () => {
        //find all 'img' tag in the document
        let images = screen.queryAllByRole('img');
        
        //now we have an array of img element
        //we need to extract src from each element
       let urls = images.map( image=>image.src);
      

       //find out author.photos in my actual data
       let photoUrls = _authors.map(author=>author.photo);

       //see if the two collection matches
       expect(urls).toEqual(photoUrls);
    })

    it('should select author on details click', function(){
        let buttons = screen.queryAllByRole('button',{name:/details/i});

        //now we want to simulate a click on this button
        fireEvent.click(buttons[0]);        
        //now we can test if we get selected Author Message
        let expectedMessage= `Selected Author: ${_authors[0].name}`;

        expect(screen.queryByText(expectedMessage)).toBeInTheDocument();
    });

    it('should be able to locate items with given class',()=>{

        let authorCards = container.querySelectorAll('.author-card');
        expect(authorCards).toHaveLength(_authors.length);
    })
})