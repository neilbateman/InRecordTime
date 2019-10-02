import React, {useState, setState, useContext} from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, ActionSheetIOS, ActivityIndicator } from 'react-native';
import FormButton from '../components/FormButton';
import FormTextInput from '../components/FormTextInput';
import Config from '../Config';

const CreateRacerScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');

    const [kegs, setKegs] = useContext(RacerContext);

    const updateName = (e) => {
        setType(e.target.value);
    };
    const updateAge = (e) => {
        setBrand(e.target.value);
    };
    const updateSex = (e) => {
        setPints(e.target.value);
    };


    const CreateRacer = e => {
        e.preventDefault();
        setRacer(prevRacer => [...prevRacer, {name: name, age: age, sex: sex}])
    };

        return (
            <ScrollView style={{
                    backgroundColor: '#fff'
                }} ref={ref => this.scrollView = ref}>
                    <View style={{marginBottom: 10}}>


                    <FormTextInput placeholder='Name'
                            onChangeText={updateName} />

                    <FormTextInput placeholder='Age'
                            keyboardType='number'
                            autoCapitalize='none'
                            onChangeText={updateAge} />

                    <FormTextInput placeholder='Sex'
                            onChangeText={updateSex}
                            secureTextEntry={true}  />

                    <FormButton
                        backgroundColor='#3897f0'
                        label='Create Runner'
                        isLoading={this.state.isLoading}
                        onPress={CreateRacer}/>

                </View>
            </ScrollView>
        );
}

export default CreateRacerScreen;
