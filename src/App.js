import React, {Component} from 'react';
import './App.css';
import Countdown from './Components/Countdown';
import Pause from './Components/Pause';
import Speed from './Components/Speed';
import Comments from './Components/Comments';
import Timer from './Components/Timer'

class App extends Component {
    timerID;

    constructor(props) {
        super(props);
        this.state = {startTime: 0, currentTime: 0, isPaused: false, text: "", timerClass: "timer"};
    };

    changeSpeed1 = () => {
        this.changeTimerSpeed(1);
    };
    changeSpeed15 = () => {
        this.changeTimerSpeed(1.5);
    };
    changeSpeed2 = () => {
        this.changeTimerSpeed(2);
    };


    updateStartTime = (value) => {
        this.setState({startTime: value, currentTime: value});
        if (this.timerID===undefined){
            this.timerID = setInterval(this.tick, 1000);
        }
    };

    changeTimerSpeed = (speed) => {
        clearInterval(this.timerID);
        this.timerID = setInterval(this.tick, 1000 / speed);
    };

    tick = () => {
        if (this.state.currentTime > 0 && !this.state.isPaused) {
            this.setState({currentTime: this.state.currentTime - 1});
        }
        if (this.state.currentTime < this.state.startTime / 2) {
            this.setState({text: "More than halfway there!"});
            if (this.state.currentTime === 0) {
                this.setState({text: "Time’s up!"});
            }
            if (this.state.currentTime < 20) {
                this.setState({timerClass: "timerRed"});
            }
            if (this.state.currentTime < 10 && this.state.currentTime!==0) {
                this.setState({timerClass: "timerRedBlink"});
            }

        }

    };
    pause = () => {
        this.setState({isPaused: !this.state.isPaused})

    };


    render() {
        return (
            <div>
                <Countdown updateStartTime={this.updateStartTime}/>
                <Comments text={this.state.text}/>
                <Timer time={this.state.currentTime} class={this.state.timerClass}/>
                <Pause pause={this.pause}/>
                <Speed changeSpeed1={this.changeSpeed1} changeSpeed15={this.changeSpeed15}
                       changeSpeed2={this.changeSpeed2}/>
            </div>
        );
    }
}

export default App;
