import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home/Home';
import { Login } from './src/screens/Login/Login';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
  <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  </NavigationContainer>   
  // <Login/>
);
  
}
;
