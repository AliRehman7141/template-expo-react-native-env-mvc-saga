import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles';
import { RootStackParamList } from '../NavKeys';
import { TabButton } from 'navigation/components';

import {
    HomeActive,
    HomeInactive,
    MoreActive,
    MoreInactive,
} from 'assets/icons';
import { BOTTOM_TAB_BAR_HEIGHT, useInsets } from 'utils/appDimensions';

import HomeScreen from 'screens/HomeScreen';
import MoreScreen from 'screens/MoreScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {
    const { bottomTab } = useInsets()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    height: BOTTOM_TAB_BAR_HEIGHT + bottomTab,
                },
                headerShown: false,
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            focused={focused}
                            label={'Home'}
                            ActiveIcon={HomeActive}
                            InactiveIcon={HomeInactive}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MoreScreen"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            focused={focused}
                            label={'Profile'}
                            ActiveIcon={MoreActive}
                            InactiveIcon={MoreInactive}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs
