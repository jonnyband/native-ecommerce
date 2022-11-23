import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/Login/Login';
import { Registration } from '../screens/Registration/Registration';
import { Members } from '../screens/Members/Members';
import { Home } from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator >               
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registro" component={Registration} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Routes;