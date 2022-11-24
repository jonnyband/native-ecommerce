import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Login } from '../screens/Login/Login';
import { Registration } from '../screens/Registration/Registration';
import { Members } from '../screens/Members/Members';
import { Home } from '../screens/Home/Home';
import { CartContent } from '../context';
import { Carrinho } from '../screens/Cart/Cart';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function Routes() {
    return (

        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Home" component={DrawerComponents} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export const DrawerComponents = () => {
    return (

        <CartContent>
            <NavigationContainer independent={true}>
                <Drawer.Navigator>
                    <Drawer.Screen name="Início" component={Home} />
                    <Drawer.Screen name="Carrinho" component={Carrinho} />
                    <Drawer.Screen name="Integrantes" component={Members} />
                </Drawer.Navigator>
            </NavigationContainer>
        </CartContent>
    );
}

export default Routes;