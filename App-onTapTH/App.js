import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentLogin from './src/components/ComponentLogin';
import ComponentHome from './src/components/ComponentHome';
import ComponentOrder from './src/components/ComponentOrder';

const Stack = createNativeStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="ComponentLogin" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ComponentLogin" component={ComponentLogin} />
                <Stack.Screen name="ComponentHome" component={ComponentHome} />
                <Stack.Screen name="ComponentOrder" component={ComponentOrder} />
                {/* <Stack.Screen name="" component={} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

