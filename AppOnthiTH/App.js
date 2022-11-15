import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentHome from './src/components/ComponentHome';
import ComponentLogin from './src/components/ComponentLogin';
import ComponentPayment from './src/components/ComponentPayment';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ComponentLogin" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={ComponentHome} />
                <Stack.Screen name="ComponentLogin" component={ComponentLogin} />
                <Stack.Screen name="ComponentPayment" component={ComponentPayment} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

