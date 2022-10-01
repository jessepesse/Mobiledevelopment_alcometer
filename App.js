import { useState } from 'react';
import { Text, View, TextInput, Button, Alert, Switch, Pressable } from 'react-native';
import { LightTheme, DarkTheme } from './mystyle';
import NumericInput from 'react-native-numeric-input'
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [endresult, setEndresult] = useState(0);

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const [isEnabled,setIsEnabled] = useState(false);
  const [isDark,setDark] = useState(false); 
  const theme = isDark ? DarkTheme : LightTheme;

  function changeTheme(){
    setDark(prev => !prev );
    setIsEnabled(prev => !prev); 
  }


  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsl = grams - (burning * time)

    if (weight === 0) {
      Alert.alert(
        "Set weight",
        "Weight can not be empty",
        [
          {text: "Ok",}
        ]
      );
    }
    else if (gender === 'male') {
      result = gramsl / (weight * 0.7)
    }
    else {
      result = gramsl / (weight * 0.6)
    }
    setResult(result);
  }

  function underzero() {
    if (result<0){
      setEndresult(0)
    }
    else {
      setEndresult(result)
    }
  }

  function buttonclick() {
    calculate();
    underzero();
  }
  
  function resultcolor() {
    if (endresult>0 && endresult<0.5) {
      return {
        color: '#228B22'
      }
    }
    if (endresult>=0.5 && endresult<1)
     return {
      color: '#999900'
     }
     if(endresult>=1) {
       return {
         color: 'red'}
     }
   }



  return (
    <View style={theme.container}>
      <Text style={theme.Titletext}>Alcometer</Text>
      <View style={theme.field}>
        <Text style={theme.text}>Dark theme</Text>
      <Switch 
      value={isEnabled}
      onValueChange={changeTheme}
      thumbColor={isEnabled ? "#cbcbff" : "#6202ee"}
      title="Change theme"/>
      </View>

      <View style={theme.field}>
      <Text style={theme.text}>Weight</Text>
      <TextInput style={theme.input} value={weight} onChangeText={text => setWeight(text)} keyboardType='decimal-pad' returnKeyType='done'/>
      </View>

      <View style={theme.field}>
      <Text style={theme.text}>Bottles</Text>
      <NumericInput type='up-down' onChange={bottle => setBottles(bottle)} min={0} textColor={theme.specialcolor}/>
      </View>

      <View style={theme.field}>
      <Text style={theme.text}>Hours</Text>
      <NumericInput type='up-down' onChange={hour => setTime(hour)} min={0} textColor={theme.specialcolor}/>
      </View>

      <View style={theme.field}>
      <Text style={theme.text}>Gender</Text>
      <RadioForm
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        selectedLabelColor={theme.specialcolor}
        labelColor={theme.specialcolor}
        selectedButtonColor={theme.mybutton}
        buttonColor={theme.mybutton}
        onPress={(value) => {setGender(value)}}
      />
      </View>

      <Text style={[theme.Titletext,resultcolor()]}>{endresult.toFixed(2)}</Text>
      <Pressable style={theme.fieldbutton} onPress={buttonclick}><Text style={theme.button}>Calculate</Text></Pressable>
    </View>
  );
}

