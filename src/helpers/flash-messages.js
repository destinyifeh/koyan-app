import {Alert, Platform, ToastAndroid} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Toast from 'react-native-simple-toast';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOUR_LIGHT_BLUE} from '../constants/Styles';
const flashSuccessMessage = description => {
  showMessage({
    message: 'Success',
    description: description,
    type: 'success',
    icon: props => <AntDesign name="checkcircle" color="white" size={18} />,
    titleStyle: {left: 5},
    //duration: 5000,
  });
};

const flashErrorMessage = description => {
  showMessage({
    message: 'Error',
    description: description,
    type: 'danger',
    icon: props => <MaterialIcons name="error" color="white" size={18} />,
    titleStyle: {left: 5},
    duration: 5000,
  });
};

const flashAlertMesage = (title, message) => {
  Alert.alert(title, message);
};

const flashToastMessage = message => {
  Platform.OS === 'android'
    ? ToastAndroid.show(message, ToastAndroid.LONG)
    : Toast.show(message, Toast.LONG, {
        backgroundColor: 'white',
        textColor: COLOUR_LIGHT_BLUE,
      });
};

export {
  flashAlertMesage,
  flashErrorMessage,
  flashSuccessMessage,
  flashToastMessage,
};
