import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(null);
  const navigation = useNavigation();


  const firebaseConfig = {
    apiKey: "AIzaSyAX754SV_qLKXcqj2SrJyfRZLDKRs6BZLI",
    authDomain: "rollingapp-87815.firebaseapp.com",
    projectId: "rollingapp-87815",
    storageBucket: "rollingapp-87815.appspot.com",
    messagingSenderId: "396937010546",
    appId: "1:396937010546:web:e472bd306a0bc5f4a1d1eb"
  };
  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    // Initialize Firebase Auth when the component mounts
    const authInstance = getAuth(app);
    setAuth(authInstance);

    return () => {
      // Optionally perform cleanup if needed
    };
  }, [app]);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      if (auth) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
        navigation.navigate("Home")
      } else {
        console.error('Auth object is not initialized');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logintext}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.logintext}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'right',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3FFF1B',
  },
  logintext: {
    margin: '3%',
    color: '#3FFF1B',
    fontSize: 24,
    fontWeight: 'regular'
},
input: {
  height: 40,
  padding: '5%',
  color: 'white',
  backgroundColor: '#3D3D3D',
  minWidth: '90%',}
});