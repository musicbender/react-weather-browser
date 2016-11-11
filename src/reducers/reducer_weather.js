import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }
    
    return state;
}

//never want to add action.data to state by changing state. We want to create a new array and add the action.data. state.push() would have pushed data to current array (bad). state.concat() would make a new array (pure and good). returning an array with ...state is the same as concat, but with es6 syntax (very good). 