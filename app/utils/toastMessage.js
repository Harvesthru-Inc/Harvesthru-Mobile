import {showMessage} from 'react-native-flash-message';

// Show flash message with message and type
const showToast = (message, type, icon) => {
  showMessage({
    message,
    type,
    hideOnPress: true,
    icon,
  });
};

export default showToast;
