import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import {
    RefreshControlView,
} from 'components/index';
import { useInsets } from 'utils/appDimensions';

import styles from './styles';
import { HomeScreenProps } from './models';
import useController from './useController';

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const { fixedBottom } = useInsets()
    const {
        refreshing,

        onRefresh,
    } = useController()

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={[styles.contentContainer, { paddingBottom: fixedBottom }]}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControlView
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                    />
                }>

            </ScrollView>
        </View>
    );
}

export default HomeScreen;
