import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavKeys, { RootStackParamList } from '../NavKeys';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavKeys.BottomTabs}>
            <Stack.Screen name={NavKeys.BottomTabs} component={BottomTabs} />
        </Stack.Navigator>
    );
}

export default HomeStack
