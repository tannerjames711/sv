import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, SearchBar, Alert, Header, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Request from './Request.js';
import SignUp from './SignUp.js';



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
const navigation = useNavigation();
  return (
    <View style={styles.post}>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text style={styles.drivername}>{postData.driver}</Text>
          <Text style={styles.subtext}>${postData.price} /Person</Text>
        </View>
        <View style={styles.cell}>
          <Pressable style={styles.bookride} onPress={() => navigation.navigate("SignUp") }>
            <Text style={styles.text}> Book Ride</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.cellbl}>
          <Text style={styles.subheader}>Pick-Up</Text>
          <Text style={styles.subtext}>
            {postData.add1}, {postData.city} {postData.state}, {postData.zip}
          </Text>
          <Pressable style={styles.request} onPress={() => navigation.navigate("Request") }>
            <Text style={styles.text}> Request New Pick-Up</Text>
          </Pressable>
        </View>
        <View style={styles.cellbr}>
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
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <StatusBar style="auto" />
    </SafeAreaView>
    </ScrollView>

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
  row1: {
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#3D3D3D',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    padding: '1%'
  },
  row2: {
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#3D3D3D',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: '1%'
  },

  cell: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'right',
    borderWidth: 1,
    borderColor: '#3D3D3D',
    backgroundColor: '#3D3D3D',
    margin: '.5%',
    borderRadius: 5,
  },
  cellbr: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'right',
    borderColor: '#3D3D3D',
    backgroundColor: '#3D3D3D',
    margin: '.5%',
    width: '30%', 
    borderLeftColor: 'black',
    borderLeftWidth: 3,
    paddingLeft: '2%'
  },
  cellbl: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'right',
    borderColor: '#3D3D3D',
    backgroundColor: '#3D3D3D',
    margin: '.5%',
    borderRadius: 5,
    minWidth: '25%',
    paddingRight: '1%'
  },
  post: {
    width: '95%',
    borderRadius: 5,
    paddingBottom: '5%'
  },
  drivername:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  subtext:{
    fontSize: 15,
    fontWeight: 'normal',
    color: '#D2D2D2',
    padding: '1%',

  }, 
  subheader:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3FFF1B'
  },
  request:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#3FFF1B',
    marginTop: '2%'
  },
  bookride:{
    width: '60%',
    alignItems: 'center',
    justifyContent: 'left',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#3FFF1B',
    marginTop: '4%',
    marginLeft: 'auto',
    marginRight: '2%',
  },

});