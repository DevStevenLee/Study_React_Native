import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider} from './src/context/TrackContext';

import { setNavigator } from './src/navigationRef';

import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});


trackListFlow.navigationOptions = () => {
  return {
    title: 'Tracks',
    tabBarIcon: <FontAwesome name="th-list" size={20}/>
  }
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,

  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),

  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
}, {
  initialRouteName: 'ResolveAuth'
}

);

const App = createAppContainer(switchNavigator);

export default() => {
  return (

      /**
       * render 메서드 안에서 ref가 엘리먼트에게 전달되었을 때, 그 노드를 향한 참조는 ref의 current 어트리뷰트에 담기게 됩니다.
       * 
       * 
       * ref 어트리뷰트가 커스텀 클래스 컴포넌트에 쓰였다면, 
       * ref 객체는 마운트된 컴포넌트의 인스턴스를 current 프로퍼티의 값으로서 받습니다.
       * 
       */
      /**
       * 즉 하단은 App의 마운트된 컴포넌트의 인스터스(Dom)을 <= NavigationContainer로 받아진다.
       * navigation에 넣고 navigation을 setNavigator에 반환해준다.
       */
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>

          <App ref={
            (navigaton) => {
              setNavigator(navigaton)
            }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
};