import {combineReducers} from 'redux'
import theme from './theme'
import {rootCom, RootNavigator} from '../../navigators/AppNavigators';
//将所有的redux聚合

//1.指定默认state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/** * 2.创建自己的 navigation reducer， */
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    // 如果`nextState`为null或未定义，只需返回原始`state`
    return nextState || state;
};

/** * 3.合并reducer * @type {Reducer<any> | Reducer<any, AnyAction>} */
const index = combineReducers({
    nav: navReducer,
    theme: theme,
});

export default index;