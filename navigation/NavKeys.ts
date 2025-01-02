import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    LoginScreen: undefined;
    BottomTabs: undefined;
    HomeScreen: undefined;
    MoreScreen: undefined;
};

const NavKeys = {
    LandingScreen: "LandingScreen" as const,
    BottomTabs: "BottomTabs" as const,
    HomeScreen: "HomeScreen" as const,
    MoreScreen: "MoreScreen" as const,
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type {
    NavigationProp
}

export default NavKeys
