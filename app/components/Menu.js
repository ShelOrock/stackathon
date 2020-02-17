import React, { Component } from 'react';
import RoomConstructor from './RoomConstructor';
import DoorConstructor from './DoorConstructor';
import WindowConstructor from './WindowConstructor';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <div 
        className='menu'
        onMouseEnter={ this.toggleMenu }
        onMouseLeave={ this.toggleMenu }
        style={
          {
            width: `${ this.state.menuOpen ? '140px' : ''}`
          }
        }
      >
        <RoomConstructor />
        <DoorConstructor />
        <WindowConstructor />
      </div>
    );
  }
}

export default Menu;
