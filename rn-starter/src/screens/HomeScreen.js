import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

/**
 * 
 * @param {*} props 
 * @returns 
 * 
 * 하단에 있는 props들은 App.js에 있는 navigation에서 자동적으로
 * 할당받은 props들이 존재한다. 
 * 그중에 하나가 props.navigation.navigate이다. 
 * 이는 function이고 어디로 navigate를 하는지 string을 받아서 render 해준다.
 * 
 */

const HomeScreen = (props) => {
  const greeting = "Nice to meet you!";
  // JSX 내에서 {}는 javascript의 variable을 참조할 수 있게 한다.
  // ex) { greeting }
  // 하지만 object는 {}를 사용해도 참조할 수가 없다.
  // ex) greeting = { color: 'red'}
  //     { greeting } <-- greeting이 object이기 때문에 jsx 내에서 사용이 불가능함
  
  // variable에 JSX 자체 값을 줄 수 있다.
  const bye = <Text> Good Bye ! </Text>

  const myName = "StevenLee";
  return (
    <View>
      <Text style={ headStyles.text }>Getting started with React Native</Text>
      <Text style={ bodyStyles.text }>My name is { myName }</Text>
      <Button 
        onPress={() => props.navigation.navigate("Components")}
        title='Go to Components Demo'/>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Test Button</Text>
      </TouchableOpacity>

      <Button 
        onPress={() => props.navigation.navigate("Image")}
        title='Go to ImageScreen Demo'/>

      <Button 
        onPress={() => props.navigation.navigate("Counter")}
        title='Go to Counter Demo'/>

      <Button 
        onPress={() => props.navigation.navigate("Color")}
        title='Go to Color Demo'/>

      <Button 
        onPress={() => props.navigation.navigate("Square")}
        title='Go to Square Demo'/>

      <Button 
        onPress={() => props.navigation.navigate("Counter")}
        title='Go to Counter Demo'/>

      <Button 
        onPress={() => props.navigation.navigate("Text")}
        title='Go to Text Demo'/>

      <Button 
        onPress={() => props.navigation.navigate("Box")}
        title='Go to Box Demo'/>
    </View>
  );

  // return (
  //   <View>
  //     <Text style={styles.text}>Hi there!</Text>
  //     <Text>{ greeting }</Text>
  //     { bye }
  //   </View>
  // );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

const headStyles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

const bodyStyles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});



export default HomeScreen;
 