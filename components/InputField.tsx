import { EyeClosed, EyeOpened } from 'assets/icons';
import React, { ReactNode, useState, forwardRef } from 'react';
import {
    StyleSheet,
    ViewStyle,
    TextStyle,
    View,
    TextInput,
    TextInputProps,
    Text,
    Pressable,
    StyleProp
} from 'react-native';
import appColors from 'utils/appColors';
import { placeHolderFunction } from 'utils/index';
import Typography from './Typography';

interface InputFieldProps extends TextInputProps {
    container?: ViewStyle;
    title?: string;
    description?: string;
    titleStyle?: TextStyle;
    inputStyle?: StyleProp<TextStyle>;
    descriptionStyle?: TextStyle;
    errorStyle?: TextStyle;
    isPassword?: boolean;
    editable?: boolean;
    onEyePress?: () => void;
    RightComponent?: () => ReactNode;
    error?: string;
}

const InputField = forwardRef<TextInput, InputFieldProps>((props, ref) => {
    const {
        children,
        title = "",
        description,
        titleStyle = {},
        descriptionStyle = {},
        errorStyle = {},
        container = {},
        inputStyle = {},
        isPassword = false,
        secureTextEntry,
        onEyePress = placeHolderFunction,
        RightComponent,
        error = "",
        editable = true
    } = props

    const [isFocused, setIsFocused] = useState<boolean>(false)

    const hasError = error.length > 0

    let borderColor = appColors.stroke
    if (hasError) borderColor = appColors.error
    else if (isFocused) borderColor = appColors.primary

    const renderEyeIcon = () => {
        if (isPassword) {
            return (
                <Pressable
                    style={styles.iconContainer}
                    onPress={onEyePress}>
                    {secureTextEntry ? <EyeClosed /> : <EyeOpened />}
                </Pressable>
            )
        } return null
    }

    const renderError = () => {
        if (hasError) {
            return (
                <Typography style={[styles.errorText, errorStyle]}>
                    {`${error}`}
                </Typography>
            )
        }
    }

    const renderDescription = () => {
        if (description) {
            return (
                <Typography style={[styles.descriptionText, descriptionStyle]}>
                    {`${description}`}
                </Typography>
            )
        }
    }

    return (
        <View style={[styles.container, container]}>
            {title ?
                <Typography style={[styles.titleText, titleStyle]}>
                    {`${title}`}
                </Typography> : null
            }
            <View style={[styles.contentContainer, { borderColor }]}>
                <TextInput
                    ref={ref}
                    key={`${title}`}
                    allowFontScaling={false}
                    style={[styles.inputText, editable ? {} : { color: appColors.gray63 }, inputStyle]}
                    placeholderTextColor={appColors.placeholderTextColor}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {renderEyeIcon()}
                {RightComponent &&
                    <View style={styles.rightComponent}>
                        <RightComponent />
                    </View>
                }
            </View>
            {renderError()}
            {renderDescription()}
            {children}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
    },
    contentContainer: {
        marginTop: 8,
        alignItems: "center",
        flexDirection: "row",
        height: 42,
        borderWidth: 1,
        borderRadius: 6,
    },
    titleText: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
        textAlign: "left",
        color: appColors.black2C
    },
    descriptionText: {
        fontSize: 11,
        marginTop: 9,
        lineHeight: 12,
        fontWeight: '500',
        color: appColors.grayBB
    },
    errorText: {
        fontSize: 11,
        marginTop: 9,
        lineHeight: 12,
        fontWeight: '400',
        color: appColors.error
    },
    inputText: {
        flex: 1,
        width: '100%',
        padding: 12,
        fontSize: 14,
        fontWeight: '400',
    },
    iconContainer: {
        width: 40,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    rightComponent: {
        marginRight: 12
    }
});

export default InputField;
