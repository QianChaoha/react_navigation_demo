import Types from '../../action/types';
const defaultState = {
    theme: 'blue'
}
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            //返回新的state,新的state携带theme属性
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
}