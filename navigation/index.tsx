import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthStack from './stacks/AuthStack';
import HomeStack from './stacks/HomeStack';
import { navigationRef } from './RootNavigation';

import Loader from 'components/Loader';
import { RootState } from 'store/index';

const MainStack = () => {
    const { isSignedIn } = useSelector((state: RootState) => state.session)
    const [isLoading, setIsLoading] = useState(true);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                setIsLoading(false)
            }}>
            {isSignedIn ?
                <HomeStack />
                :
                <AuthStack />
            }
            <Loader loading={isLoading} />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    splashLogo: {
        width: 172,
        height: 172,
        resizeMode: 'contain'
    }
})

export default MainStack
