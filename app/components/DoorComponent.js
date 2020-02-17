import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';

import { updateDoor } from '../redux/doors/actions';

class DoorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: this.props.door.idx,
      width: this.props.door.width,
      height: this.props.door.height,
      xPos: this.props.door.xPos,
      yPos: this.props.door.yPos,
    };
  }

  handleDrag = (e, delta) => {
    this.setState({
      xPos: Math.round(delta.x / 25) * 25,
      yPos: Math.round(delta.y / 25) * 25,
    });
    this.props.updateDoor(this.state.idx, {
      xPos: this.state.xPos,
      yPos: this.state.yPos,
    });
  };

  handleOnDoubleClick = () => {
    this.setState({
        width: this.state.height,
        height: this.state.width
    })
    this.props.updateDoor(this.state.idx, {
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
        style={{ border: '3px black solid' }}
      >
       
      </Rnd>
    );
  }
}

const mapDispatch = dispatch => ({
  updateDoor: (idx, door) => dispatch(updateDoor(idx, door)),
});

export default connect(null, mapDispatch)(DoorComponent);
