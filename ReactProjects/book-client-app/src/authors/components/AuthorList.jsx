import { useAuthorContext } from "../contexts/AuthorContext";


const AuthorList = () => {

    const {authors, selectedAuthor, getAuthorById} = useAuthorContext();

    if(authors.length===0)
        return null;

    const getCss=id=>{
        let css="list-group-item list-group-item-action ";
        if(id===selectedAuthor?.id)
            css+=" active";

        return css;
    }

    return (
        <div className="list-group">

            {
                authors.map( author=>(
                <button onClick={()=>getAuthorById(author.id)} key={author.id} className={getCss(author.id)} aria-current="true">
                    {author.name}
                </button>))
            }
            
           
        </div>
    )
}

export default AuthorList;