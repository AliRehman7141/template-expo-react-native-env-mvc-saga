import React from 'react';
import {
    I18nManager,
    RefreshControl,
    RefreshControlProps,
    StyleSheet,
} from 'react-native';

import appColors from 'utils/appColors';

interface RefreshControlViewProps {
    refreshing: boolean;
    onRefresh: () => void;
}

const RefreshControlView: React.FC<RefreshControlViewProps & RefreshControlProps> = (props) => {
    const isRTL = I18nManager.isRTL

    return (
        <RefreshControl
            title={'Updating...'}
            tintColor={appColors.primary}
            titleColor={appColors.primary}
            style={isRTL ? { transform: [{ rotateY: "180deg" }] } : {}}
            {...props}
        />
    )

}

const styles = StyleSheet.create({

})

export default RefreshControlView