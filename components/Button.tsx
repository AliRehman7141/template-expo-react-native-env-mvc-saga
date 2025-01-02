import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    TextStyle,
    View,
    ActivityIndicator
} from 'react-native';
import _ from 'lodash';

import appColors from 'utils/appColors';
import { placeHolderFunction } from 'utils/index';

import Typography from './Typography';

interface ButtonProps {
    onPress?: () => void;
    container?: ViewStyle;
    LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    title?: string;
    isPrimary?: boolean;
    titleStyle?: TextStyle;
    isActive?: boolean;
    isLoading?: boolean;
    isOtherLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title = "",
    isPrimary = true,
    isLoading = false,
    onPress = placeHolderFunction,
    container = {},
    titleStyle = {},
    LeftIcon = null,
    isActive = true,
    isOtherLoading = false,
}) => {
    const backgroundColor = isPrimary ? appColors.primaryButtonBg : appColors.secondaryButtonBg
    const textColor = isPrimary ? appColors.primaryButtonText : appColors.secondaryButtonText

    const opacity = isActive ? 1 : 0.3

    const renderIcon = () => {
        if (LeftIcon) {
            return (
                <View style={styles.iconContainer}>
                    <LeftIcon />
                </View>
            )
        } return null
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            disabled={!isActive || isOtherLoading}
            style={[styles.button, { backgroundColor, opacity }, container]}>
            {renderIcon()}
            <Typography
                style={[styles.buttonText, { color: textColor }, titleStyle]}>
                {`${title}`}
            </Typography>
            {isLoading && _.isNil(LeftIcon) &&
                <ActivityIndicator style={{ marginLeft: 10 }} color={isPrimary ? appColors.white : appColors.primary} />
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
    },
    iconContainer: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    loadingView: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appColors.transparentA1
    }
});

export default Button;
