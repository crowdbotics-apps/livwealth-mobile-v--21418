import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard23139913Reducer from '../features/Dashboard23139913/redux/reducers'
import Dashboard14139912Reducer from '../features/Dashboard14139912/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard23139913: Dashboard23139913Reducer,
Dashboard14139912: Dashboard14139912Reducer,

});