import React from 'react';
import {
    Platform,
    View,
    TouchableOpacity,
    Keyboard,
    InputAccessoryView,
    StyleSheet
} from 'react-native';

import appColors from 'utils/appColors';
import { placeHolderFunction } from 'utils/index';
import Typography from './Typography';

interface KeyboardAccessoryView {
    inputAccessoryViewID?: string;
    onDonePress?: () => void;
}

const KeyboardAccessoryView: React.FC<KeyboardAccessoryView> = ({
    inputAccessoryViewID = "inputAccessoryViewID",
    onDonePress = placeHolderFunction
}) => {

    if (Platform.OS === 'ios') {
        return (
            <InputAccessoryView
                nativeID={inputAccessoryViewID}>
                <View style={styles.accessoryView}>
                    <TouchableOpacity
                        onPress={() => {
                            Keyboard.dismiss()
                            onDonePress()
                        }}>
                        <Typography style={styles.doneText}>
                            {"DONE"}
                        </Typography>
                    </TouchableOpacity>
                </View>
            </InputAccessoryView>
        )
    }
    return null
}

const styles = StyleSheet.create({
    accessoryView: {
        height: 35,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: appColors.grayCC,
    },
    doneText: {
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 20,
        color: appColors.black,
    }
})

export default KeyboardAccessoryView