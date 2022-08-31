import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(70);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [endresult, setEndresult] = useState(0);

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsl = grams - (burning * time)

    if (gender === 'male') {
      result = gramsl / (weight * 0.7)
    }
    else {
      result = gramsl / (weight * 0.6)
    }
    
    if (result < 0) {
      setEndresult(0);
     }
     
     setEndresult(result);
  }
  



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alcometer</Text>
      <Text style={styles.field}>Weight</Text>
      <TextInput style={styles.input} value={weight} onChangeText={text => setWeight(text)} keyboardType='decimal-pad'/>
      <Text style={styles.field}>Bottles</Text>
      <NumericInput type='up-down' onChange={bottle => setBottles(bottle)} minValue='0'/>
      <Text style={styles.field}>Hours</Text>
      <NumericInput type='up-down' onChange={hour => setTime(hour)} minValue='0'/>
      <RadioForm
        style={styles.radio}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
      />
      <Text style={styles.field}>{endresult.toFixed(2)}</Text>
      <Button style={styles.button} onPress={calculate} title='Calculate'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
});
