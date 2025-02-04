import { Component } from "react";

class Clock extends Component {

    state={
        date:new Date(),
        tick:0
    }

    componentDidMount=()=>{
        //called only once
        console.log('component mounted', new Date().toLocaleTimeString());
        this.iid=setInterval(()=>{
            console.log('timer updated');
            this.setState({
                    date:new Date(), 
                    tick: this.state.tick+1 
            })
        },1000);
    }

    componentDidUpdate=(prevProps, prevState)=>{
        //called every time component state changes
       // console.log('component updated', new Date().toLocaleTimeString())
    }

    componentWillUnmount=()=>{
        //called only once
        console.log('component unmounted',new Date().toLocaleTimeString())
        if(this.iid){

            clearInterval(this.iid);
            this.iid=null;
        }
    }


    render = () => {


        let { prefix = "", format = "24" } = this.props;
        let date = this.state.date;
        let hrs = date.getHours();
        let suffix = ""
        if (format === "12") {
            if (hrs > 12) {
                hrs -= 12;
            }
            suffix = hrs === date.getHours() ? "AM" : "PM"
        }

        return (
            <div className="clock">
                {prefix}
                <span className="hour">
                    {hrs}
                    :
                </span>
                <span className="minute">
                    {date.getMinutes()}
                    :
                </span>
                <span className="second">
                    {date.getSeconds()}
                </span>
                <span className="suffix">
                    {suffix}
                </span>

                {/* <span className="tick">
                    | {this.state.tick}
                </span> */}
            </div>
        )
    }
}

export default Clock;