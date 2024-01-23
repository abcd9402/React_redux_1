const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;

console.log(redux);

//actions
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const addSubscriber = () => {
    return {
        type:ADD_SUBSCRIBER,}
};

const ADD_VIEW = 'ADD_VIEW';
const addView = () => {
    return {
        type:ADD_VIEW,}
};

//reducers
    const initialState = {
        subscribers:365,
    };
    const subscribeReducer=(state=initialState,action) => {
        switch(action.type){
            case ADD_SUBSCRIBER:
                return {
                    ...state,
                    subscribers: state.subscribers+1,
                }
            default: return state;

        }
    }
    const initialView = {
        view:100,
    };
    const viewReducer=(state=initialView,action) => {
        switch(action.type){
            case ADD_VIEW:
                return {
                    ...state,
                    view: state.view+1,
                }
            default: return state;

        }
    }

    const rootReducer  = combineReducers({
        subscriber:subscribeReducer,
        view:viewReducer,
        
    })
//store
const  store = redux.createStore(rootReducer,applyMiddleware(logger));
//subscribe - view - dispatch
// console.log(store.getState());  //365

//dispatch
store.dispatch(addSubscriber());




// console.log(store.getState());  //366

//subscribe
// store.subscribe(()=>{
//     console.log(store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addView());