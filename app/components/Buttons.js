import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { resetStore } from '../redux/store/actions';

class Buttons extends Component {
  handleOnClick = () => {
    this.props.resetStore()
  }

  render() {
    return (
      <div className='button-container'>
        <Button variant='contained' color='primary' href='#/3d' className='button'>
          Build it
        </Button>
        <Button variant='contained' onClick={this.handleOnClick} className='button'>
          Restart
        </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  resetStore: () => dispatch(resetStore())
})

export default connect(null, mapDispatch)(Buttons);
