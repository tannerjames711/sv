import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, SearchBar, Alert, Header } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Offer from './Offer.js'

const Stack = createNativeStackNavigator();


function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function HeaderLogo() {
  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
      <Image
        style={{ width: 100, height: 30}}
        source={require('./assets/logo-roll.png')}
      />
    </View>
  );
}

function HeaderButton() {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate("Offer") }>
      <Text style={styles.text}> Offer to Drive</Text>
    </Pressable>
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: () => <HeaderLogo/>, 
            headerRight: () => <HeaderButton/>,
            headerStyle: {
              backgroundColor: 'black',
            }}}/>
        <Stack.Screen 
          name="Offer" 
          component={Offer}
          options={{ 
            headerTitle: "Offer to Drive",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'black',
            }
          }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3FFF1B',
  }
});
