import { Component } from "react";
import './Timer.css'

class Timer extends Component {

    state={
        ms:0,
        iid:null
    }

    start=()=>{
        let preceision = this.props.preceision||100;
        let iid=setInterval(()=>{
            this.setState({ms:this.state.ms+preceision})
        }, preceision)
        this.setState({iid})
    }

    stop=()=>{
        clearInterval(this.state.iid)
        this.setState({ms:this.state.ms});
        this.setState({iid:null})
    }

    reset=()=>{
        this.setState({ms:0})        
    }

    render(){
        let ms = this.state.ms;
        let minutes = Math.floor(ms/60000);
        ms = ms - minutes*60000;
        let seconds = Math.floor(ms/1000);
        ms = ms - seconds*1000;

        
        const numberSize=(value,zeroCount)=>{
            let v= value.toString();
            while(v.length<zeroCount){
                v="0"+v;
            }
            return v;
        }

        return <div className="timer">
            <label>{this.props.label}</label>
            <div className="time">
                <span className="min">{numberSize(minutes,2)}:</span>
                <span className="sec">{numberSize(seconds,2)}.</span>
                <span className="ms">{numberSize(ms,3)}</span>
            </div>

            {
            
                this.props.hideControls ||
            
                <div className="controls">
                    {!this.state.iid ? <button className='btn btn-sm btn-success' onClick={this.start}>Start</button> :null }
                    {this.state.iid ?  <button className='btn btn-sm btn-warning' onClick={this.stop}>Stop</button>:null }
                    {this.state.ms>0 && <button className='btn btn-sm btn-danger' onClick={this.reset}>Reset</button>}
                </div>
            }

        </div>
    }


}

export default Timer;