import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet } from "react-native";
import Profile from "../screens/Profile";
import Holiday from "../screens/Holiday";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Leave from "../screens/Leave";
import Attendance from "../screens/Attendance";
import AddImage from "../screens/addImage/AddImage";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ route }) => {

    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={Home} initialParams={{ data: route.params.userData }} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Attendance" component={Attendance} />
            <Drawer.Screen name="Holiday" component={Holiday} />
            <Drawer.Screen name="AddImage" component={AddImage} />
            <Drawer.Screen name="Logout" component={Login} options={{ headerShown: false }} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation;