import React from 'react';

import SmallGrid from './SmallGrid';
import LargeGrid from './LargeGrid';

export default ({ size }) => {

  return (
    <>
      <SmallGrid size={ size } />
      <LargeGrid size={ size } />
    </>
  )
}