import React, { Component } from 'react';

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      division: 4,
    };
  }

  render() {
    return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {
            new Array(Math.floor(window.innerWidth / this.state.division)).fill('').map(div => {
                return (
                    <div>
                        HI
                    </div>
                )
            })
        }
    </div>
    );
  }
}

export default Canvas;
