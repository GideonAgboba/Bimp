import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/auth/Login';
import {connect} from 'react-redux';

function Navigation(props) {
  return (
    <NavigationContainer
      theme={props?.colorScheme == 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator auth={props?.auth} />
    </NavigationContainer>
  );
}

const mapStateToProps = function (state) {
  return {
    auth: state?.auth,
  };
};

export default connect(mapStateToProps, {})(Navigation);

const Stack = createStackNavigator();

function RootNavigator({auth}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth && !auth?.onboarded ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : null}
      {auth && !auth?.isAuthenticated ? (
        <Stack.Screen name="Login" component={Login} />
      ) : null}
      {auth && auth?.isAuthenticated ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : null}
    </Stack.Navigator>
  );
}
