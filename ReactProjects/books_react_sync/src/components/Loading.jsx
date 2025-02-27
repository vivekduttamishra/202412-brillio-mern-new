//create a not found component that takes props and display title, status, and message

const Loading = ({status=0, title='Not Found', message='NotFound'})=>{

    return (
        <div>
           <img src='/loading.png' alt="loading"/>           
        </div>
    )
}

export default Loading;