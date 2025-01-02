import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from 'screens/LoginScreen';
import { RootStackParamList } from '../NavKeys';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack
