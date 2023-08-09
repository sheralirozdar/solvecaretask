 import {FETCH_DATA_SUCCESS ,
          ADD_DATA_SUCCESS ,
          UPDATE_DATA_SUCCESS, 
          DELETE_DATA_SUCCESS,
          FETCH_SINGLE_DATA_SUCCESS } from "../actions/types"

const initialState = {
    tasks: [],
    task: null,

  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS :
        return {
          ...state,
          tasks: action.payload,
        };
    case FETCH_SINGLE_DATA_SUCCESS :

        return {
          ...state,
          task: action.payload,
        };
      case ADD_DATA_SUCCESS:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
     case DELETE_DATA_SUCCESS :
        return {
            ...state,
            banks: state.tasks.filter((obj) => obj.id !==action. payload),
            loading: false
          };
     
     case UPDATE_DATA_SUCCESS:
                let objIndex = state.tasks.findIndex((obj => obj.id == action.payload.id));
                state.tasks[objIndex] = action.payload;
                return {
                  ...state,
                  tasks : state.tasks,
                //   loading: false
                };
               
      // Other task-related cases...
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  