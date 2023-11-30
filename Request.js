import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput, Alert, ScrollView, KeyboardAvoidingView, KeyboardAwareScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { SelectList } from 'react-native-dropdown-select-list';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Stack = createNativeStackNavigator();


export default function Request() {
  const [number, onChangeNumber] = React.useState('');
  const [addyVal1, onChangeAddy1] = React.useState('Address Line 1');
  const [addyVal2, onChangeAddy2] = React.useState('Adress Line 2');
  const [stateVal, onChangeState] = React.useState('State');
  const [cityVal, onChangeCity] = React.useState('City');
  
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
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
        <TextInput
        style={styles.input}
        onChangeText={onChangeCity}
        value={cityVal}
        placeholder="City"
        keyboardType="default"
      />
              <TextInput
        style={styles.input}
        onChangeText={onChangeState}
        value={stateVal}
        placeholder="State"
        keyboardType="default"
      />
      <Pressable style={styles.button}>
        <Text>Submit Request</Text>
      </Pressable>
        <StatusBar style="auto" />
        </ScrollView>
        </KeyboardAvoidingView>
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
      padding: '3%',
      margin: '3%',
      marginTop: '5%',
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#3FFF1B',
    }, 
    input: {
      height: 40,
      color: 'white',
      margin: '1%',
      marginLeft: "3%",
      marginRight: "3%",
      paddingLeft: '3%',
      backgroundColor: '#3D3D3D',
      minWidth: '90%',
      borderRadius: 4
  },
    questions: {
        margin: '3%',
        color: '#3FFF1B',
        fontSize: 24,
        fontWeight: 'regular'
    }
  });