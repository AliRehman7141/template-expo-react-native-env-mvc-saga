import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import {
    AvatarComponent,
    Button,
    Typography,
} from 'components/index';
import { useInsets } from 'utils/appDimensions';

import styles from './styles';
import { MoreScreenProps } from './models';
import useController from './useController';

const MoreScreen: React.FC<MoreScreenProps> = (props) => {
    const { fixedBottom, top } = useInsets()
    const {
        userData,

        onLogoutPress,
    } = useController()

    return (
        <View style={styles.container}>
            <View style={[styles.headerView, { height: top }]} />
            <ScrollView
                contentContainerStyle={[styles.contentContainer, { paddingBottom: fixedBottom }]}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <View style={styles.userDetailsView}>
                    <AvatarComponent
                        name={`${userData?.full_name}`}
                        style={styles.userImage}
                        source={{ uri: `${userData?.picture}` }}
                    />
                    <View style={styles.userDetails}>
                        <Typography style={styles.useNameText}>
                            {`${userData?.full_name}`}
                        </Typography>
                        <Typography style={{ fontSize: 12 }}>
                            {`${userData?.email}`}
                        </Typography>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={{ flexGrow: 1, marginTop: 10 }}>
                    <View style={{ flexGrow: 1 }} />
                    <Button
                        isPrimary={false}
                        title={"Log out"}
                        onPress={onLogoutPress}
                        container={styles.logoutButton}
                        titleStyle={styles.logoutText}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default MoreScreen;
