import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, SearchBar, Alert, Header } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Offer from './Offer.js';
import Listing from './Listing.js';
import Request from './Request.js';
import SignUp from './SignUp.js';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const Stack = createNativeStackNavigator();
const eventData = {
  eventname: "Electric Daisy Carnival",
  location: "Las Vegas",
  date: "12/17"
}

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


function EventPost({ eventName, eventCity }) {
const navigation = useNavigation();
return (
<Pressable style={styles.eventListing} onPress={() => navigation.navigate("Listing")}>
  <Text style={styles.name}>{eventName}</Text>
  <Text style={styles.sub}>{eventCity}</Text>
</Pressable>
);
}

function HomeScreen() {
const [events, setEvents] = useState([]);

useEffect(() => {
  const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "post"));
  const uniqueEventNames = new Set(); // Use a Set to track unique event names
  const eventData = [];

  querySnapshot.forEach((doc) => {
    const eventName = doc.data().eventName;

    // Check if the event name is not already in the set
    if (!uniqueEventNames.has(eventName)) {
      const eventCity = doc.data().offerCity;
      eventData.push({ eventName, eventCity });
      uniqueEventNames.add(eventName); // Add the event name to the set
    }
  });

  setEvents(eventData);
};

fetchData();
}, []);

return (
<SafeAreaView style={styles.container}>
  {events.map((event, index) => (
    <EventPost key={index} eventName={event.eventName} eventCity={event.eventCity} />
  ))}
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
        {/* <Stack.Screen 
            name="SignUp"
            component={SignUp}
          /> */}
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
            headerTitle: 'Listings',
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
