import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import Page1 from './Page1'
import Page3 from './Page3'
import Page4 from './Page4'
import { connect } from 'react-redux';
class Page2 extends React.Component {
    render() {
        const MaterialTopTabNavigatorContainer = createAppContainer(MaterialTopTabNavigator);
        const { theme } = this.props;

        return <View style={styles.container}>
            <Text style={{
                color: theme
            }}>6666</Text>
            <MaterialTopTabNavigatorContainer />
        </View>
    }
}
export const MaterialTopTabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
    Page1: {
        screen: Page1,
    },
    Page4: {
        screen: Page4,
    },
    Page3: {
        screen: Page3,
    },
},
    {
        tabBarOptions: {
            tabStyle: {
                minWidth: 50
            },
            upperCaseLabel: false,//是否使标签大写，默认为true
            scrollEnabled: true,//是否支持 选项卡滚动，默认false
            activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: '#330000',//label和icon的前景色 活跃状态下（未选中）
            style: {
                backgroundColor: '#678',//TabBar 的背景颜色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white',
            },//标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6,
            },//文字的样式
        }
    }
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});
//将state里的theme关联到props中theme --> 将theme传递给TabBarComponent
const mapStateToProps = state => ({
    //新的state里有theme属性(./theme/index.js),携带了theme字段
    //最后theme的值会关联到props的theme
    theme: state.theme.theme,
});
//新的theme会关联到Page2的props里面
export default connect(mapStateToProps)(Page2);