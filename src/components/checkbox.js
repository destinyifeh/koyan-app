//import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import activeCheckedBoxIcon from '../assets/icons/checkbox-order-icon.png';
//import checkBoxIcon from '../assets/icons/checked-order-icon.png';

export const CheckBoxOutline = () => {
  return (
    // <View>
    //   <Image source={checkBoxIcon} />
    // </View>
    <MaterialIcons name="radio-button-unchecked" color="#74AAF0" size={18} />
  );
};

export const CheckBoxActive = () => {
  return (
    <MaterialIcons name="radio-button-checked" color="#74AAF0" size={18} />

    // <View>
    //   <Image source={checkBoxIcon} />
    //   <Image
    //     source={activeCheckedBoxIcon}
    //     style={{
    //       position: 'absolute',
    //       alignSelf: 'center',
    //       top: 3.5,
    //     }}
    //   />
    // </View>
  );
};
