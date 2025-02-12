import Conditional from "../../utils/components/Conditional";
import withBorder from "../../utils/hoc/with-broder";
import { useAuthorContext } from "../contexts/AuthorContext";


const AuthorDetails = ({selectedAuthor,deleteAuthorById}) => {

    //let {selectedAuthor,deleteAuthorById} = useAuthorContext();

    //if(selectedAuthor===null)
    //    return <h3>No Authors Selected</h3>;

    console.log('selectedAuthor',selectedAuthor);

    return (
    <div className="author-details-screen">
        <Conditional condition={!selectedAuthor}>
            <h3>No Author Selected</h3>
        </Conditional>

        <Conditional condition={selectedAuthor!==null}>
            <h1>{selectedAuthor?.name}</h1>
            <div className="row">
                <div className="col col-4">
                    <img src={selectedAuthor?.photo} />
                    <button onClick={()=>deleteAuthorById(selectedAuthor?.id)} className='btn btn-danger'>Remove Author</button>
                </div>
                <div className="col col-8">
                    <h2>Biography</h2>
                    <p>{selectedAuthor?.biography}</p>
                </div>
            </div>
        </Conditional>
    </div>
    )
}

export default withBorder( AuthorDetails,"Author Details");