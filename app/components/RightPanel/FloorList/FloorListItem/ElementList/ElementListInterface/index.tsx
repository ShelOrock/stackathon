import * as React from 'react';

import DeleteElementButton from './DeleteElementButton';
import LockElementButton from './LockElementButton';
import HideElementButton from './HideElementButton';
import HighlightElementButton from './HighlightElementButton';
import TagSelect from './TagSelect';

import { ElementTypes } from '../../../../../../types';
import Row from '../../../../../Row';

export default (element: ElementTypes) => {
  return (
    <Row>
      <HighlightElementButton { ...element } />
      <LockElementButton { ...element } />
      <HideElementButton { ...element } />
      <TagSelect { ...element } />
      <DeleteElementButton { ...element } />
    </Row>
  )
}