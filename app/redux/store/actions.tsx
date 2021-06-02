import { RESET_STORE } from './constants';

import { ActionFunctionType } from '../../types';

export const resetStore: ActionFunctionType = () => ({ type: RESET_STORE });
