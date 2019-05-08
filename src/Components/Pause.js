import React from 'react';

class Pause extends React.Component {
    constructor(props) {
        super(props);
        this.state = {symbol : "| |"};
    }


    onPaused = () => {
        this.props.pause();
        if(this.state.symbol === "| |"){
            this.setState({symbol : ">"});
        }else {
            this.setState({symbol : "| |"});
        }
    };

    render() {
    return(
        <div className='pause_btn'>
        <button onClick={this.onPaused} className="btn btn-primary">{this.state.symbol}</button>
        </div>
    )
    }
}
export default Pause;
