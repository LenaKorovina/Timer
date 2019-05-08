import React from 'react';

class Countdown extends React.Component {

    countdown = () => {
        this.props.updateStartTime(this.refs.time.value*60);
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className='div1 col-sm-4'>
                            <h1 className='countdown_txt'>COUNTDOWN</h1>
                        </div>
                        <div className='div2 col-sm-4'>
                            <form>
                                <div><input required ref="time" type="number" className="time" placeholder='min' autoFocus={true} min={0}/></div>
                            </form>
                        </div>

                        <div className='div3 col-sm-4'>
                            <button id="start_btn" onClick={this.countdown} className="btn btn-primary">Start</button>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}

export default Countdown;