import { Image, Pressable, Text, TouchableHighlight, View } from "react-native";

import styles from '../styles'
import appColors from "utils/appColors";
import { Typography } from "components/index";

interface TabButtonProps {
    label: string;
    focused: boolean;
    ActiveIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    InactiveIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    points?: number;
}

const TabButton: React.FC<TabButtonProps> = (props) => {

    const {
        label,
        focused,
        ActiveIcon = null,
        InactiveIcon = null,
        points,
    } = props;

    const renderTabIcon = () => {
        if (focused && ActiveIcon) {
            return <ActiveIcon />
        } else if (InactiveIcon)
            return <InactiveIcon />
        else return null
    }

    const renderPointsText = () => {
        if (points) {
            return (
                <Typography style={[styles.tabLabel, {
                    color: focused ? appColors.primary : appColors.primaryBrown
                }]}>
                    {`${points} `}
                </Typography>
            )
        }
    }

    return (
        <View
            style={styles.tabStyle}>
            <View style={styles.tabBarIcon}>
                {renderTabIcon()}
            </View>
            <Typography
                style={[
                    styles.tabLabel,
                    focused ? { color: appColors.primary } : {}
                ]}>
                {renderPointsText()}
                {`${label}`}
            </Typography>
        </View>
    );
};

export default TabButton 