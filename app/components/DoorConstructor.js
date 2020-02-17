import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import { createDoor } from '../redux/doors/actions';

class DoorConstructor extends Component {
  handleCreateDoor = () => {
      this.props.createDoor({
        width: 25,
        height: 2,
        xPos: 0,
        yPos: 0,
      })
  };

  render() {
    return (
      <div>
        <Button
          variant='contained' color='primary'
          onMouseDown={this.handleCreateDoor}
        >
          Create a new door
        </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
    createDoor: door => dispatch(createDoor(door)),
})

export default connect(null, mapDispatch)(DoorConstructor);
