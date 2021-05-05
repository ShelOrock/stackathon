import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { createWindow } from '../redux/windows/actions';

class WindowConstructor extends Component {
  handleCreateWindow = () => {
      this.props.createWindow({
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
          onMouseDown={this.handleCreateWindow}
        >
          Create a new window.
        </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
    createWindow: window => dispatch(createWindow(window)),
})

export default connect(null, mapDispatch)(WindowConstructor);
