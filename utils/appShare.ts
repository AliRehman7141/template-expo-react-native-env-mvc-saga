import { Alert, Linking, Share, ShareContent } from 'react-native';
import { showErrorMsg } from 'utils/appMessages';
import * as Device from 'expo-device';
import * as Application from 'expo-application';
import { SUPPORT_EMAIL } from 'api/config';

export const onShare = (shareContent: ShareContent) => {
  Share.share(shareContent).then((response) => {

  }).catch((error) => {
    showErrorMsg('Something went wrong with sharing, Try again!');
  });
};

export const onShareWithPromise = (shareContent: ShareContent) => {
  return new Promise(async (resolve, reject) => {
    Share.share(shareContent).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
      showErrorMsg('Something went wrong with sharing, Try again!');
    });
  })
};

export const customerSupportHandler = async (dataString: string = "") => {
  const deviceName = Device.deviceName;
  const baseOS = Device.osName;
  const subject = 'Customer Support';
  const description = `
    Type your message:
  
    ${dataString}

    Device Name: ${deviceName}
    Device Brand: ${Device.manufacturer}
    Device Model: ${Device.modelName}
    Device OS: ${baseOS}
    Device OS Version: ${Device.osVersion}
    App Version: ${Application.nativeApplicationVersion}
    Build Version: ${Application.nativeBuildVersion}
    `;

  const _URL = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${description}`;
  const errorText = `We are unable to open the email application. Please provide your query by sending an email to ${SUPPORT_EMAIL}`;
  const showErrorDialog = () => Alert.alert('Error', errorText);

  Linking.canOpenURL(_URL)
    .then((status) => {
      if (status) {
        Linking.openURL(_URL).catch((_) => showErrorDialog());
      } else {
        showErrorDialog();
      }
    })
    .catch((e) => {
      showErrorDialog();
      console.log('contactUsPressHandler-contactUsPressHandler', e);
    });
};
