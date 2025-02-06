import { useState,useEffect } from "react";
import './Timer.css'

const Timer = ({ preceision = 100, label, running, hideControls }) => {
    
    const [_running, setRunning] = useState(running);
    
    const [ticks, updateTicks] = useState(0);

    useEffect(() => {
        //console.log('running changed for',label, running)
        setRunning(running); //update running state
    }, [running]); //when running props changes.
  
  // console.log(label, running, ticks);

    useEffect(() => {

        //console.log('_runing changed for',label, _running)

        if(!_running)
            return ;

        //componentDidMount
        let _iid = setInterval(()=>{
                //update tick with given value
                //updateTicks( ticks+preceision);
               
            updateTicks( ticks=> ticks+preceision );
                

        }, preceision)


        //componentWillUnmount. The function we return
        return () => {
            clearInterval(_iid);
        }

    }, [_running]); //componentDidMount +componentDidUpdate on change of _running

    const start = () => {
        setRunning(true);
    }

    const stop = () => {
        setRunning(false);
    }

    const reset = () => {
        updateTicks(0)
    }

    const numberSize = (value, zeroCount) => {
        let v = value.toString();
        while (v.length < zeroCount) {
            v = "0" + v;
        }
        return v;
    }

    let _ms = ticks;
    let minutes = Math.floor(_ms / 60000);
    _ms = _ms - minutes * 60000;
    let seconds = Math.floor(_ms / 1000);
    _ms = _ms - seconds * 1000;
    // console.log(this.props.label,'this.props.hideControls',this.props.hideControls)



    return <div className="timer">
        <label>{label}</label>
        <div className="time">
            <span className="min">{numberSize(minutes, 2)}:</span>
            <span className="sec">{numberSize(seconds, 2)}.</span>
            <span className="ms">{numberSize(_ms, 3)}</span>
        </div>

        {

            hideControls ||

            <div className="controls">
                {_running ? <button className='btn btn-sm btn-success' onClick={start}>Start</button> : null}
                {_running ? <button className='btn btn-sm btn-warning' onClick={stop}>Stop</button> : null}
                {ticks > 0 && <button className='btn btn-sm btn-danger' onClick={reset}>Reset</button>}
            </div>
        }

    </div>
}



export default Timer;