import { StyleSheet } from "react-native";

export const LightTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    Titletext: {
      color: 'black',
      fontSize: 30,
    },
    text: {
      color: 'black',
    },
    field: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        height: 40,
        width: 120,
        textAlign: 'center'
    },
    fieldbutton: {
      marginTop: 20,
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: '#6202ee',
    },
    button: {
      color: 'white',
    },
    specialcolor: 'black',
    mybutton: '#6202ee'
  });
  
 export const DarkTheme = StyleSheet.create({
    container: {
      ...LightTheme.container,
      backgroundColor: 'black',
      color: 'white',
    },
    Titletext: {
      ...LightTheme.Titletext,
      color: 'white'
    },
    text: {
      color: 'white'
    },
    field: {
        ...LightTheme.field,
    },
    input: {
        ...LightTheme.input,
        borderColor: 'white',
        color: 'white',
    },
    fieldbutton: {
        ...LightTheme.fieldbutton,
        backgroundColor: '#cbcbff'
    },
    button: {
        color: '#141313'
    },
    specialcolor: 'white',
    mybutton: '#cbcbff'
  });