import React, { Component } from 'react';
import DraggableComponent from './DraggableComponent';

class RoomConstructor extends Component {
    constructor() {
        super();
        this.state = {
            blockList: []
        }
    }

    handleCreateBlock = () => {
        this.setState({ blockList: [...this.state.blockList, '']})
    }

    render() {
        return (
            <div>
                <div 
                    style={
                        {
                            width: '100px',
                            height: '100px',
                        }
                    }
                    onMouseDown={ this.handleCreateBlock }
                >
                I create new components
                </div>
                <div>
                    {
                        this.state.blockList.map((block, idx) => {
                            return (
                                <div key={ idx }>
                                    <DraggableComponent />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RoomConstructor;