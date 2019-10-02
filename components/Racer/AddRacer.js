import React, { useState } from 'react';
import FormTextInput from '../FormTextInput';

const AddRacer = props => {
  const initialState = { id: null, name: '', age: null, sex: ''}
  const [racer, setRacer] = useState(initialState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setRacer({...racer, [name]: value})
  }

  return (
    <FormTextInput
        place
  )
}
