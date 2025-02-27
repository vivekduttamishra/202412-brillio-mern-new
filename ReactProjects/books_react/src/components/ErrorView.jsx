//create a not found component that takes props and display title, status, and message

const ErrorView = ({status=0,error, title, message})=>{

    title=title|| error?.message ;
    message=message || error?.message;
    status= status || error?.response?.status || ''

    if(error){
        if(error.response){
            title=error.response.statusText;
            if(error.response.data)
                message=JSON.stringify(error.response.data)
        }else{
            title=error.message;
            message=error.message;
        }
    }



    return (
        <div>
            <h2>{title}</h2>
            <h3>{status }</h3>
            <p>{message}</p>
        </div>
    )
}

export default ErrorView;