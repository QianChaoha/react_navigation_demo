import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

 class Login extends React.Component {
    //也可在这里定义每个页面的导航属性，这里的定义会覆盖掉别处的定义
    // static navigationOptions = {
    //     title: 'Page1',
    // };

    render() {
        const {navigation} = this.props;
        return <View style={{flex: 1, backgroundColor: "gray",}}>
            <Text style={styles.text}>登录页</Text>
            <Button
                title="Login"
                onPress={() => {
                    navigation.navigate('Main');
                }}
            />
        </View>
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white'
    }
});

const mapDispatchToProps = dispatch => ({
    onThemeInit: () => dispatch(actions.onThemeInit()),
});

export default connect(null, mapDispatchToProps)(Login);