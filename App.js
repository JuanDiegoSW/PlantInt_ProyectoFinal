import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from "./components/loginScreen/LoginScreen";
import Home from "./components/MenuScreen/Home.js";
import LogoTitle from "./components/MenuScreen/logo";
import Detalles from "./components/detailScreen/Detail";
import SettingsConf from "./components/MenuScreen/Settings";

const Stack = createStackNavigator()

export default function App() {
  return (
    // <OurFlatList showAlerta={() =>showAlert()}></OurFlatList>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} 
          options={{ 
            headerTitle: props => <LogoTitle main={true} {...props} />, 
            headerLeft: null, 
            headerStyle: {backgroundColor:"white"}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text:{
    fontSize:30
  }
});
