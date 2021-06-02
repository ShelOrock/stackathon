import * as React from 'react';

import DeleteElementButton from './DeleteElementButton';
import LockElementButton from './LockElementButton';
import HideElementButton from './HideElementButton';
import HighlightElementButton from './HighlightElementButton';
import TagSelect from './TagSelect';

import { ElementTypes } from '../../../../../../types';

export default (element: ElementTypes) => {
  return (
    <>
      <HighlightElementButton { ...element } />
      <LockElementButton { ...element } />
      <HideElementButton { ...element } />
      <TagSelect { ...element } />
      <DeleteElementButton { ...element } />
    </>
  )
}