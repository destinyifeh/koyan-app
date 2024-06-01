import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function CheckoutOrderConfirmationScreen(props) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{marginTop: 35, left: 15}}
        onPress={() => props.navigation.goBack()}>
        <Feather name="arrow-left" size={18} color="black" />
      </TouchableOpacity>

      <Text>Checkout order confirmation screen</Text>
    </View>
  );
}
