import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import {LOCATION_SERVICE_BASE_UR} from '../constants/config';
import {
  getBusinessLocationData,
  getUserAddressData,
  getUserLocationData,
} from '../state-management/features/global/globalSlice';
import {store} from '../state-management/store';
const getLocationHandler = async () => {
  store.dispatch(getUserAddressData({isLoading: true}));

  Geolocation.getCurrentPosition(
    async position => {
      const {latitude, longitude} = position.coords;
      store.dispatch(getUserLocationData({latitude, longitude}));
      console.log(position, 'poos');
      console.log(latitude, longitude, 'des man');

      const data = await getAddressHandler(latitude, longitude);
      console.log('Obtained address:', data);
      store.dispatch(getUserAddressData(data));
    },
    error => {
      store.dispatch(getUserLocationData('Error getting current location'));
      store.dispatch(getUserAddressData('Location unavailable'));

      console.error('Error getting current location:', error);
      if (error.message === 'No location provider available.') {
        return Alert.alert(
          'Location Services Required',
          'To enhance your experience, please enable location services on your device.',
        );
      }
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
};

const getAddressHandler = async (latitude, longitude) => {
  console.log(latitude, longitude, 'trees');
  console.log(LOCATION_SERVICE_BASE_UR, 'loc base');
  store.dispatch(getUserAddressData({isLoading: true}));
  try {
    const response = await fetch(
      `${LOCATION_SERVICE_BASE_UR}/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    );
    const data = await response.json();
    console.log(data, 'data');

    if (data.display_name) {
      const {lat, lon} = data;
      const address = data.display_name;
      console.log(address, 'my address');

      return data;
    } else {
      return 'Location unavailable';
    }
  } catch (err) {
    console.log(err, 'err');
    return 'Location unavailable';
  }
};

const FetchBusinessLocation = async address => {
  store.dispatch(getBusinessLocationData({isLoading: true}));
  try {
    const response = await fetch(
      `${LOCATION_SERVICE_BASE_UR}/search?format=json&q=${encodeURIComponent(
        address,
      )}`,
    );
    const data = await response.json();
    console.log(data, 'restoo 22');

    if (data.length > 0) {
      const {lat, lon, display_name} = data[0];

      store.dispatch(
        getBusinessLocationData({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        }),
      );
    } else {
      store.dispatch(
        getBusinessLocationData(
          'Map details for the merchant are currently unavailable',
        ),
      );
    }
  } catch (err) {
    console.log(err);
    store.dispatch(
      getBusinessLocationData(
        'Map details for the merchant are currently unavailable',
      ),
    );
  }
};

export {FetchBusinessLocation, getAddressHandler, getLocationHandler};
