import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, SearchBar, Alert, Header } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Offer from './Offer.js';
import Listing from './Listing.js';
import Request from './Request.js';
import SignUp from './SignUp.js';



const Stack = createNativeStackNavigator();
const eventData = {
  eventname: "Electric Daisy Carnival",
  location: "Las Vegas",
  date: "12/17"
}


function EventPost() {
  const navigation = useNavigation();
  return(
    <Pressable style={styles.eventListing} onPress={() => navigation.navigate("Listing") }>
      <Text style={styles.name}> {eventData.eventname}</Text>
      <Text style={styles.sub}> {eventData.location} | {eventData.date}</Text>
    </Pressable>
  )
}


function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <EventPost />
      <EventPost />
      <EventPost />
      <EventPost />
      <EventPost />
      <EventPost />
      <EventPost />
      <EventPost />
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
            name="SignUp"
            component={SignUp}
          />
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
           <Stack.Screen 
          name="Listing" 
          component={Listing}
          options={{ 
            headerTitle: eventData.eventname,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'black',
            }
          }}
          />
          <Stack.Screen 
          name="Request" 
          component={Request}
          options={{ 
            headerTitle: 'Request',
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
  eventListing: {
    alignItems: 'right',
    width: '95%',
    justifyContent: 'right',
    padding: '3%',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#3D3D3D',
    borderColor: '#3FFF1B',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: '2%'
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sub: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'normal'


  }
});
