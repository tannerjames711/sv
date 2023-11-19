import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, SearchBar, Alert, Header } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Offer from './Offer.js'

const postData = {
  driver: 'Sophia',
  price: '15',
  rating: '5.0',
  add1: '606 SW Lombard',
  city: 'Las Vegas',
  state: 'WA',
  zip: '97229',
  meet: 'Ride back 15 min after event ends',
  park: 'Premier'
}


function Post() {
  return (
      <View style={styles.post}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.drivername}>{postData.driver}</Text>
            <Text style={styles.subtext}>${postData.price} /Person</Text>
          </View>
          <View style={styles.cell}>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Offer") }>
              <Text style={styles.text}> Offer to Drive</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.subheader}>Pick-Up</Text>
            <Text style={styles.subtext}>
              {postData.add1}, {postData.city} {postData.state}, {postData.zip}
            </Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Offer") }>
              <Text style={styles.text}> Offer to Drive</Text>
            </Pressable>

          </View>
          <View style={styles.cell}>
            <Text style={styles.subheader}>Ride Back</Text>
            <Text style={styles.subtext}>{postData.meet}</Text>
            <Text style={styles.subheader}>Parking Type</Text>
            <Text style={styles.subtext}>{postData.park}</Text>

          </View>
        </View>
      </View>
    );
  };

export default function Listing() {
  return (
    <SafeAreaView style={styles.container}>
      <Post />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'right',
    color: 'white',
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
  },
  row: {
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#3D3D3D',
  },
  cell: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'right',
    borderWidth: 1,
    borderColor: '#3D3D3D',
    backgroundColor: '#3D3D3D',
    margin: '.5%'
  },
  post: {
    width: '95%',
    borderRadius: 5,
  },
  drivername:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  subtext:{
    fontSize: 14,
    fontWeight: 'normal',
    color: '#D2D2D2'
  }, 
  subheader:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3FFF1B'
  }
});