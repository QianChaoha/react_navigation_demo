import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import actions from './action/index';
import { connect } from 'react-redux';
class Page1 extends React.Component {
    //也可在这里定义每个页面的导航属性，这里的定义会覆盖掉别处的定义
    // static navigationOptions = {
    //     title: 'Page1',
    // };

    render() {
        const {navigation} = this.props;
        return <View style={{flex: 1, backgroundColor: "gray"}}>
            <Text style={styles.text}>欢迎来到Page1</Text>
            <Button
                title="Go Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Button
                title="改变主题色"
                onPress={() => {
                    //触发onThemeChange action
                    this.props.onThemeChange('#096');
                }}
            />
            <Button
                title="跳转到页面4"
                onPress={() => {
                    navigation.navigate("Page4")
                }}
            />
        </View>
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
    }
});
//这个函数允许我们将 store 中的数据作为 props 绑定到组件上
const mapStateToProps = state => ({});
//将dispatch函数关联到props里面
const mapDispatchToProps = dispatch => ({
    onThemeChange: (theme) => {
        return dispatch(actions.onThemeChange(theme));
    },
});
//这样Page1中props就有onThemeChange函数了。把 Page1 组件和 Redux 的 store 连接起来
export default connect(mapStateToProps, mapDispatchToProps)(Page1);