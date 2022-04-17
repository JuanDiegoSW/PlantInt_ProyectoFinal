import React from "react"
import {View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Image,Button} from "react-native"


const SettingsConf = ({navigation, route})=>{
    const {item} = route.params
    console.log(item)
    return(
      <View style={styles.home}>
        <Text style={styles.titulo}>{item.title}</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    home:{
        margin: 10
    },
    imagen: {
        height:300,
        width:300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo:{
        fontSize: 20, 
        fontWeight:"bold",
        textTransform: "uppercase"
    },
    description: {
        marginTop: 10,
        fontSize:15
    }
  })
export default SettingsConf