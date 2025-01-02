import { showMessage } from 'react-native-flash-message';
import appColors from './appColors';

export const handleErrorMessage = (errorResponse: any) => {
  const errors = errorResponse.errors;
  let errorMessage = errorResponse.message

  if (errors) {
    for (const field in errors) {
      if (errors.hasOwnProperty(field)) {
        errorMessage = errors[field][0]
      }
    }
  }
  showErrorMsg(errorMessage)
}

export const showErrorMsg = (msgStr: string, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'danger',
    ...options
  });


export const showSuccessMsg = (msgStr: string, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'success',
    backgroundColor: appColors.message,
    ...options
  });

export const showWarningMsg = (msgStr: string, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'warning',
    ...options
  });