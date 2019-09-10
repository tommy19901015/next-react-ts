import { ADD_TEXT } from '../constants/text'

const text = (state = 'texttexttext', action = {}) => {
    switch(action.type) {
        case ADD_TEXT:
            return state;
        default: return state
    }
}

export default text;