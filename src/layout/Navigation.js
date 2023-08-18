import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Reset from '../screens/Reset';
import SignUp from '../screens/SignUp';
import Varification from '../screens/Varification';
import DrawerNavigation from '../layout/DrawerNavigation';
import Holiday from '../screens/Holiday';

const Navigation = () => {

    //creating stack for navigation

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={{ title: 'DrawerNavigation', headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ title: 'SignUp', headerShown: false }}
                />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={{ title: 'Forgot', headerShown: false }}
                />
                <Stack.Screen
                    name="Varification"
                    component={Varification}
                    options={{ title: 'Varification', headerShown: false }}
                />
                <Stack.Screen
                    name="Reset"
                    component={Reset}
                    options={{ title: 'Reset', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;
