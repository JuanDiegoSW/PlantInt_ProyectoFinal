import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, CheckBox, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) =>{
    return(
        <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Text style={styles.TittleText}
                >PlantIn</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.lineas} />    
                <Image source={{uri:"https://i.ibb.co/CVSw1DS/logo.png"}} style={styles.imagen}/>
                <View style={styles.lineas} />
            </View>
            <View style={styles.login}>
                <View style={{flexDirection:"row", marginTop:4, marginBottom:30}}/>
                <View>
                    <Text style={{fontSize:17, marginBottom: 3,color: "#067bc1",fontSize:20,textAlign:"center",fontWeight: 'bold'}}>Usuario</Text>
                    <TextInput style={{borderWidth: 2, borderColor:"#a3d0e3", padding:4,borderRadius:10}}/>
                </View>
                <View>
                <Text style={{fontSize:17, marginBottom: 3,color: "#067bc1",fontSize:20,textAlign:"center",fontWeight: 'bold'}}>Password</Text>
                    <TextInput secureTextEntry={true} style={{borderWidth: 2, borderColor:"#a3d0e3",padding:4,borderRadius:10}}/>
                </View>
                
                
                <View style={{flexDirection:"row", marginTop:4, marginBottom:20}}>
                    
                </View>
                <TouchableOpacity
                    style={styles.submit}
                    onPress={()=> navigation.navigate("Home")}      
                >
                    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity           
                    style={styles.register}
                    onPress={()=> navigation.navigate("Home")}      
                >
                    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
},
home: {
    alignItems: 'center',
},
login:{
    marginRight: "10%",
    marginLeft: "10%",
    flex: 4,
    width: "90%",
},
submit: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#067bc1",
    textAlign: "center",
    borderRadius:10,
},
register: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#067bc1",
    textAlign: "center",
    borderRadius:10,
    marginTop:4
},
titulo:{
    fontSize:20,
    marginTop: 25,
    textAlign:"center",
    marginBottom:27
},

imagen:{
    width: 90,
    height: 90,
    marginRight:10,
    marginLeft: 10,
    borderRadius:90,
},
text:{
    fontSize:40,
    paddingTop: 40,
    flex: 0.6,
    color: "#067bc1",
    justifyContent: 'center',
    fontWeight: 'bold',
},
TittleText:{
        fontSize:40,
        paddingTop: 40,
        flex: 0.6,
        color: "#067bc1",
        fontWeight: 'bold'
}

});
export default LoginScreen