import React from 'react';

class Timer extends React.Component {
    render() {
        const value = this.props.time;
        let min = Math.floor(value / 60);
        let sec = value % 60;
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        return (
            <div align="center">
                <h1 className={this.props.class}>{min} : {sec}</h1>
            </div>
        )
    }
}

export default Timer;