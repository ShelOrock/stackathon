import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoomComponent from './RoomComponent';
import DoorComponent from './DoorComponent';
import WindowComponent from './WindowComponent';

class Canvas extends Component {
  render() {
    return (
      <div className='canvas'>
        {
          this.props.elements
          ? this.props.elements.map((element, idx) => {
            return (
              <div key={ idx }>
                <RoomComponent element={element}/>
              </div>
            )
          })
          : null
        }
        {
          this.props.doors
          ? this.props.doors.map((door, idx) => {
            return (
              <div key={idx}>
                  <DoorComponent door={door} />
              </div>
            )
          })
          : null
        }
        {
          this.props.windows
          ? this.props.windows.map((window, idx) => {
            return (
              <div key={idx}>
                <WindowComponent window={window} />
              </div>
            )
          })
          : null
        }
      </div>
    );
  }
}

const mapState = ({ elements, doors, windows }) => ({ elements, doors, windows });

export default connect(mapState)(Canvas);
