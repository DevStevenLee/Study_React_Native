import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareSceen'
import Counter from "./src/screens/Counter";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

/**
 * 하단에 있는 Navigator stack이라고 한다.
 * 이 object가 가지고 있는 Home, Components, List와 같은 screen들 또한
 * object인데 각 object에 자동적으로 props들을 할당해준다.
 * 
 * 예를 들어, Home, Component, List에 navigation이라는 props가 들어가 있다.
 * HomeScreen에서 이를 통해 navigate를 할 수 있는 것이다.
 */
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Counter: Counter,
    Text: TextScreen,
    Box : BoxScreen,
  },
  {
    // initialRouteName은 맨 처음에 어떤 화면이 먼저 보여질지 정해주는 것이다.
    // 이는 위에 있는 navigator의 가장 첫번째 property 중 하나를 고를 수 있다.
    // 이 상황에서는 Home, Components, List 중에서 고를 수 있다.
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
