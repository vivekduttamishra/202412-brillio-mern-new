//create a not found component that takes props and display title, status, and message

const ErrorView = ({status=0, title='Not Found', message='NotFound'})=>{

    return (
        <div>
            <h2>{title}</h2>
            <h3>{status ? `Error Code: ${status}`:''}</h3>
            <p>{message}</p>
        </div>
    )
}

export default ErrorView;