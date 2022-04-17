import React from "react"
import {View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Image,TextInput, Button} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Video } from 'expo-av';
import mivideo from "./mivideo.mp4";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import database from "../database";

const TabHome = ({navigation}) =>{
    
    const cambiazo = (item) => {
        navigation.navigate("Details",{item: item})
        
        }
    return (
    <>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={database}
            keyExtractor={item=> item.id}
            ItemSeparatorComponent={separator}
            renderItem= {({item})=>(
                <TouchableOpacity style={styles.contenedor} onPress={()=>cambiazo(item)}>
                  <Item title={item.title} desc={item.description} imagen={item.imagen} style={styles.item} />
                </TouchableOpacity>
                
              )
            }
          />
          </SafeAreaView>
        
      </>
  );
}

function TabSettings({navigation}) {
  const cambiazo = (item) => {
        navigation.navigate("Settings",{item: item})
        ios-person-outline
        }
 
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{           
              justifyContent:'center',
              width:330,
              height:50,
              backgroundColor:'#fff',
            }}
        >
      <Ionicons name={"person-outline"}  size={20} color="#00000">
        <Text> Account</Text>
        <Ionicons name={"chevron-forward-outline"}size={20} style ={{paddingStart:180}}/>
      </Ionicons>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{           
              justifyContent:'center',
              width:330,
              height:50,
              backgroundColor:'#fff',
            }}
        >
      <Ionicons name={"notifications-outline"}  size={20} color="#00000">
        <Text> Notificacions</Text>
        <Ionicons name={"chevron-forward-outline"}size={20} style ={{paddingStart:140}}/>
      </Ionicons>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{           
              justifyContent:'center',
              width:330,
              height:50,
              backgroundColor:'#fff',
            }}
        >
      <Ionicons name={"eye-outline"}  size={20} color="#00000">
        <Text> Appereance</Text>
        <Ionicons name={"chevron-forward-outline"}size={20} style ={{paddingStart:153}}/>
      </Ionicons>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{           
              justifyContent:'center',
              width:330,
              height:50,
              backgroundColor:'#fff',
            }}
        >
      <Ionicons name={"lock-closed-outline"}  size={20} color="#00000">
        <Text> Privacy & Security</Text>
        <Ionicons name={"chevron-forward-outline"}size={20} style ={{paddingStart:88}}/>
      </Ionicons>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{           
              justifyContent:'center',
              width:330,
              height:50,
              backgroundColor:'#fff',
            }}
        >
      <Ionicons name={"headset-outline"}  size={20} color="#00000">
        <Text> Help and Support</Text>
        <Ionicons name={"chevron-forward-outline"}size={20} style ={{paddingStart:100}}/>
      </Ionicons>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{           
              justifyContent:'center',
              width:330,
              height:50,
              backgroundColor:'#fff',
            }}
        >
      <Ionicons name={"help-circle-outline"}  size={20} color="#00000">
        <Text> About</Text>
        <Ionicons name={"chevron-forward-outline"}size={20} style ={{paddingStart:195}}/>
      </Ionicons>
      </TouchableOpacity>
      </View>
    </View>
    
  )
}
function TabVideo(){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: mivideo,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}


const Tab = createBottomTabNavigator();



const Item = ({ title,desc, imagen }) => (
  <View style={styles.item}>
  <Image
    style={styles.imagen}
    source={{uri: imagen}}/>
    <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{desc}</Text>
    </View>
  </View>
);
const separator = () =>{
  return(
    <View style={styles.separator}>
    </View>
  )
}
const HomeScreen = () =>{
    const cambiazo = (item) => {
        navigation.navigate("Details",{item: item})
        }
    return (
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-list' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Video') {
              return (
                <Ionicons
                  name={focused ? 'logo-youtube' : 'logo-youtube'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen name="Home" component={TabHome} options={{headerShown: false}} />
        <Tab.Screen name="Settings" component={TabSettings} />
        <Tab.Screen name="Video" component={TabVideo} options={{headerShown: false}}/>
      </Tab.Navigator>

        
      
      );
  }

  const styles = StyleSheet.create({
    
    contenedor: {
      paddingBottom: 5,
      paddingTop: 5,
      margin: 1,
      fontSize: 222,
    },
    imagen: {
      width:80,
      height:80,
      marginStart: 10,
      marginEnd: 7,
      marginTop:13,
      borderRadius: 40
    },
    card: {
      flex:1,
      justifyContent: 'center',
      
    },
    card_settings: {
      paddingLeft:50,
      paddingRight:10,
      flex:1,
      
    },
    item: {
      flexDirection:'row',
      flex: 1,
      fontSize: 222,
    },
    title: {
      fontSize: 22,
      marginStart: 10,
      justifyContent: 'center'
    },
    description: {
      fontSize: 13,
      marginStart: 10
    },
    separator:{
      height:1,
      width:"100%",
      backgroundColor: 'black'
    },
    text:{
      
      justifyContent: 'center',
      fontSize:15,
      fontFamily:'arial'
      //textAlign: "center"
    },
    viewbutton:{
      margin:3,
    },
    video:{
      padding:30
    },
    buttonContainer:{
       
    }
});
export default HomeScreen