import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignInScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                // onWillFoucs: 다른 Screen으로 navigate 하자말자 호출 
                // 즉, A->B로 이동할 때 B에 이동하자 말자 호출
                onWillFocus={ clearErrorMessage }
                
                // onDidFoucs: 다른 Screen으로 navigate를 하고 rendering이 끝난 후 호출
                // 즉, A->B로 이동할 때 B의 rendering이 끝나고 호출
                //onDidFocus={()=>{}}
                
                // onWillBlur: 다른 Screen으로 navigate를 할 떄 Screen이 Pop 되기 직전  호출
                // 즉, A->B로 이동할 때 A가 remove 되기 전 호출
                //onWillBlur={()=>{}}
                
                // onDidBlur: 다른 Screen으로 navigate를 할 때 Screen이 Pop 되고 난 후 호출
                // 즉, A->B로 이동할 때 A가 remove 되고 호출
                //onDidBlur={()=>{}}
            />

            <AuthForm 
                headerText="Sign In to Your Account"
                submitButtonText="Sign In" 
                onSubmit={ signin }
                errorMessage={ state.errorMessage }
            />
            <NavLink 
                text="Dont have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    )
};

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: (windowHeight / 5)
    }
});



export default SignInScreen;