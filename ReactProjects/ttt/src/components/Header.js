import NavLink from "./NavLink";
import Title from "./Title";

const headerStyle = {
    background: 'black',
    color: 'white',
    marginBottom: '10px',
    padding: 10
}

let Header = function (props) {
   
    let style={
        ...headerStyle,
        backgroundColor: props.background,
        color: props.color,        
    }
  
    return (
        <div  style={style}>
            <Title value={props.title}  />
            <NavLink/>         
        </div>
    );
}

export default Header;
