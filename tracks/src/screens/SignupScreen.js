import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthFrom from '../components/AuthForm';
import NavLink from '../components/NavLink';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        /**
         * <> </> tag는 fragment이고 
         * components들을 감싸는 역할이다.
         * (단, Style을 control 할 수 없다.)
         * 
         * 따라서 <View>을 통해서 Style을 다룬다.
         */
        <View style={styles.container}>
            <NavigationEvents onWillFocus={ clearErrorMessage }/>
            <AuthFrom
                headerText="Sign Up for Tracker"
                submitButtonText="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

/**
 * flex는 screen의 크기를 지정하는 것
 * flex: 1 == 크기를 스크린에 꽉 맞게 해주는 것
 * flex: 0.5 == 크기를 스크린 반 만큼 맞게 해주는 것
 * 
 * justifyContent: justifyContent describes how to align children within the main axis of their container
 */
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: (windowHeight / 5)
    },


});

export default SignupScreen;