import React from 'react';


class Comments extends React.Component {
    render() {
        return(
            <h3 className='comments'>{this.props.text}</h3>
        )
    }
}
export default Comments;