import { useEffect } from "react";
import AuthorDetails from "../components/AuthorDetails";
import { useAuthorContext } from "../contexts/AuthorContext";
import TitledComponent from "../../utils/components/TitledComponent";

import AuthorList from "../components/AuthorList";

const AuthorManageScreen = () => {

    const { authors, selectedAuthor, getAllAuthors,getAuthorById,deleteAuthorById } = useAuthorContext();

    useEffect(() => {
        getAllAuthors();
    }, [])
    
    return (
        <TitledComponent expandable title="Author Management Dashboard">
            <div className="row author-manage-screen">
                <div className="col col-4 author-manage-list">
                    <AuthorList authors={authors} 
                                getAuthorById={getAuthorById} 
                                selectedAuthor={selectedAuthor} />
                </div>
                <div className="col col-8 author-manage-details">
                    <AuthorDetails 
                                selectedAuthor={selectedAuthor} 
                                deleteAuthorById={deleteAuthorById} />
                </div>
            </div>
        </TitledComponent>
    )
}

export default AuthorManageScreen;