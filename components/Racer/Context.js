import React, { useState, createContext } from 'react'


export let RacerContext = createContext();
export let Provider = props => {
  let [racers, setRacers] = useState([
    { id: 1, name: 'Neil Bateman', age: 26, sex: 'M'}
  ]);
  return (
    <RacerContext.Provider value ={[racers, setRacers]}>
      {props.children}
    </RacerContext.Provider>
  );
}
