import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';

import { updateElement } from '../redux/rooms/actions'

class RoomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: this.props.element.idx,
      width: this.props.element.width,
      height: this.props.element.height,
      zAxis: this.props.element.zAxis,
      xPos: this.props.element.xPos,
      yPos: this.props.element.yPos,
      label: ''
    }
  }

  handleDrag = (e, delta) => {
    this.setState({ 
      xPos: Math.round(delta.x/25)*25,
      yPos: Math.round(delta.y/25)*25
    })
    this.props.updateElement(
      this.state.idx,
      {
      xPos: this.state.xPos,
      yPos: this.state.yPos
    })
  }

  handleResize = (e, direction, ref, delta, position) => {
    this.setState({
      width: Math.round(parseInt(ref.style.width)/25)*25,
      height: Math.round(parseInt(ref.style.height)/25)*25,
      xPos: Math.round(position.x/25)*25,
      yPos: Math.round(position.y/25)*25,
    })
    this.props.updateElement(
      this.state.idx,
      {
        width: parseInt(this.state.width),
        height: parseInt(this.state.height),
        xPos: this.state.xPos,
        yPos: this.state.yPos
      }
    )
  }

  handleOnChange = ({ target: {name, value}}) => {
    console.log('hi')
    this.setState({ [name]: value})
  }

  render() {
    console.log(this.state)
    const { width, height, xPos, yPos } = this.state;
    return (
      <div>
        
        <Rnd
          position={{ x: xPos, y: yPos }}
          size={{ width, height }}
          onDragStop={ this.handleDrag }
          dragGrid={ [ 25, 25 ]}
          onResizeStop={ this.handleResize }
          resizeGrid={ [ 25, 25 ]}
          style={{ border: '4px black solid', borderSizing: 'border-box', display: 'flex', alignItem: 'center', justifyContent: 'center'}}
        >
          <input
            type='text'
            name='label'
            placeholder='Label Me'
            value={ this.state.label }
            onChange={this.handleOnChange}
            style={{border:'none', width: '100px', height:'20px', textAlign:'center'}}
          />
        </Rnd>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  updateElement: (idx, element) => dispatch(updateElement(idx, element))
})

export default connect(null, mapDispatch)(RoomComponent);
