import React from 'react';


class Speed extends React.Component {

    // speedChanger = (multipler) => {
    //     console.log("OK");
    //     this.props.changeSpeed(multipler);
    // };

    render() {
        return (
            <div className='speed'>
                <button onClick={this.props.changeSpeed1} className="btn btn-primary">1X
                </button>
                <button onClick={this.props.changeSpeed15} className="btn btn-primary">1.5X
                </button>
                <button onClick={this.props.changeSpeed2} className="btn btn-primary">2X
                </button>
            </div>
        )
    }
}

export default Speed;