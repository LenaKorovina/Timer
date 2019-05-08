import React from 'react';

class Countdown extends React.Component {

    countdown = () => {
        this.props.updateStartTime(this.refs.time.value * 60);
    };

    render() {
        return (
            <div className="cont">
                <div>
                    <h1 className='countdown_txt'>COUNTDOWN : </h1>
                    <input required ref="time" type="number" className="time" placeholder='min' autoFocus={true}
                           min={0}/>
                </div>

                <button onClick={this.countdown} className="btn btn-primary">Start</button>
            </div>

        )
    }

}

export default Countdown;