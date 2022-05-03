import React, { useReducer } from 'react';
import { View, StyleSheet} from 'react-native';
import NumCounter from '../components/NumCounter';

const NUM_INCREMENT = 1;

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }
    
    // console.log({...state, num: (state.num + action.amount)});
    return {...state, num: (state.num + action.amount)};
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {num: 0});

    return(
        <NumCounter 
            number={state.num}
            onIncrease={() => dispatch({amount: NUM_INCREMENT})}
            onDecrease={() => dispatch({amount: -NUM_INCREMENT})}/>)
};

const styles = StyleSheet.create({});

export default Counter;