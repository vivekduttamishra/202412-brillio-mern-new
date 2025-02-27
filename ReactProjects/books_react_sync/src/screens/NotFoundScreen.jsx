import ErrorView from '../components/ErrorView';
import {useLocation} from 'react-router-dom'

const NotFoundScreen = ()=>{
    let location = useLocation();
    
    return (
        <ErrorView message={`URI: ${location.pathname}`}/>
    )
}

export default NotFoundScreen;