import { StyleSheet } from "react-native";
import appColors from "utils/appColors";
import { BOTTOM_TAB_BAR_HEIGHT } from "utils/appDimensions";

const styles = StyleSheet.create({
    tabBarStyle: {
        width: '100%',
        flexDirection: "row",

        backgroundColor: appColors.white,
        borderTopWidth: 0,

        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabStyle: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginVertical: 4,
        height: "100%",
        marginHorizontal: 0.4,
    },
    tabBarIcon: {
        alignSelf: 'center',
        height: 23,
        width: 23,
        resizeMode: 'contain',
    },
    tabLabel: {
        fontSize: 10,
        lineHeight: 16,
        color: appColors.grayCC,
    }
});

export default styles