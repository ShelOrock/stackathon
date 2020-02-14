import React, { Component } from 'react';
import { Rnd } from 'react-rnd';

class DraggableComponent extends Component {
  constructor() {
    super();
    this.state = {
      width: 100,
      height: 100,
      xPos: 0,
      yPos: 0,
    };
  }

  handleDrag = (e, delta) => {
    console.log(delta);
    if (e.shiftKey) {
      this.setState({
        xPos: delta.x,
        yPos: this.state.yPos,
      });
    } else {
      this.setState({
        xPos: delta.x,
        yPos: delta.y,
      });
    }
  }

  handleResize = (e, direction, ref, delta, position) => {
    this.setState({
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    });
  };

  render() {
    return (
      <div>
        <Rnd
          width={this.state.width}
          height={this.state.height}
          position={{
            x: this.state.xPos,
            y: this.state.yPos,
          }}
          onDrag={this.handleDrag}
          onResize={this.handleResize}
        >
          <div
            style={{
              width: `${this.state.width}`,
              height: `${this.state.height}`,
              border: '3px solid black',
            }}
          >
            Move me. I'm draggable and Resizable.
          </div>
        </Rnd>
      </div>
    );
  }
}

export default DraggableComponent;
