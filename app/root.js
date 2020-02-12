import React, { Component } from 'react';
import Draggable from 'react-draggable';

class App extends Component {

    eventLogger = (e, data) => {
        console.log('event', e);
        console.log('data', data);
    };

    render() {
        return (
            <Draggable
                axis='x'
                handle='.handle'
                defaultPosition={
                    { 
                        x: 0,
                        y: 0
                    }
                }
                position={ null }
                grid={ [25, 25] }
                scale={ 1 }
                onStart={ this.handleStart }
                onDrag={ this.handleDrag }
                onStop={ this.handleStop}
            >
                <div>
                    <div className='handle'>Drag from here</div>
                </div>
            </Draggable> 
        )
    }
}

export default App;