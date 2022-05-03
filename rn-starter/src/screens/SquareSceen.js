import React, { /*useState*/ useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCoumter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    const { colorToChange, amount } = action;
    
    switch(colorToChange){
        case 'red':
            // never going to do! 
            // state.red = state.red - 15; <= check out argument #1 underneath
            if(state.red + amount >= 0 && state.red + amount <= 255){
                return { ...state, red: state.red + amount };
            }
        case 'green':
            if(state.green + amount >= 0 && state.green + amount <= 255){
                return { ...state, green: state.green + amount };
            }
        case 'blue':
            if(state.blue + amount >= 0 && state.blue + amount <= 255){
                return { ...state, blue: state.blue + amount };
            }
        default:
            return state;
    }
};

const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     if(color === 'red'){
    //         if(red + change <= 255 || red + change >= 0){ 
    //             setRed(red + change);
    //         } 
    //     } else if(color == 'green') {
    //         if(green + change <= 255 || green + change >= 0){
    //             setGreen(green + change);
    //         }
    //     } else if(color == 'blue'){
    //         if(blue + change <= 255 || blue + change >= 0){
    //             setBlue(blue + change);
    //         }
    //     } 
    // };

    // Reducer is the function that manages changes to an object
    // Argument #1 - object that has all of our state in it 
    // ex) const state = {red: 0, green: 0, blue: 0}
    // Argument #2 - object that describes the update we want to make
    // ex) { colorToChange: '15', amount: 15 }
    // Two technicalities - (1) We never change Argument #1 directly.
    //                    - (2) We must always return a value to be used as Argument #1
    // (2)번 같은 경우에는 reducer에서 value 반환할 때 그것이 다음 state로 할당되기 때문이다.

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    // state == { red: 0, green: 0, blue: 0}이고 이 state가 계속 변할 것이다.
    // dispatch make reducer to run  

    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT}) /*setColor('red', COLOR_INCREMENT)*/} 
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT}) /*setColor('red', -COLOR_INCREMENT)*/} 
                color="Red" />

            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT}) /*setColor('green', COLOR_INCREMENT)*/} 
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT}) /*setColor('green', -COLOR_INCREMENT)*/} 
                color="Green" />

            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT}) /*setColor('blue', COLOR_INCREMENT)*/} 
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT}) /*setColor('blue', -COLOR_INCREMENT)*/} 
                color="Blue"
            />

            <View style={{ 
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`
            }}/>
        </View>
    )
};

const style = StyleSheet.create({});

export default SquareScreen;