const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";

export const toggleCheckbox = (name: string) => ({
  type: TOGGLE_CHECKBOX,
  payload: name,
});

const defaultState = {
  option1: false,
  option2: false,
  option3: false,
  option4: false,
  option5: false,
};

export const checkboxReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return{
                ...state,
                [action.payload]: !state[action.payload]
            }
        default:  
           return state;
    }
}

