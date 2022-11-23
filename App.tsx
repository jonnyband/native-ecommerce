import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home/Home';
import { Login} from './src/screens/Login/Login';
import { Registration } from './src/screens/Registration/Registration';
import { Members } from './src/screens/Members/Members';
import { CartContent } from './src/context';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Routes/>

);

  
}

export function drawerComponents(){
  return(

<CartContent>
<NavigationContainer>
  <Drawer.Navigator>
  <Drawer.Screen name="Home" component={Home}/>
  <Drawer.Screen name="Integrantes" component={Members}/>
  </Drawer.Navigator>
</NavigationContainer>
</CartContent>
  );
}


;
