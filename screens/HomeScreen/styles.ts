import { StyleSheet } from "react-native";
import appColors from "utils/appColors";
import { deviceWidth } from "utils/appDimensions";

const cardWidth = (deviceWidth - 48) / 2
const cardHeight = cardWidth * 1.1

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    contentContainer: {
        flexGrow: 1,
        alignItems: "center",
        paddingHorizontal: 16
    },
    sectionHeading: {
        fontSize: 16,
        fontWeight: "600",
    },
    seeAllText: {
        fontSize: 12,
        fontWeight: "600",
        textDecorationLine: "underline"
    },
    rowContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    indoorOutdoorButton: {
        paddingVertical: 7.5,
        paddingHorizontal: 16,
        borderRadius: 24,
        backgroundColor: "#E5C13F26",
        marginRight: 8,
    },
    indoorOutdoorText: {
        fontSize: 12,
        fontWeight: "600",
        color: appColors.primary
    },
    tableItem: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 8,
        marginRight: 16
    },
    eventItem: {
        width: 210,
        height: 138,
        marginRight: 16,
        borderRadius: 8,
    },
    sectionHeadingView: {
        height: 18,
        width: 150,
    },
    seeAllView: {
        height: 14,
        width: 60,
    },
    indoorOutdoorView: {
        width: 70,
        height: 30,
        borderRadius: 24,
        marginRight: 8,
    }
});