import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';


const Racer = ({name, age, sex}) = > {
  const [racers, setRacers] = useContext();
  let RacerInfo = <Text>Name: {name} Age: {age} Sex: {sex}</Text>
  return (
    <View>
    {RacerInfo}
    </View>
  )

}
export default Racer;
