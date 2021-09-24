import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Explore from '../screens/Home/Explore';
import Cart from '../screens/Cart';
import More from '../screens/More';
import {Colors} from '../constants';
import CartSvg from '../assets/images/cart.svg';
import MoreSvg from '../assets/images/more.svg';
import LottieView from 'lottie-react-native';
import useColorScheme from '../hooks/useColorScheme';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="TabTwo"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
        style: {
          backgroundColor: Colors[colorScheme].background,
          height: 60,
          flexDirection: 'row',
          paddingBottom: 8,
        },
      }}>
      <Tab.Screen
        name="TabOne"
        options={{
          tabBarLabel: 'Your Cart',
          tabBarIcon: ({color}) => (
            <CartSvg width={25} height={25} fill={color} size={25} />
          ),
          tabBarBadge: props?.auth.cart.length || false,
        }}
        component={TabOneNavigator}
      />
      <Tab.Screen
        name="TabTwo"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <LottieView
              style={styles.addIcon}
              source={require('../assets/animations/AddButton.json')}
              colorFilters={[
                {
                  keypath: 'oo',
                  color,
                },
                {
                  keypath: 'o11',
                  color,
                },
                {
                  keypath: 'o12',
                  color,
                },
                {
                  keypath: '椭圆 1',
                  color,
                },
                {
                  keypath: 'jia',
                  color: Colors.white,
                },
                {
                  keypath: 'o13',
                  color,
                },
              ]}
              autoPlay
              loop
            />
          ),
        }}
        component={TabTwoNavigator}
      />
      <Tab.Screen
        name="TabThree"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MoreSvg width={25} height={25} fill={color} size={25} />
          ),
        }}
        component={TabThreeNavigator}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = function (state) {
  return {
    auth: state?.auth,
  };
};

export default connect(mapStateToProps, {})(BottomTabNavigator);

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        options={{
          headerTitle: 'Cart',
        }}
        name="Cart"
        component={Cart}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  const colorScheme = useColorScheme();
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        headerTitleStyle: {fontSize: 18},
        headerTintColor: Colors[colorScheme].text,
        headerShown: true,
      }}>
      <TabTwoStack.Screen
        options={{
          headerTitle: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <TabTwoStack.Screen
        options={{
          headerTitle: 'Explore',
        }}
        name="Explore"
        component={Explore}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();
function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        options={{
          headerTitle: 'Profile',
        }}
        name="More"
        component={More}
      />
    </TabThreeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addIcon: {
    height: 200,
    width: 200,
    transform: [
      {
        scale: 1.4,
      },
    ],
  },
});
