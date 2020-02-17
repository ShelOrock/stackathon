import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';

import { updateWindow } from '../redux/windows/actions';

class WindowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: this.props.window.idx,
      width: this.props.window.width,
      height: this.props.window.height,
      xPos: this.props.window.xPos,
      yPos: this.props.window.yPos,
    };
  }

  handleDrag = (e, delta) => {
    this.setState({
      xPos: Math.round(delta.x / 25) * 25,
      yPos: Math.round(delta.y / 25) * 25,
    });
    this.props.updateWindow(this.state.idx, {
      xPos: this.state.xPos,
      yPos: this.state.yPos,
    });
  };

  handleOnDoubleClick = () => {
    this.setState({
        width: this.state.height,
        height: this.state.width
    })
    this.props.updateWindow(this.state.idx, {
        width: this.state.height,
        height: this.state.width
    })
  };

  render() {
    const { width, height, xPos, yPos } = this.state;
    return (
      <Rnd
        position={{ x: xPos, y: yPos }}
        size={{ width, height }}
        onDragStop={this.handleDrag}
        dragGrid={[25, 25]}
        enableResizing={false}
        onDoubleClick={this.handleOnDoubleClick}
        style={{ border: '2px grey solid' }}
      >
      </Rnd>
    );
  }
}

const mapDispatch = dispatch => ({
  updateWindow: (idx, window) => dispatch(updateWindow(idx, window)),
});

export default connect(null, mapDispatch)(WindowComponent);
