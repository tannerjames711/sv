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
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const Stack = createNativeStackNavigator();


export default function Offer() {
  const [number, onChangeNumber] = React.useState('');
  const [addyVal1, onChangeAddy1] = React.useState('');
  const [addyVal2, onChangeAddy2] = React.useState('');
  const [stateVal, onChangeState] = React.useState('');
  const [cityVal, onChangeCity] = React.useState('');
  const [value, setValue] = useState(dayjs());
  const [selected, setSelected] = React.useState("");
  
  const data = [
    {key:'1', value:'10 min'},
    {key:'2', value:'15 min'},
    {key:'3', value:'30 min'},
    ]
    const parkingData = [
    {key:'1', value:'Street Parking'},
    {key:'2', value:'Premier Parking'},
    ]
    
    
    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://support.google.com/firebase/answer/7015592
    const firebaseConfig = {
        apiKey: "AIzaSyAX754SV_qLKXcqj2SrJyfRZLDKRs6BZLI",
        authDomain: "rollingapp-87815.firebaseapp.com",
        projectId: "rollingapp-87815",
        storageBucket: "rollingapp-87815.appspot.com",
        messagingSenderId: "396937010546",
        appId: "1:396937010546:web:e472bd306a0bc5f4a1d1eb"
      };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    
    
    const handlePress = () => {
      addDoc(collection(db, "post"), {
        eventName: number,
        offerAddyL1: addyVal1,
        offerAddyL2: addyVal2,
        offerCity: cityVal,
        offerState: stateVal,

      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((e) => {
          console.error("Error adding document: ", e);
        });
    };

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
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
        <Text style={styles.questions}> When are you leaving? </Text>
        <DateTimePicker
        value={value}
        onValueChange={(date) => setValue(date)}
        headerButtonColor= "#3FFF1B"
        selectedTextStyle={{
            fontWeight: 'bold',
            color: '#3FFF1B',
          }}
          calendarTextStyle={{
            color: '#3FFF1B',
          }}
          headerTextStyle =
          {{color: '#3FFF1B'}}
          weekDaysTextStyle =
          {{color: '#3FFF1B'}}
      />
        <Text style={styles.questions}> How much do you want to charge? </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeAddy1}
        value={addyVal1}
        placeholder="Address Line 1"
        keyboardType="numeric"
      />
        <Text style={styles.questions}> When are meeting to drive back? </Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        search ='false'
        inputStyles = {{color: "white"}}
        dropdownStyles = {{
          backgroundColor: "#3D3D3D",
          color: 'white',
          width: '50%'

        }}
        boxStyles = {{
          backgroundColor: "#3D3D3D",
          color: 'white',
          width: '50%'
        }}
        dropdownTextStyles = {{
          color: 'white'
        }}
    />
        <Text style={styles.questions}> What type of parking do you plan on having? </Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={parkingData} 
        save="value"
        search ='false'
        inputStyles = {{color: "white"}}
        dropdownStyles = {{
          backgroundColor: "#3D3D3D",
          color: 'white',
          width: '50%'

        }}
        boxStyles = {{
          backgroundColor: "#3D3D3D",
          color: 'white',
          width: '50%'
        }}
        dropdownTextStyles = {{
          color: 'white'
        }}
        />
        <Text style={styles.questions}> Safety Agreement: </Text>
        <BouncyCheckbox onPress={(isChecked) => {}} 
          fillColor="#3FFF1B"
          text="I promise to drive safe and sober"
          textStyle={{ color: "white" }}
        />

      <Pressable style={styles.button} onPress={handlePress}>
        <Text>Submit</Text>
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