import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput, Alert, Header } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const Stack = createNativeStackNavigator();


export default function Offer() {
    const [number, onChangeNumber] = React.useState('');
    const [addyVal1, onChangeAddy1] = React.useState('');
    const [addyVal2, onChangeAddy2] = React.useState('');
    const [value, setValue] = useState(dayjs());


    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.questions}> Where are you going? </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Event Name"
        keyboardType="default"
      />
        <Text style={styles.questions}> Where are you leaving from? </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeAddy1}
        value={addyVal1}
        placeholder="Address Line 1"
        keyboardType="default"
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeAddy2}
        value={addyVal2}
        placeholder="Address Line 2"
        keyboardType="default"
      />
        <Text style={styles.questions}> When are you leaving? </Text>
        <DateTimePicker
        value={value}
        onValueChange={(date) => setValue(date)}
        headerButtonColor= "white"
        selectedTextStyle={{
            fontWeight: 'bold',
            color: 'white',
          }}
          calendarTextStyle={{
            fontWeight: 'bold',
            color: 'white',
          }}
          headerTextStyle =
          {{color: 'white'}}
      />

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'right',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#3FFF1B',
    }, 
    input: {
        height: 40,
        margin: 12,
        padding: '5%',
        color: 'white',
        backgroundColor: '#3D3D3D',
        minWidth: '90%',
        borderRadius: 5
    },
    questions: {
        margin: '3%',
        color: '#3FFF1B',
        fontSize: 24,
        fontWeight: 'regular'
    }
  });