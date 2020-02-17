import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import { createElement } from '../redux/rooms/actions';

class RoomConstructor extends Component {

  handleCreateRoom = () => {
    this.props.createElement({
      width: 100,
      height: 100,  
      zAxis: Math.ceil(Math.random() * 3),
      xPos: 0,
      yPos: 0,  
    });
  };

  render() {
    return (
      <div>
        <Button
          variant='contained' color='primary'
          onMouseDown={this.handleCreateRoom}
        >
          Create a new room
        </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  createElement: element => dispatch(createElement(element)),
});

export default connect(null, mapDispatch)(RoomConstructor);
