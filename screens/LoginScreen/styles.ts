import { StyleSheet } from "react-native";
import appColors from "utils/appColors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white
    },
    bannerImage: {
        height: 240,
        width: "100%",
        justifyContent: "flex-end"
    },
    headerButtons: {
        width: "100%",
        position: "absolute",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 16,
        justifyContent: "space-between",
    },
    backButton: {
        paddingVertical: 9,
    },
    switchButton: {
        borderRadius: 50,
        paddingVertical: 9,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 16,
        backgroundColor: appColors.bgColor
    },
    contentContainer: {
        flexGrow: 1,
        paddingTop: 22,
        alignItems: "center",
        paddingHorizontal: 16
    },
    heading: {
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 38,
    },
    rowContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    dividerText: {
        lineHeight: 16,
        marginHorizontal: 9,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: appColors.grayCC
    }
});