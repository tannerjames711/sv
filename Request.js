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
  const [addyVal1, onChangeAddy1] = React.useState('');
  const [addyVal2, onChangeAddy2] = React.useState('');
  const [stateVal, onChangeState] = React.useState('');
  const [cityVal, onChangeCity] = React.useState('');
  
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