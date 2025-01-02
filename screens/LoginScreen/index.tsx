import React from 'react';
import {
    View,
} from 'react-native';
import {
    KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

import { useInsets } from 'utils/appDimensions';
import { Button, Typography, InputField } from 'components/index';

import styles from './styles';
import useController from './useController';
import { LoginScreenProps } from './models';

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
    const { top, paddingBottom, statusBar = 0 } = useInsets()

    const {
        isLoading,
        email,
        errors,
        password,
        isButtonActive,
        isPasswordVisible,

        setEmail,
        onEyePress,
        setPassword,
        onContinuePress,
    } = useController()

    return (
        <View style={[styles.container, { paddingTop: statusBar }]}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={"never"}
                contentContainerStyle={[styles.contentContainer, { paddingBottom }]}>
                <Typography style={styles.heading}>
                    {`Case management`}
                </Typography>
                <View style={styles.rowContainer}>
                    <View style={styles.divider} />
                    <Typography style={styles.dividerText}>
                        {`Log in or sign up`}
                    </Typography>
                    <View style={styles.divider} />
                </View>
                <InputField
                    title={'Email'}
                    placeholder={'work@example.com'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                    textContentType='emailAddress'
                    error={errors?.email}
                />

                <InputField
                    value={password}
                    title={'Password'}
                    onChangeText={setPassword}
                    placeholder={'Enter your password'}
                    isPassword={true}
                    secureTextEntry={isPasswordVisible}
                    onEyePress={onEyePress}
                    error={errors?.password}
                />
                <View style={{ flexGrow: 1 }} />
                <Button
                    isActive={isButtonActive}
                    isLoading={isLoading}
                    title={'Continue'}
                    container={{ marginTop: 30 }}
                    onPress={onContinuePress}
                />
            </KeyboardAwareScrollView>
        </View>
    );
}

export default LoginScreen;
