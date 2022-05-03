import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

/**
 * 
 * #. Navigation libary
 * React navigation libary provides us a couple of different objects for navigating users around an app
 * navigation은 스크린의 이동을 관리해주는 것이다.
 * 
 * $. navigation에는 다음과 같은 기능이 있다.
 *  1. Drawer Navigator <= Drawer
 *  2. BottomTabNavigator <= 밑부분 버튼
 *  3. StackNavigator <= Screen을 stack으로 쌓아주는 것
 * 
 */

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

/**
 * React-native app이 실행할 때 첫화면 구성을 App.js 파일에서 해준다.
 * 이 파일에서 export한 것이 react-native의 초기 화면으로 만들어주는 것이다.
 * 
 * 현재, navigator은 createStackNavigator로 설정이 되어있는데
 * 이 navigator는 각 screen마다 props을 자동으로 할당해준다.
 */

export default createAppContainer(navigator);




