const Reset = (props)=>{
    
        return (
            <button onClick={props.onReset} className="btn btn-danger">
                {props.children}
            </button>
        )
}

export default Reset;