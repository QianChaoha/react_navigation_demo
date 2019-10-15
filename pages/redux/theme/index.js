import Types from '../types';

const defaultState = {
    theme: '#F44336',
};

/** 根据action返回一个新的action*/
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }

}