import Types from '../types';

/**
 * 第一个参数,string类型的type,第二个参数,根据自己需要的数据 
 * 主题变更
 * @param theme
 * @returns {{type: string, theme: *}}
 */
export function onThemeChange(theme) {
    return {type: Types.THEME_CHANGE, theme: theme}
}