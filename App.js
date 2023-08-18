/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import { NativeBaseProvider, StatusBar } from 'native-base';
 import Navigation from './src/layout/Navigation';

 const App = () => {

   return (
     <NativeBaseProvider>
       <StatusBar translucent backgroundColor="transparent" />
       <Navigation />
     </NativeBaseProvider>

   );
 };
 export default App;



// const HomeScreen = () => {
//   return (
//     <View style={{
//       flex: 1, alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <Text>Home page</Text>
//     </View>
//   );
// }

// const NotificationsScreen = () => {
//   return (
//     <View style={{
//       flex: 1, alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <Text>Notifications Page</Text>
//     </View>
//   );
// }

// const AboutScreen = () => {
//   return (
//     <View style={{
//       flex: 1, alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <Text>About Page</Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications"
//           component={NotificationsScreen} />
//         <Drawer.Screen name="About" component={AboutScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// };