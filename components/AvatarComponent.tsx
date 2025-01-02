import React, { FC, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
} from 'react-native';
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image';

import appColors from 'utils/appColors';
import Typography from './Typography';
import _ from 'lodash';

type Source = { uri: string; headers?: { [key: string]: string } };

interface AvatarComponentProps {
    source?: Source;
    name?: string;
    size?: "small" | "large";
    style?: ImageStyle;
    resizeMode?: ResizeMode;
}

const AvatarComponent: FC<AvatarComponentProps> = (props) => {
    const {
        source = null,
        name = "",
        size,
        style,
        resizeMode = FastImage.resizeMode.cover,
    } = props;

    const [loading, setLoading] = useState(false);
    const [imageSource, setImageSource] = useState<Source | null>(source);

    useEffect(() => {
        setImageSource(source);
    }, [source]);

    const renderLoaderView = () => {
        return (
            <View
                style={[StyleSheet.absoluteFill, {
                    alignItems: 'center',
                    justifyContent: 'center',
                }]}>
                <ActivityIndicator
                    animating={loading}
                    color={appColors.primary}
                    size={size ? size : 'large'}
                />
            </View>
        )
    }

    if ((imageSource == null || _.isNil(imageSource?.uri)) && name?.length > 0) {
        let fontSize: number = 20;
        if (style?.height && typeof style?.height === "number") {
            fontSize = style?.height as number * 0.6;
        } else if (style?.width && typeof style?.width === "number") {
            fontSize = style?.width as number * 0.6;
        }
        return (
            <View
                {...props}
                style={[{
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: appColors.grayE2,
                }, style]}>
                <Typography style={{ fontSize }}>
                    {`${name?.trim()?.charAt(0).toUpperCase()}`}
                </Typography>
            </View>
        );
    } else if (imageSource) {
        return (
            <FastImage
                {...props}
                style={style}
                source={imageSource}
                resizeMode={resizeMode}
                onError={() => {
                    setImageSource(null);
                }}
                onLoadStart={() => {
                    setLoading(true);
                }}
                onLoadEnd={() => {
                    setLoading(false);
                }}>
                {renderLoaderView()}
            </FastImage>
        );
    }
};

export default AvatarComponent;
