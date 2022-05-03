import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackFrom from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import { Context as LocationContext } from '../context/LocationContext'; 

import { FontAwesome } from '@expo/vector-icons';

//import '../_mockLocation';


const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    /*
      useCallback: 
      useCallback()은 함수를 메모이제이션(memoization)하기 위해서 사용되는 hook 함수입니다. 
      첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해줍니다.

      const memoizedCallback = useCallback(함수, 배열);
    */
    const callback = useCallback(location => {
      addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);

    return (
        /**
         * SafeAreaView:
         * The purpose of SafeAreaView is to render content within the safe area boundaries of a device
         * 즉, SafeAreaView는 Norch 부분까지 rendering이 되는 것을 방지해준다.
         * 
         * * references:
         * https://reactnative.dev/docs/safeareaview
         * https://reactnavigation.org/docs/handling-safe-area/
         * 
         */
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h4>
                Track Create Screen
            </Text>
            <Map />
            {/* <NavigationEvents onWillBlur={() => console.log("leaving")} /> */}
            {err ? <Text>Please enable location services</Text> : null }
            <TrackFrom />
        </SafeAreaView>

    );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
  }
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);