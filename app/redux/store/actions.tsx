import StoreActionTypes from './constants';

import { ActionFunctionType } from '../../types';

export const resetStore: ActionFunctionType = () => ({ type: StoreActionTypes.RESET_STORE });
 